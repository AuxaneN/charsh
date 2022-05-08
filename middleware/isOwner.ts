import {Request, Response, NextFunction} from 'express'
import * as mongoose from 'mongoose'
//models
import User from '../models/User'

declare global {
  namespace Express {
    interface User {
      _id: mongoose.Types.ObjectId
    }
  }
}

module.exports = function(_req:Request, _res:Response, _next:NextFunction){
    const characterId = _req.params.id
    let userId:Express.User["_id"];
    if(_req.user){
      userId = _req.user._id
      console.log("User ID :", userId)
    //=> Is it your character? Display the character
    User.findOne({_id:userId}).then(
      user => {
        if (user.characters.indexOf(characterId) != -1 ){
          _next()
        } else {
          _res.status(401).json({msg:"Unauthorized"})
        }
      }
    )
  } else {
    _res.status(500).json({msg:"Couldn't verify user ID"})
  }
}
