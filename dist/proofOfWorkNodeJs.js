var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtOb2RlSnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHJvb2ZPZldvcmtOb2RlSnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBRXpFLDBFQUF1RTtBQUN2RSx3RkFBcUY7QUFDckYsNkRBQTBEO0FBQzFELHlDQUEyQjtBQUMzQix1Q0FBeUI7QUFDekIsdUNBQXlCO0FBQ3pCLDJDQUE2QjtBQUM3QiwyQ0FBNkI7QUFHN0I7O0dBRUc7QUFDSCx1QkFBK0IsU0FBUSxpQ0FBZTtJQVdsRDs7OztPQUlHO0lBQ0gsWUFBWSxZQUE0QixFQUFFLFdBQTBCO1FBQ2hFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQixJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUc7Z0JBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNuQixRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVE7Z0JBQ3JCLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSztnQkFDZixXQUFXLEVBQUUsR0FBRyxDQUFDLE9BQU87YUFDM0IsQ0FBQztTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsVUFBVTtRQUNuQixNQUFNLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV6QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFL0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxRSxRQUFRLFFBQVEsRUFBRTtZQUNkLEtBQUssUUFBUTtnQkFBRSxPQUFPLElBQUksUUFBUSxDQUFDO2dCQUFDLE1BQU07WUFDMUMsS0FBSyxPQUFPO2dCQUFFLE9BQU8sSUFBSSxNQUFNLENBQUM7Z0JBQUMsTUFBTTtZQUN2QyxPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO1NBQzdCO1FBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtnQkFDcEQsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzNDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxNQUFNLElBQUkseUJBQVcsQ0FBQyw4QkFBOEIsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDdEU7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQWMsRUFBRSxrQkFBMEI7UUFDN0QsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckMsTUFBTSxJQUFJLHlCQUFXLENBQUMsZ0RBQWdELENBQUMsQ0FBQzthQUMzRTtZQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBTSxDQUFDLEVBQUU7Z0JBQ3RDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7YUFDeEU7WUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxrQkFBa0IsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hFLE1BQU0sSUFBSSx5QkFBVyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDL0Q7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxFQUFFO2dCQUMzRixJQUFJLEtBQUssRUFBRTtvQkFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7aUJBQzlDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQXJGRCw4Q0FxRkMifQ==