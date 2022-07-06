declare type userState = {
    user?: string;
    token: string;
    setToken: (localToken: string) => void;
    login: (email: string, password: string) => Promise<boolean | void>;
    logout: () => void;
    register: (email: string, password: string) => Promise<boolean | void>;
};
export declare const userStore: import("zustand").UseBoundStore<import("zustand").StoreApi<userState>>;
export {};
