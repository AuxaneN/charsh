import { Schema } from "mongoose";

//Eyes, nose, mouth, faceshape, ears
export const faceSchema = new Schema({
  eyes: {
    type: String,
    maxLength: [50, "Text must be between 4 and 50 characters"],
  },
  nose: {
    type: String,
    maxLength: [50, "Text must be between 4 and 50 characters"],
  },
  mouth: {
    type: String,
    maxLength: [50, "Text must be between 4 and 50 characters"],
  },
  faceshape: {
    type: String,
    maxLength: [50, "Text must be between 4 and 50 characters"],
  },
  ears: {
    type: String,
    maxLength: [50, "Text must be between 4 and 50 characters"],
  },
});
