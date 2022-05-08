"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("../models/Character");
const User_1 = __importDefault(require("../models/User"));
module.exports = function (_req, _res, _next) {
    const characterId = _req.params.id;
    console.log(characterId);
    if (_req.user) {
        const userId = _req.user._id;
        console.log(userId);
        User_1.default.findOne({ _id: userId }).then(user => {
            if (user.characters.indexOf(characterId) != -1) {
                _next();
            }
        });
    }
    Character_1.Character.findOne({ _id: characterId })
        .then(character => {
        if (character.isPublic) {
            _next();
        }
    });
    _res.status(401).json({ msg: "You don't have the permission to view this character" });
};
//# sourceMappingURL=characterIsAccessible.js.map