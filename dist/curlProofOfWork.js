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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VybFByb29mT2ZXb3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2N1cmxQcm9vZk9mV29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG9FQUFpRTtBQUNqRSw0RUFBeUU7QUFFekUsNkRBQTBEO0FBQzFELHlDQUEyQjtBQUMzQix1Q0FBeUI7QUFDekIsdUNBQXlCO0FBQ3pCLDJDQUE2QjtBQUM3QiwyQ0FBNkI7QUFFN0I7O0dBRUc7QUFDSDtJQVFJOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxVQUFVO1FBQ25CLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUVwRSxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLFFBQVE7Z0JBQUUsT0FBTyxJQUFJLFFBQVEsQ0FBQztnQkFBQyxLQUFLLENBQUM7WUFDMUMsS0FBSyxPQUFPO2dCQUFFLE9BQU8sSUFBSSxNQUFNLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQ3ZDLFNBQVMsT0FBTyxJQUFJLEtBQUssQ0FBQztRQUM5QixDQUFDO1FBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDM0MsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxJQUFJLHFCQUFTLENBQUMsOEJBQThCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQWMsRUFBRSxrQkFBMEI7UUFDdkQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDL0QsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7WUFDMUUsQ0FBQztZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUU7Z0JBQzNGLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBMURELDBDQTBEQyJ9