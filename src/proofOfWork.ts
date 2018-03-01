import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { IProofOfWork } from "@iota-pico/crypto/dist/interfaces/IProofOfWork";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as ffi from "ffi";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as util from "util";

/**
 * ProofOfWork implementation using NodeJS.
 */
export class ProofOfWork implements IProofOfWork {
    /* @internal */
    private _library: {
        ccurl_pow: {
            async(trytes: string, minWeightMagnitude: number, cb: (error: any, returnedTrytes: string) => void): void;
        };
    };

    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    public async initialize(): Promise<void> {
        const fullPath = path.resolve(path.join(__dirname, "../binaries/"));

        const platform = os.platform();

        let libFile = path.join(fullPath, platform, "libccurl");
        switch (platform) {
            case "darwin": libFile += ".dylib"; break;
            case "win32": libFile += ".dll"; break;
            default: libFile += ".so";
        }

        const stat = await util.promisify(fs.lstat)(libFile);
        if (stat.isFile() || stat.isSymbolicLink()) {
            this._library = ffi.Library(libFile, {
                ccurl_pow: ["string", ["string", "int"]]
            });
        } else {
            throw new CryptoError("Library files does not exist", { libFile });
        }
    }

    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    public async pow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes> {
        if (this._library === undefined || this._library === null) {
            throw new CryptoError("Library not loaded, have you called initialize");
        }
        if (trytes === undefined || trytes === null) {
            throw new CryptoError("Trytes can not be null or undefined");
        }
        if (!NumberHelper.isInteger(minWeightMagnitude)) {
            throw new CryptoError("The minWeightMagnitude value is not an integer");
        }

        return new Promise<Trytes>((resolve, reject) => {
            this._library.ccurl_pow.async(trytes.toString(), minWeightMagnitude, (error, returnedTrytes) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(Trytes.fromString(returnedTrytes));
                }
            });
        });
    }
}
