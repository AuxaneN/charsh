"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.expressionSchema = new mongoose_1.Schema({
    expressions1: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            },
        },
    },
    expressions2: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            },
        },
    },
    expressions3: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            },
        },
    },
    expressions4: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            },
        },
    },
    expressions5: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            },
        },
    },
    expressions6: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            },
        },
    },
});
//# sourceMappingURL=expressionSchema.js.map