import { Schema } from "mongoose";
import { infoSchema } from "./infoSchema";
import { personnalitySchema } from "./personnalitySchema";
import { faceSchema } from "./faceSchema";
import { expressionSchema } from "./expressionSchema";
export const characterVersionSchema = new Schema({
    body: {
        type: String,
        validate: {
            validator: (v) => {
                return /\w+(.webp)/g.test(v);
            },
        },
    },
    infos: infoSchema,
    about: {
        type: String,
    },
    personnality: personnalitySchema,
    face: faceSchema,
    expressions: expressionSchema,
});
//# sourceMappingURL=CharacterVersion.js.map