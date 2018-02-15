"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const ffi = __importStar(require("ffi"));
const fs = __importStar(require("fs"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const util = __importStar(require("util"));
/**
 * CurlProofOfWork implementation using NodeJS.
 */
class CurlProofOfWork {
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    async initialize() {
        const fullPath = path.resolve(path.join(__dirname, "../binaries/"));
        const platform = os.platform();
        let libFile = path.join(fullPath, platform, "libccurl");
        switch (platform) {
            case "darwin":
                libFile += ".dylib";
                break;
            case "win32":
                libFile += ".dll";
                break;
            default: libFile += ".so";
        }
        const stat = await util.promisify(fs.lstat)(libFile);
        if (stat.isFile() || stat.isSymbolicLink()) {
            this._library = ffi.Library(libFile, {
                ccurl_pow: ["string", ["string", "int"]]
            });
        }
        else {
            throw new coreError_1.CoreError("Library files does not exist", { libFile });
        }
    }
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    async pow(trytes, minWeightMagnitude) {
        return new Promise((resolve, reject) => {
            if (trytes === undefined || trytes === null) {
                throw new coreError_1.CoreError("Trytes can not be null or undefined");
            }
            if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude)) {
                throw new coreError_1.CoreError("The minWeightMagnitude value is not an integer");
            }
            this._library.ccurl_pow.async(trytes.toString(), minWeightMagnitude, (error, returnedTrytes) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(trytes_1.Trytes.create(returnedTrytes));
                }
            });
        });
    }
}
exports.CurlProofOfWork = CurlProofOfWork;
