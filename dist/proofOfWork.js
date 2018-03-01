var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const ffi = __importStar(require("ffi"));
const fs = __importStar(require("fs"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const util = __importStar(require("util"));
/**
 * ProofOfWork implementation using NodeJS.
 */
class ProofOfWork {
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
            throw new cryptoError_1.CryptoError("Library files does not exist", { libFile });
        }
    }
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    async pow(trytes, minWeightMagnitude) {
        if (this._library === undefined || this._library === null) {
            throw new cryptoError_1.CryptoError("Library not loaded, have you called initialize");
        }
        if (trytes === undefined || trytes === null) {
            throw new cryptoError_1.CryptoError("Trytes can not be null or undefined");
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude)) {
            throw new cryptoError_1.CryptoError("The minWeightMagnitude value is not an integer");
        }
        return new Promise((resolve, reject) => {
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
exports.ProofOfWork = ProofOfWork;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHJvb2ZPZldvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw0RUFBeUU7QUFDekUsMEVBQXVFO0FBRXZFLDZEQUEwRDtBQUMxRCx5Q0FBMkI7QUFDM0IsdUNBQXlCO0FBQ3pCLHVDQUF5QjtBQUN6QiwyQ0FBNkI7QUFDN0IsMkNBQTZCO0FBRTdCOztHQUVHO0FBQ0g7SUFRSTs7O09BR0c7SUFDSSxLQUFLLENBQUMsVUFBVTtRQUNuQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFcEUsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRS9CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSyxRQUFRO2dCQUFFLE9BQU8sSUFBSSxRQUFRLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQzFDLEtBQUssT0FBTztnQkFBRSxPQUFPLElBQUksTUFBTSxDQUFDO2dCQUFDLEtBQUssQ0FBQztZQUN2QyxTQUFTLE9BQU8sSUFBSSxLQUFLLENBQUM7UUFDOUIsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDakMsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzNDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sSUFBSSx5QkFBVyxDQUFDLDhCQUE4QixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFjLEVBQUUsa0JBQTBCO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNLElBQUkseUJBQVcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsTUFBTSxJQUFJLHlCQUFXLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUM1RSxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUU7Z0JBQzNGLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBN0RELGtDQTZEQyJ9