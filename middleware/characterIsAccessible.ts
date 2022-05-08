import {Request, Response, NextFunction} from 'express'

//models
import {Character} from '../models/Character'
import User from '../models/User'

module.exports = function(_req:Request, _res:Response, _next:NextFunction){

  const characterId = _req.params.id
  console.log(characterId)
  if(_req.user){
    const userId = _req.user._id
    console.log(userId)

    //=> Is it your character? Display the character
    User.findOne({_id:userId}).then(
      user => {
        if (user.characters.indexOf(characterId) != -1 ){
          _next()
        }
      }
    )
  }

  //=> Is the character public? Display the character
  Character.findOne({_id:characterId})
    .then( character => {
            if (character.isPublic){
              _next()
            }
          })

  //=> Is this character shared with you? Display the character
  // Todo : Implement this

  //=> Else, deny access
  _res.status(401).json({msg:"You don't have the permission to view this character"})

}
