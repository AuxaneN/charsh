declare type Character = {
    _id: string;
    body: string;
    infos?: {
        name: string;
        height: number;
        age: number;
    };
    about?: string;
    personnality?: string;
    face?: string;
    expressions?: string;
};
declare type CharacterObject = {
    data: {
        [key: string]: Character;
    };
    isPublic: boolean;
    _id: string;
};
declare type CharacterState = {
    character?: Character;
    characterList?: Array<CharacterObject>;
    getCharacter: (id: string) => void;
    getAllCharacters: () => void;
    createCharacter: (formData: FormData) => void;
};
export declare const characterStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CharacterState>>;
export {};
