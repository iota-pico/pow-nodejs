import { IProofOfWork } from "@iota-pico/crypto/dist/interfaces/IProofOfWork";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
/**
 * ProofOfWork implementation using NodeJS.
 */
export declare class ProofOfWork implements IProofOfWork {
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    initialize(): Promise<void>;
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    pow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes>;
}
