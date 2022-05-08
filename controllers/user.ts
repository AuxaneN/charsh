import { Request, Response,NextFunction } from 'express';
import {asyncWrapper} from '../middleware/async'
import User from "../models/User"
import {generatePassword, validatePassword, issueJWT} from "../utils/userUtils"
import * as mongoose from 'mongoose'
export const login = asyncWrapper(async (_req:Request,_res:Response, _next:NextFunction) => {
  console.log("Finding user in db")
  await User.findOne({email: _req.body.email})
    .then(async (user) => {
      if(!user){
        _res.status(401).json({success:false, msg:"Wrong email or password"})
      }
      console.log("User found")

      const passwordMatches = await validatePassword(_req.body.password, user.password)
      console.log(`password matches ? ${passwordMatches} `)
      if (passwordMatches){
        const token = issueJWT(user);
        _res.status(200).json({ success: true, token: token.token, expiresIn: token.expires });
      } else {
        _res.status(401).json({ success: false, msg: "Wrong email or password" });
      }

    })
  .catch((err)=>{
    _next(err)
  })
})

export const register = asyncWrapper(async (_req:Request,_res:Response) => {
  const hashedPassword = await generatePassword(_req.body.password)
  console.log(hashedPassword)
  const user = new User({
    email:_req.body.email,
    username:_req.body.email,
    password: hashedPassword
  })
  console.log(user)

  await user.save()

  return _res.status(200).json({msg:"Welcome :)", user:user})
})


export const userInfo = asyncWrapper(async (_req:Request,_res:Response) => {
  const userParam = _req.user
  console.log("User ID :", userParam)

  let userId:Express.User["_id"];
  if(userParam){
    userId = userParam._id
    console.log("User ID :", userId)
    const user = await User.findOne({_id: userId})
    console.log(user)
    return _res.status(200).json({msg:"User info page", data:user})
  }

  return _res.status(500).json({msg:"An error occured"})

})

export const deleteUser = asyncWrapper(async(_req:Request, _res:Response)=>{
    await User.deleteMany()
    console.log('All users deleted')
    return _res.status(200).json({msg:"Users deleted"})
  }
)

export const registerAdmin = asyncWrapper(async(_req:Request, _res:Response)=>{
  const hashedPassword = await generatePassword(_req.body.password)
  console.log(hashedPassword)
  const user = new User({
    email:_req.body.email,
    username:_req.body.email,
    role:"admin",
    password: hashedPassword
  })
  console.log(user)

  await user.save()

  return _res.status(200).json({msg:"Welcome :)", user:user})
})
