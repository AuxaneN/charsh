const config = require("config");
import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import User from "../models/User";
const key = config.get("jwt_secret");
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: key,
};
module.exports = (passport) => {
    passport.use(new Strategy(options, function (jwt_payload, done) {
        console.log("jwt_payload passport.ts", jwt_payload);
        User.findOne({ _id: jwt_payload.id }, function (err, user) {
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