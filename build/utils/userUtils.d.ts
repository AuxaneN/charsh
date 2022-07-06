import { Request } from 'express';
export declare const validatePassword: (password: string, hash: string) => Promise<boolean>;
export declare const generatePassword: (password: string) => Promise<string>;
export declare const issueJWT: (user: any) => {
    token: string;
    expires: string;
};
export declare const getUserId: (req: Request) => string;
