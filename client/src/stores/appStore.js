"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appStore = void 0;
const zustand_1 = __importDefault(require("zustand"));
const uuid_1 = require("uuid");
exports.appStore = (0, zustand_1.default)((set) => ({
    messages: new Map([]),
    setMessage: (message) => {
        const key = (0, uuid_1.v4)();
        set((state) => {
            const newState = state.messages;
            newState.set(key, message);
            return { messages: newState };
        });
    },
    clearMessage: (id) => {
        set((state) => {
            const newState = state.messages;
            newState.delete(id);
            return { messages: newState };
        });
    }
}));
//# sourceMappingURL=appStore.js.map