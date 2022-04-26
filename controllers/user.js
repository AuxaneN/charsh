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
exports.userInfo = exports.register = exports.login = void 0;
const async_1 = require("../middleware/async");
const User_1 = __importDefault(require("../models/User"));
const userUtils_1 = require("../utils/userUtils");
exports.login = (0, async_1.asyncWrapper)((_req, _res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    User_1.default.findOne({ username: _req.body.username })
        .then((user) => __awaiter(void 0, void 0, void 0, function* () {
        if (!user) {
            _res.status(401).json({ success: false, msg: "Wrong username or password" });
        }
        const passwordMatches = yield (0, userUtils_1.validatePassword)(_req.body.password, user.password);
        if (passwordMatches) {
            const token = (0, userUtils_1.issueJWT)(user);
            _res.status(200).json({ success: true, token: token.token, expiresIn: token.expires });
        }
        else {
            _res.status(401).json({ success: false, msg: "Wrong username or password" });
        }
    }))
        .catch((err) => {
        _next(err);
    });
    return _res.status(200).json({ msg: "Login page" });
}));
exports.register = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = (0, userUtils_1.generatePassword)(_req.body.password);
    const user = new User_1.default({
        email: _req.body.email,
        password: hashedPassword
    });
    yield user.save();
    return _res.status(200).json({ msg: "Login page", user: user });
}));
exports.userInfo = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    return _res.status(200).json({ msg: "User info page" });
}));
//# sourceMappingURL=user.js.map