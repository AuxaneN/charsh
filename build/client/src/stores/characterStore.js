var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import create from "zustand";
import axios from "axios";
export const characterStore = create((set) => ({
    characterList: [],
    getCharacter: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield axios.get(`/api/v1/characters/${id}`);
        console.log(res.data.data);
        set(() => ({
            character: res.data.data,
        }));
    }),
    getAllCharacters: () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield axios.get("/api/v1/characters/");
        console.log("Retrieved characters", res.data);
        set(() => ({
            characterList: res.data.data,
        }));
    }),
    createCharacter: (formData) => __awaiter(void 0, void 0, void 0, function* () {
        const body = formData;
        yield axios.post("/api/v1/characters/", body);
    }),
}));
//# sourceMappingURL=characterStore.js.map