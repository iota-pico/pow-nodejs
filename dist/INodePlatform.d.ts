/// <reference types="node" />
import { Stats } from "fs";
/**
 * INodePlatform interface.
 */
export interface INodePlatform {
    pathResolve(path: string): string;
    pathJoin(...args: any[]): string;
    platform(): string;
    lstat(path: string, callback: (err: NodeJS.ErrnoException, stats: Stats) => void): void;
    loadLibrary(filename: string, functions: any): any;
}
