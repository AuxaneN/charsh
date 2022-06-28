import {Request, Response, NextFunction} from 'express'
import {CharacterObject} from '../types/Character'
//models
import {Character} from '../models/Character'
import User from '../models/User'

module.exports = async function(_req:Request, _res:Response, _next:NextFunction){

  const characterId = _req.params.id
  console.log("char id:", characterId)
  if(_req.user){
    const userId = _req.user._id
    console.log("userID", userId)

    //=> Is it your character? Display the character
    let user = await User.findOne({_id:userId})

    console.log("user found:", user)
    let char = await Character.findOne({_id:characterId})

    console.log(char._id)
    if (user.characters.indexOf(char._id) != -1 ){
      return _next()
    }

  }

  //=> Is the character public? Display the character
  let char = await Character.findOne({_id:characterId})
  if (char && char.isPublic){
    return _next()
  }


  //=> Is this character shared with you? Display the character
  // Todo : Implement this

  //=> Else, deny access
  _res.status(401).json({msg:"You don't have the permission to view this character"})

}
