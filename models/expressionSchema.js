"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.expressionSchema = new mongoose_1.Schema({
    happy: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            }
        }
    },
    neutral: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            }
        }
    },
    surprised: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            }
        }
    },
    sad: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            }
        }
    },
    scared: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            }
        }
    },
    horny: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            }
        }
    },
});
//# sourceMappingURL=expressionSchema.js.map