"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAdmin = exports.deleteUser = exports.userInfo = exports.register = exports.login = void 0;
const async_1 = require("../middleware/async");
const User_1 = __importDefault(require("../models/User"));
const userUtils_1 = require("../utils/userUtils");
exports.login = (0, async_1.asyncWrapper)((_req, _res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Finding user in db");
    yield User_1.default.findOne({ email: _req.body.email })
        .then((user) => __awaiter(void 0, void 0, void 0, function* () {
        if (!user) {
            _res.status(401).json({ success: false, msg: "Wrong email or password" });
        }
        console.log("User found");
        const passwordMatches = yield (0, userUtils_1.validatePassword)(_req.body.password, user.password);
        console.log(`password matches ? ${passwordMatches} `);
        if (passwordMatches) {
            const token = (0, userUtils_1.issueJWT)(user);
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
exports.register = (0, async_1.asyncWrapper)((_req, _res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(_req.body);
    const hashedPassword = yield (0, userUtils_1.generatePassword)(_req.body.password);
    console.log(hashedPassword);
    const user = new User_1.default({
        email: _req.body.email,
        username: _req.body.email,
        password: hashedPassword
    });
    console.log(user);
    user.save()
        .then(() => {
        const token = (0, userUtils_1.issueJWT)(user);
        console.log("hello?");
        return _res.status(200).json({ msg: "Welcome :)", token: token.token });
    })
        .catch((err) => {
        console.log(err);
        return _res.status(500).json({ msg: "Erreur lors de l'inscription" });
    });
}));
exports.userInfo = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const userParam = _req.user;
    console.log("User ID :", userParam);
    let userId;
    if (userParam) {
        userId = userParam._id;
        console.log("User ID :", userId);
        const user = yield User_1.default.findOne({ _id: userId });
        console.log(user);
        return _res.status(200).json({ msg: "User info page", data: user });
    }
    return _res.status(500).json({ msg: "An error occured" });
}));
exports.deleteUser = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    yield User_1.default.deleteMany();
    console.log('All users deleted');
    return _res.status(200).json({ msg: "Users deleted" });
}));
exports.registerAdmin = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield (0, userUtils_1.generatePassword)(_req.body.password);
    console.log(hashedPassword);
    const user = new User_1.default({
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