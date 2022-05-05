"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        validate: {
            validator: (v) => {
                return /(([a-z]*[A-Z]*[0-9]*)+@([A-Z]*[a-z]*)\.([A-Z]*[a-z]*))/g.test(v);
            },
            message: () => `Incorrect email`
        },
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        min: [8, "Password must be minimum 8 characters long."]
    },
    characters: [mongoose_1.Types.ObjectId],
    role: {
        type: String,
        enum: ["user", "admin", "moderator"],
        default: "user"
    }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
//# sourceMappingURL=User.js.map