// import type {CustomAPIErrorType} from '../types/CustomAPIError'
import { Request, Response, NextFunction } from 'express';

class CustomAPIError extends Error {
    constructor(
      public message:string,
      public statusCode:number
    ){
        super(message)
        this.statusCode = statusCode
    }

}

export const createCustomError = (msg:string, statusCode:number)=>{
    return new CustomAPIError(msg,statusCode)
}

export const errorHandler = (err:Error, _req:Request, _res:Response, _next:NextFunction) =>{
  console.log("Error:",err)
  console.log("Request:", _req)
  if(err instanceof CustomAPIError){
        return _res.status(err.statusCode).json({msg:err.message})
    }

    return _res.status(500).json({msg:'Something went wrong, please try again'})

}
