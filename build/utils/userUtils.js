var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import config from 'config';
export const validatePassword = (password, hash) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Testing password");
    const res = yield bcrypt.compare(password, hash);
    return res;
});
export const generatePassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(password);
    const generatedHash = yield bcrypt.hash(password, 10);
    console.log(generatedHash);
    return generatedHash;
});
export const issueJWT = (user) => {
    const _id = user._id;
    const role = user.role;
    const key = config.get('jwt_secret');
    const payload = {
        id: _id,
        role: role,
        iat: Date.now()
    };
    const signedToken = jwt.sign(payload, key, { expiresIn: '24h' });
    return {
        token: "Bearer " + signedToken,
        expires: '24h'
    };
};
export const getUserId = (req) => {
    const header = req.headers.authorization;
    let token = "";
    if (header && header.startsWith("Bearer ")) {
        token = header.substring(7, header.length);
    }
    else {
        throw new Error("Auth token does not match");
    }
    const payload = jwt.decode(token);
    return payload.id;
};
//# sourceMappingURL=userUtils.js.map