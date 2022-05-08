import {Request, Response, NextFunction} from 'express'
//model
import User from '../models/User'

module.exports =  function(_req:Request, _res:Response, _next:NextFunction) {
    console.log("checking for admin")

    // const userId = getUserId(_req)
    if(_req.user){
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
   } else {
     _res.status(500).json({msg:"Couldn't verify user ID"})
   }
}
