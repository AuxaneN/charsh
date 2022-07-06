import { Schema } from "mongoose";

//Schema bits
import { infoSchema } from "./infoSchema";
import { personnalitySchema } from "./personnalitySchema";
import { faceSchema } from "./faceSchema";
import { expressionSchema } from "./expressionSchema";
// TODO: typescriptise this : Add an interface and assign this interface to the schema

interface ICharacter {
  body?: string;
  // Name, pronouns, age, height, Species
  infos?: string;
  about?: string;
  //Qualities, flaws
  personnality?: string;
  //Eyes, nose, mouth, faceshape, ears
  face?: string;
  // Happy, neutral, surprised, sad, scared, fucking horny man > 6 image urls
  expressions?: string;
}

export const characterVersionSchema = new Schema<ICharacter>({
  //  Since we handle AUs, we want to put the general stuff in a "default"
  body: {
    type: String,
    validate: {
      validator: (v: string) => {
        return /\w+(.webp)/g.test(v);
      },
    },
  },
  // Name, pronouns, age, height, Species
  infos: infoSchema,
  about: {
    type: String,
  },
  //Qualities, flaws
  personnality: personnalitySchema,
  //Eyes, nose, mouth, faceshape, ears
  face: faceSchema,
  // Happy, neutral, surprised, sad, scared, fucking horny man > 6 image urls
  expressions: expressionSchema,
  // world: Types.ObjectId
  // relationships : type: map, of array
});
