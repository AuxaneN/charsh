import { Request, Response,NextFunction } from 'express';
import {asyncWrapper} from '../middleware/async'

export const adminDashboard = asyncWrapper(async (_req:Request,_res:Response, _next:NextFunction) => {
    _res.status(200).json({msg:"This is the admin dashboard"})
})
