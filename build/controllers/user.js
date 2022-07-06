var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { asyncWrapper } from '../middleware/async';
import User from "../models/User";
import { generatePassword, validatePassword, issueJWT } from "../utils/userUtils";
export const login = asyncWrapper((_req, _res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Finding user in db");
    yield User.findOne({ email: _req.body.email })
        .then((user) => __awaiter(void 0, void 0, void 0, function* () {
        if (!user) {
            _res.status(401).json({ success: false, msg: "Wrong email or password" });
        }
        console.log("User found");
        const passwordMatches = yield validatePassword(_req.body.password, user.password);
        console.log(`password matches ? ${passwordMatches} `);
        if (passwordMatches) {
            const token = issueJWT(user);
            _res.status(200).json({ success: true, token: token.token, expiresIn: token.expires });
        }
        else {
            _res.status(401).json({ success: false, msg: "Wrong email or password" });
        }
    }))
        .catch((err) => {
        _next(err);
    });
}));
export const register = asyncWrapper((_req, _res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(_req.body);
    const hashedPassword = yield generatePassword(_req.body.password);
    console.log(hashedPassword);
    const user = new User({
        email: _req.body.email,
        username: _req.body.email,
        password: hashedPassword
    });
    console.log(user);
    user.save()
        .then(() => {
        const token = issueJWT(user);
        console.log("hello?");
        return _res.status(200).json({ msg: "Welcome :)", token: token.token });
    })
        .catch((err) => {
        console.log(err);
        return _res.status(500).json({ msg: "Erreur lors de l'inscription" });
    });
}));
export const userInfo = asyncWrapper((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const userParam = _req.user;
    console.log("User ID :", userParam);
    let userId;
    if (userParam) {
        userId = userParam._id;
        console.log("User ID :", userId);
        const user = yield User.findOne({ _id: userId });
        console.log(user);
        return _res.status(200).json({ msg: "User info page", data: user });
    }
    return _res.status(500).json({ msg: "An error occured" });
}));
export const deleteUser = asyncWrapper((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    yield User.deleteMany();
    console.log('All users deleted');
    return _res.status(200).json({ msg: "Users deleted" });
}));
export const registerAdmin = asyncWrapper((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield generatePassword(_req.body.password);
    console.log(hashedPassword);
    const user = new User({
        email: _req.body.email,
        username: _req.body.email,
        role: "admin",
        password: hashedPassword
    });
    console.log(user);
    yield user.save();
    return _res.status(200).json({ msg: "Welcome :)", user: user });
}));
//# sourceMappingURL=user.js.map