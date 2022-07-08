import { Schema } from "mongoose";

export const expressionSchema = new Schema({
  // Happy, neutral, surprised, sad, scared, fucking horny man > 6 image urls
  expressions1: {
    type: String,
    validate: {
      validator: (v: string) => {
        return /\w+(.webp)/g.test(v);
      },
    },
  },
  expressions2: {
    type: String,
    validate: {
      validator: (v: string) => {
        return /\w+(.webp)/g.test(v);
      },
    },
  },
  expressions3: {
    type: String,
    validate: {
      validator: (v: string) => {
        return /\w+(.webp)/g.test(v);
      },
    },
  },
  expressions4: {
    type: String,
    validate: {
      validator: (v: string) => {
        return /\w+(.webp)/g.test(v);
      },
    },
  },
  expressions5: {
    type: String,
    validate: {
      validator: (v: string) => {
        return /\w+(.webp)/g.test(v);
      },
    },
  },
  expressions6: {
    type: String,
    validate: {
      validator: (v: string) => {
        return /\w+(.webp)/g.test(v);
      },
    },
  },
});
