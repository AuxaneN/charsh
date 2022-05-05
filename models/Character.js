"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const mongoose_1 = require("mongoose");
const CharacterVersion_1 = require("./CharacterVersion");
const characterSchema = new mongoose_1.Schema({
    data: {
        type: Map,
        of: CharacterVersion_1.characterVersionSchema
    },
    isPublic: {
        type: Boolean,
        default: true
    }
});
exports.Character = (0, mongoose_1.model)('Character', characterSchema);
//# sourceMappingURL=Character.js.map