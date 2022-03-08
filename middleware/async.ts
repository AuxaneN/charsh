import {Request, Response, NextFunction} from 'express'
import {createCustomError} from './errorHandler'

export const asyncWrapper = (fn:Function) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            let err = createCustomError("Something terrible happened", res.statusCode)
            if (error instanceof Error ){
               err = createCustomError(error.message, res.statusCode)
            }
            next(err)
        }
    }
}
