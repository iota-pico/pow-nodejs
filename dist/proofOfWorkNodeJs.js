var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
const proofOfWorkBase_1 = require("@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const ffi = __importStar(require("ffi"));
const fs = __importStar(require("fs"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const util = __importStar(require("util"));
/**
 * ProofOfWork implementation using NodeJS.
 */
class ProofOfWorkNodeJs extends proofOfWorkBase_1.ProofOfWorkBase {
    /**
     * Create a new instance of ProofOfWork.
     * @param nodePlatform Provides platform specific functions, optional mostly used for testing.
     * @param timeService Service to get the time for attachments.
     */
    constructor(nodePlatform, timeService) {
        super(timeService);
        if (objectHelper_1.ObjectHelper.isEmpty(nodePlatform)) {
            this._nodePlatform = {
                pathResolve: path.resolve,
                pathJoin: path.join,
                platform: os.platform,
                lstat: fs.lstat,
                loadLibrary: ffi.Library
            };
        }
        else {
            this._nodePlatform = nodePlatform;
        }
    }
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    async initialize() {
        await super.initialize();
        const fullPath = this._nodePlatform.pathJoin(path.join(__dirname, "../binaries/"));
        const platform = this._nodePlatform.platform();
        let libFile = this._nodePlatform.pathJoin(fullPath, platform, "libccurl");
        switch (platform) {
            case "darwin":
                libFile += ".dylib";
                break;
            case "win32":
                libFile += ".dll";
                break;
            default: libFile += ".so";
        }
        const stat = await util.promisify(this._nodePlatform.lstat)(libFile);
        if (stat.isFile()) {
            this._library = this._nodePlatform.loadLibrary(libFile, {
                ccurl_pow: ["string", ["string", "int"]]
            });
        }
        else {
            throw new cryptoError_1.CryptoError("Library files does not exist", { libFile });
        }
    }
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    async singlePow(trytes, minWeightMagnitude) {
        return new Promise((resolve, reject) => {
            if (objectHelper_1.ObjectHelper.isEmpty(this._library)) {
                throw new cryptoError_1.CryptoError("Library not loaded, have you called initialize");
            }
            if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
                throw new cryptoError_1.CryptoError("The trytes must be an object of type Trytes");
            }
            if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");
            }
            this._library.ccurl_pow.async(trytes.toString(), minWeightMagnitude, (error, returnedTrytes) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(trytes_1.Trytes.fromString(returnedTrytes));
                }
            });
        });
    }
}
exports.ProofOfWorkNodeJs = ProofOfWorkNodeJs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtOb2RlSnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHJvb2ZPZldvcmtOb2RlSnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBRXpFLDBFQUF1RTtBQUN2RSx3RkFBcUY7QUFDckYsNkRBQTBEO0FBQzFELHlDQUEyQjtBQUMzQix1Q0FBeUI7QUFDekIsdUNBQXlCO0FBQ3pCLDJDQUE2QjtBQUM3QiwyQ0FBNkI7QUFHN0I7O0dBRUc7QUFDSCx1QkFBK0IsU0FBUSxpQ0FBZTtJQVdsRDs7OztPQUlHO0lBQ0gsWUFBWSxZQUE0QixFQUFFLFdBQTBCO1FBQ2hFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRztnQkFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ25CLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUTtnQkFDckIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLO2dCQUNmLFdBQVcsRUFBRSxHQUFHLENBQUMsT0FBTzthQUMzQixDQUFDO1FBQ04sQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDdEMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsVUFBVTtRQUNuQixNQUFNLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV6QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sUUFB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