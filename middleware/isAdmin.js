"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
module.exports = function (_req, _res, _next) {
    console.log("checking for admin");
    const userId = _req.user._id;
    console.log(userId);
    User_1.default.findOne({ _id: userId }).then(user => {
        if (user.role == "admin") {
            return _next();
        }
        else {
            const err = new Error("Not authorized");
            return _next(err);
        }
    });
};
//# sourceMappingURL=isAdmin.js.map