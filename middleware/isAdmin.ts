import {Request, Response, NextFunction} from 'express'
//model
import User from '../models/User'
//utils
// import {getUserId} from '../utils/userUtils'

module.exports =  function(_req:Request, _res:Response, _next:NextFunction) {
    console.log("checking for admin")

    // const userId = getUserId(_req)
      const userId = _req.user._id
      console.log(userId)
     User.findOne({_id:userId}).then(
       user =>{
         if (user.role == "admin"){
           return _next()
         }else{
           const err = new Error("Not authorized")
           return _next(err)
         }
       }
     )
}
