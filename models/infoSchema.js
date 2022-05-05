"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.infoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Your character needs a name']
    },
    height: {
        type: Number,
        required: [true, 'You can change this later, I just need this to initialize things in the background']
    },
    age: {
        type: Number,
        min: [0, "Can't go lower than that"]
    },
    pronouns: {
        type: String,
        validate: {
            validator: function (string) {
                return /[a-zA-Z]+(\/|| )[a-zA-Z]+/g.test(string);
            },
            message: (_props) => 'Please use only letters.'
        }
    }
});
//# sourceMappingURL=infoSchema.js.map