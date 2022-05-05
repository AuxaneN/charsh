"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personnalitySchema = void 0;
const mongoose_1 = require("mongoose");
exports.personnalitySchema = new mongoose_1.Schema({
    qualities: {
        type: [String],
        validate: {
            validator: (v) => {
                return v.length <= 3;
            }
        }
    },
    flaws: {
        type: [String],
        validate: {
            validator: (v) => {
                return v.length <= 3;
            }
        }
    }
});
//# sourceMappingURL=personnalitySchema.js.map