"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterVersionSchema = void 0;
const mongoose_1 = require("mongoose");
const infoSchema_1 = require("./infoSchema");
const personnalitySchema_1 = require("./personnalitySchema");
const faceSchema_1 = require("./faceSchema");
const expressionSchema_1 = require("./expressionSchema");
exports.characterVersionSchema = new mongoose_1.Schema({
    body: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            }
        },
        required: [true, "A body image must be uploaded "]
    },
    infos: infoSchema_1.infoSchema,
    about: {
        type: String,
    },
    personnality: personnalitySchema_1.personnalitySchema,
    face: faceSchema_1.faceSchema,
    expressions: expressionSchema_1.expressionSchema,
});
//# sourceMappingURL=CharacterVersion.js.map