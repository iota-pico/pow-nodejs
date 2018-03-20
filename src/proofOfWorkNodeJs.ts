import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { ProofOfWorkBase } from "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as ffi from "ffi";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as util from "util";
import { INodePlatform } from "./INodePlatform";

/**
 * ProofOfWork implementation using NodeJS.
 */
export class ProofOfWorkNodeJs extends ProofOfWorkBase {
    /* @internal */
    private readonly _nodePlatform: INodePlatform;

    /* @internal */
    private _library: {
        ccurl_pow: {
            async(trytes: string, minWeightMagnitude: number, cb: (error: any, returnedTrytes: string) => void): void;
        };
    };

    /**
     * Create a new instance of ProofOfWork.
     * @param nodePlatform Provides platform specific functions, optional mostly used for testing.
     * @param timeService Service to get the time for attachments.
     */
    constructor(nodePlatform?: INodePlatform, timeService?: ITimeService) {
        super(timeService);
        if (ObjectHelper.isEmpty(nodePlatform)) {
            this._nodePlatform = {
                pathResolve: path.resolve,
                pathJoin: path.join,
                platform: os.platform,
                lstat: fs.lstat,
                loadLibrary: ffi.Library
            };
        } else {
            this._nodePlatform = nodePlatform;
        }
    }

    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    public async initialize(): Promise<void> {
        await super.initialize();

        const fullPath = this._nodePlatform.pathJoin(path.join(__dirname, "../binaries/"));

        const platform = this._nodePlatform.platform();

        let libFile = this._nodePlatform.pathJoin(fullPath, platform, "libccurl");
        switch (platform) {
            case "darwin": libFile += ".dylib"; break;
            case "win32": libFile += ".dll"; break;
            default: libFile += ".so";
        }

        const stat = await util.promisify(this._nodePlatform.lstat)(libFile);
        if (stat.isFile()) {
            this._library = this._nodePlatform.loadLibrary(libFile, {
                ccurl_pow: ["string", ["string", "int"]]
            });
        } else {
            throw new CryptoError("Library files does not exist", { libFile });
        }
    }

    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    public async singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes> {
        return new Promise<Trytes>((resolve, reject) => {
            if (ObjectHelper.isEmpty(this._library)) {
                throw new CryptoError("Library not loaded, have you called initialize");
            }
            if (!ObjectHelper.isType(trytes, Trytes)) {
                throw new CryptoError("The trytes must be an object of type Trytes");
            }
            if (!NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
                throw new CryptoError("The minWeightMagnitude must be > 0");
            }
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
