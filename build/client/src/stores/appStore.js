import create from "zustand";
import { v4 as uuid } from "uuid";
export const appStore = create((set) => ({
    messages: new Map([]),
    setMessage: (message) => {
        const key = uuid();
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