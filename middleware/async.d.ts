import { Request, Response, NextFunction } from "express";
export declare const asyncWrapper: (fn: Function) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
