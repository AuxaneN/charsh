import { Request, Response,NextFunction } from 'express';
import {asyncWrapper} from '../middleware/async'
import User from "../models/User"
import {generatePassword, validatePassword, issueJWT} from "../utils/userUtils"

export const login = asyncWrapper(async (_req:Request,_res:Response, _next:NextFunction) => {
  User.findOne({username: _req.body.username})
    .then(async (user) => {
      if(!user){
        _res.status(401).json({success:false, msg:"Wrong username or password"})
      }
      const passwordMatches = await validatePassword(_req.body.password, user.password)

      if (passwordMatches){
        const token = issueJWT(user);
        _res.status(200).json({ success: true, token: token.token, expiresIn: token.expires });
      } else {
        _res.status(401).json({ success: false, msg: "Wrong username or password" });
      }

    })
  .catch((err)=>{
    _next(err)
  })

  return _res.status(200).json({msg:"Login page"})
})
export const register = asyncWrapper(async (_req:Request,_res:Response) => {
  const hashedPassword = generatePassword(_req.body.password)
  const user = new User({
    email:_req.body.email,
    password: hashedPassword
  })

  await user.save()

  return _res.status(200).json({msg:"Login page", user:user})
})

export const userInfo = asyncWrapper(async (_req:Request,_res:Response) => {
  return _res.status(200).json({msg:"User info page"})
})
