/// <reference types="mongoose/types/PipelineStage" />
/// <reference types="mongoose/types/Error" />
/// <reference types="mongoose/types/Connection" />
import { Schema } from 'mongoose';
interface ICharacter {
    body: string;
    infos?: string;
    about?: string;
    personnality?: string;
    face?: string;
    expressions?: string;
}
export declare const characterVersionSchema: Schema<ICharacter, import("mongoose").Model<ICharacter, any, any, any>, any, any>;
export {};
