const config = require('config')

import {Strategy} from 'passport-jwt'
import {ExtractJwt} from 'passport-jwt'

import {JWTPayload} from '../types/JWTPayload'


import User from '../models/User'
const key = config.get('jwt_secret')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: key
}

module.exports = (passport : any) =>{
  passport.use(new Strategy(options, function(jwt_payload:JWTPayload, done : Function){
    console.log(jwt_payload)
    User.findOne({id:jwt_payload.id, role:jwt_payload.role}, function(err:Error, user:string){
      if(err){
        return done(err, false)
      }
      if(user){
        return done(null,user)
      } else {
        return done(null, false)
      }
    })

  }))
}
