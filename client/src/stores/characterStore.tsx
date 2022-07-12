import create from "zustand";
import axios from "axios";
import produce from "immer";

type Character = {
  _id: string;
  body: string;
  // Name, pronouns, age, height, Species
  infos?: {
    name: string;
    height?: number;
    age?: number;
  };
  about?: string;
  //Qualities, flaws
  personality?: {
    qualities?: string[];
    flaws?: string[];
  };
  //Eyes, nose, mouth, faceshape, ears
  face?: {
    [key: string]: string | undefined;
    eyes?: string;
    nose?: string;
    mouth?: string;
    faceshape?: string;
    ears?: string;
  };
  // Happy, neutral, surprised, sad, scared, fucking horny man > 6 image urls
  expressions?: string;
};
type CharacterObject = {
  data: { [key: string]: Character };
  isPublic: boolean;
  _id: string;
};

type CharacterInfos = {
  infos?: {
    name: string;
    height?: number;
    age?: number;
  };
  about?: string;
  //Qualities, flaws
  personality?: {
    qualities?: string[];
    flaws?: string[];
  };
  //Eyes, nose, mouth, faceshape, ears
  face?: {
    [key: string]: string | undefined;
    eyes?: string;
    nose?: string;
    mouth?: string;
    faceshape?: string;
    ears?: string;
  };
  // Happy, neutral, surprised, sad, scared, fucking horny man > 6 image urls
};

type CharacterState = {
  character?: CharacterObject;
  characterList?: Array<CharacterObject>;
  getCharacter: (id: string) => CharacterObject;
  getImages: (id: string, bodyPart: string, imageName: string) => string;
  getAllCharacters: () => void;
  createCharacter: (formData: FormData) => void;
  uploadImages: (id: string, version: string, media: FormData) => void;
  updateCharacter: (id: string, version: string, character: Character) => void;
};

export const characterStore = create<CharacterState>((set, get) => ({
  characterList: [],
  getCharacter: async (id, version = "default") => {
    const res = await axios.get(`/api/v1/characters/${id}`);
    set({
      character: res.data,
    });
    const char = get().character;
    console.log("character", char.data[version]);
    const bodyImageName = char.data[version].body;
    const body = await get().getImages(id, "body", bodyImageName);

    set((state) =>
      produce(state, (draft) => {
        draft.character.data[version].body = body;
      })
    );
    const expressions = char.data[version].expressions;
    console.log(expressions);

    for (const expression in expressions) {
      if (expression == "_id") continue;
      let expRes = await get().getImages(
        id,
        expression,
        expressions[expression]
      );
      set((state) =>
        produce(state, (draft) => {
          draft.character.data[version][expression] = expRes;
        })
      );
    }
    console.log(get().character);
    return res.data;
  },
  getImages: async (id, bodyPart, imageName) => {
    console.log(id, bodyPart, imageName);
    const res = await axios.post(
      `/api/v1/characters/images/${id}`,
      {
        bodyPart: bodyPart,
        imageName: imageName,
      },
      { responseType: "blob" }
    );
    return URL.createObjectURL(res.data);
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
    const res = await axios.put(
      `/api/v1/characters/uploadImages/${id}/${version}`,
      body
    );
    set({
      character: res.data,
    });
  },
  updateCharacter: async (id, version, character) => {
    const body = JSON.stringify(character);
    console.log(body);
    await axios.put(`/api/v1/characters/${id}/${version}`, character);
  },
}));
