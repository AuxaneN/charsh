"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const mongoose_1 = require("mongoose");
const infoSchema_1 = require("./infoSchema");
const personnalitySchema_1 = require("./personnalitySchema");
const faceSchema_1 = require("./faceSchema");
const expressionSchema_1 = require("./expressionSchema");
const characterSchema = new mongoose_1.Schema({
    default: {
        body: {
            type: String,
            validate: {
                validator: (v) => {
                    return /\w+(.webp)/g.test(v);
                }
            },
            required: [true, "A body image must be uploaded"]
        },
        infos: infoSchema_1.infoSchema,
        about: {
            type: String,
        },
        personnality: personnalitySchema_1.personnalitySchema,
        face: faceSchema_1.faceSchema,
        expressions: expressionSchema_1.expressionSchema,
    }
});
exports.Character = (0, mongoose_1.model)('Character', characterSchema);
//# sourceMappingURL=Character.js.map