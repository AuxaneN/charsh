"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.infoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Your character needs a name"],
    },
    height: {
        type: Number,
    },
    age: {
        type: Number,
        min: [0, "Can't go lower than that"],
    },
    pronouns: {
        type: String,
        required: false,
    },
});
//# sourceMappingURL=infoSchema.js.map