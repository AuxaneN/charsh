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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const router = express.Router();
const passport_1 = __importDefault(require("passport"));
require('../utils/passport')(passport_1.default);
const isAdmin = require('../middleware/isAdmin');
const user_1 = require("../controllers/user");
router.route('/login').post(user_1.login);
router.route('/register').post(user_1.register);
router.post('/register-admin', isAdmin, user_1.registerAdmin);
router.post('/oops', [passport_1.default.authenticate('jwt', { session: false }), isAdmin], user_1.deleteUser);
router.get('/account-information', passport_1.default.authenticate('jwt', { session: false }), user_1.userInfo);
module.exports = router;
//# sourceMappingURL=user.js.map