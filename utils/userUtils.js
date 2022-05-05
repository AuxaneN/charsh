"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getUserId = exports.issueJWT = exports.generatePassword = exports.validatePassword = void 0;
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const validatePassword = (password, hash) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Testing password");
    const res = yield bcrypt.compare(password, hash);
    return res;
});
exports.validatePassword = validatePassword;
const generatePassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(password);
    const generatedHash = yield bcrypt.hash(password, 10);
    console.log(generatedHash);
    return generatedHash;
});
exports.generatePassword = generatePassword;
const issueJWT = (user) => {
    const _id = user._id;
    const role = user.role;
    const key = config_1.default.get('jwt_secret');
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
exports.issueJWT = issueJWT;
const getUserId = (req) => {
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
exports.getUserId = getUserId;
//# sourceMappingURL=userUtils.js.map