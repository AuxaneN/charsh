import create from "zustand";
import axios from "axios";

type Character = {
  _id: string;
  body: string;
  // Name, pronouns, age, height, Species
  infos?: {
    name: string;
    height: number;
    age: number;
  };
  about?: string;
  //Qualities, flaws
  personnality?: string;
  //Eyes, nose, mouth, faceshape, ears
  face?: string;
  // Happy, neutral, surprised, sad, scared, fucking horny man > 6 image urls
  expressions?: string;
};
type CharacterObject = {
  data: { [key: string]: Character };
  isPublic: boolean;
  _id: string;
};

type CharacterState = {
  character?: CharacterObject;
  characterList?: Array<CharacterObject>;
  getCharacter: (id: string) => void;
  getAllCharacters: () => void;
  createCharacter: (formData: FormData) => void;
  uploadImages: (id: string, version: string, media: FormData) => void;
  updateCharacter: (id: string, version: string, character: Character) => void;
};

export const characterStore = create<CharacterState>((set) => ({
  characterList: [],
  getCharacter: async (id) => {
    const res = await axios.get(`/api/v1/characters/${id}`);
    console.log(res.data.data);
    set({
      character: res.data,
    });
  },
  getAllCharacters: async () => {
    const res = await axios.get("/api/v1/characters/");
    console.log("Retrieved characters", res.data);
    set({
      characterList: res.data.data,
    });
  },
  createCharacter: async (formData) => {
    const body = formData;
    const res = await axios.post("/api/v1/characters/", body);
    set({ character: res.data });
  },
  uploadImages: async (id, version, media) => {
    const body = media;

    await axios.put(`/api/v1/characters/uploadImages/${id}/${version}`, body);
  },
  updateCharacter: async (id, version, character) => {
    const body = JSON.stringify(character);
    console.log(body);
    //await axios.put(`/api/v1/characters/${id}/${version}`, character);
  },
}));
