var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Character } from '../models/Character';
import User from '../models/User';
module.exports = function (_req, _res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const characterId = _req.params.id;
        console.log("char id:", characterId);
        if (_req.user) {
            const userId = _req.user._id;
            console.log("userID", userId);
            let user = yield User.findOne({ _id: userId });
            console.log("user found:", user);
            let char = yield Character.findOne({ _id: characterId });
            console.log(char._id);
            if (user.characters.indexOf(char._id) != -1) {
                return _next();
            }
        }
        let char = yield Character.findOne({ _id: characterId });
        if (char && char.isPublic) {
            return _next();
        }
        _res.status(401).json({ msg: "You don't have the permission to view this character" });
    });
};
//# sourceMappingURL=characterIsAccessible.js.map