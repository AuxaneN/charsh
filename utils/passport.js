"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = require('config');
const passport_jwt_1 = require("passport-jwt");
const passport_jwt_2 = require("passport-jwt");
const User_1 = __importDefault(require("../models/User"));
const key = config.get('jwt_secret');
const options = {
    jwtFromRequest: passport_jwt_2.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: key
};
module.exports = (passport) => {
    passport.use(new passport_jwt_1.Strategy(options, function (jwt_payload, done) {
        User_1.default.findOne({ id: jwt_payload }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));
};
//# sourceMappingURL=passport.js.map