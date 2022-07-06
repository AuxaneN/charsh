import { Schema } from 'mongoose';
export const expressionSchema = new Schema({
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