import { Request, Response, NextFunction } from 'express';
declare class CustomAPIError extends Error {
    message: string;
    statusCode: number;
    constructor(message: string, statusCode: number);
}
export declare const createCustomError: (msg: string, statusCode: number) => CustomAPIError;
export declare const errorHandler: (err: Error, _req: Request, _res: Response, _next: NextFunction) => Response<any, Record<string, any>>;
export {};
