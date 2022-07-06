declare type appState = {
    messages: Map<string, string>;
    setMessage: (message: string) => void;
    clearMessage: (id: string) => void;
};
export declare const appStore: import("zustand").UseBoundStore<import("zustand").StoreApi<appState>>;
export {};
