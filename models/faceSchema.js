"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faceSchema = void 0;
const mongoose_1 = require("mongoose");
exports.faceSchema = new mongoose_1.Schema({
    eyes: {
        type: String,
        minLength: [4, "Text must be between 4 and 50 characters"],
        maxLength: [50, "Text must be between 4 and 50 characters"]
    },
    nose: {
        type: String,
        minLength: [4, "Text must be between 4 and 50 characters"],
        maxLength: [50, "Text must be between 4 and 50 characters"]
    },
    mouth: {
        type: String,
        minLength: [4, "Text must be between 4 and 50 characters"],
        maxLength: [50, "Text must be between 4 and 50 characters"]
    },
    faceshape: {
        type: String,
        minLength: [4, "Text must be between 4 and 50 characters"],
        maxLength: [50, "Text must be between 4 and 50 characters"]
    },
    ears: {
        type: String,
        minLength: [4, "Text must be between 4 and 50 characters"],
        maxLength: [50, "Text must be between 4 and 50 characters"]
    }
});
//# sourceMappingURL=faceSchema.js.map