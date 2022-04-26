import * as express from "express";
const router = express.Router()
import { Request, Response,NextFunction } from 'express';

import passport from 'passport'

import {login,register, userInfo} from '../controllers/user'

router.route('/').get(userInfo)

router.route('/login').post(
    (_req:Request, _res:Response,_next:NextFunction) => {
      passport.authenticate('local',
        {
          failureRedirect:'/login',
          successRedirect:'/characters',
        }
      )
    }
    ,login)
    
router.route('/register').post(register)

module.exports = router
