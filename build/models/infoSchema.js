import { Schema } from "mongoose";
export const infoSchema = new Schema({
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
        validate: {
            validator: function (string) {
                return /[a-zA-Z]+(\/|| )[a-zA-Z]+/g.test(string);
            },
            message: (_props) => "Please use only letters.",
        },
    },
});
//# sourceMappingURL=infoSchema.js.map