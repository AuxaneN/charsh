import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"
import config from 'config'
import {Request} from 'express'

import {JWTPayload} from '../types/JWTPayload'
//model

/**
 * Validate the user password
 * @param  password                   User input
 * @param  hash                       Stored and hashed password
 * @return boolean
 */
export const validatePassword = async (password:string, hash:string) => {
  console.log("Testing password")
  const res = await bcrypt.compare(password, hash)
  return res
}

export const generatePassword = async (password:string) => {
  console.log(password)
  const generatedHash = await bcrypt.hash(password, 10);
  console.log(generatedHash)
  return generatedHash
}

export const issueJWT = (user:any) => {
  const _id = user._id
  const role = user.role
  const key = config.get('jwt_secret') as string
  const payload = {
    id:_id,
    role:role,
    iat: Date.now()
  }
  const signedToken = jwt.sign(payload, key,{expiresIn:'24h'})

  return {
    token:"Bearer " + signedToken,
    expires: '24h'
  }

}
/**
 * get the user ID from the header auth
 * @param  "checkingforadmin"               [description]
 * @return                    [description]
 */

export const getUserId = (req:Request)=>{

  const header = req.headers.authorization
  let token = ""
    if (header && header.startsWith("Bearer ")){
       token = header.substring(7, header.length);
  } else {
     throw new Error("Auth token does not match")
  }
  const payload =  jwt.decode(token) as JWTPayload
  return payload.id
}
