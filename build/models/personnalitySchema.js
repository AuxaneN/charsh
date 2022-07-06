import { Schema } from 'mongoose';
export const personnalitySchema = new Schema({
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