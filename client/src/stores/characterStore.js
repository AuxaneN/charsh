"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterStore = void 0;
const zustand_1 = __importDefault(require("zustand"));
const axios_1 = __importDefault(require("axios"));
exports.characterStore = (0, zustand_1.default)((set) => ({
    characterList: [],
    getCharacter: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield axios_1.default.get(`/api/v1/characters/${id}`);
        console.log(res.data.data);
        set(() => ({
            character: res.data.data,
        }));
    }),
    getAllCharacters: () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield axios_1.default.get("/api/v1/characters/");
        console.log("Retrieved characters", res.data);
        set(() => ({
            characterList: res.data.data,
        }));
    }),
    createCharacter: (formData) => __awaiter(void 0, void 0, void 0, function* () {
        const body = formData;
        const res = yield axios_1.default.post("/api/v1/characters/", body);
    }),
}));
//# sourceMappingURL=characterStore.js.map