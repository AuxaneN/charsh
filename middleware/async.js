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
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncWrapper = void 0;
const errorHandler_1 = require("./errorHandler");
const asyncWrapper = (fn) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield fn(req, res, next);
        }
        catch (error) {
            let err = (0, errorHandler_1.createCustomError)("Something terrible happened", res.statusCode);
            if (error instanceof Error) {
                err = (0, errorHandler_1.createCustomError)(error.message, res.statusCode);
            }
            next(err);
        }
    });
};
exports.asyncWrapper = asyncWrapper;
//# sourceMappingURL=async.js.map