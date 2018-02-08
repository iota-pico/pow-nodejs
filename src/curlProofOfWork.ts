import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ICurlProofOfWork } from "@iota-pico/crypto/dist/interfaces/ICurlProofOfWork";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as ffi from "ffi";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as util from "util";

/**
 * CurlProofOfWork implementation using NodeJS.
 */
export class CurlProofOfWork implements ICurlProofOfWork {
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
            throw new CoreError("Library files does not exist", { libFile });
        }
    }

    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    public async pow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes> {
        return new Promise<Trytes>((resolve, reject) => {
            if (trytes === undefined || trytes === null) {
                throw new CoreError("Trytes can not be null or undefined");
            }
            if (!NumberHelper.isInteger(minWeightMagnitude)) {
                throw new CoreError("The minWeightMagnitude value is not an integer");
            }

            this._library.ccurl_pow.async(trytes.toString(), minWeightMagnitude, (error, returnedTrytes) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(returnedTrytes);
                }
            });
        });
    }
}
