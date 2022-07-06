import { Schema } from 'mongoose';
export const faceSchema = new Schema({
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