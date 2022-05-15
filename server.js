"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const passport_1 = __importDefault(require("passport"));
const morgan = __importStar(require("morgan"));
const utils_1 = require("./db/utils");
const errorHandler_1 = require("./middleware/errorHandler");
const port = config_1.default.get("port");
const characterRoutes = require('./routes/characters');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
app.use(errorHandler_1.errorHandler);
app.use(morgan.default('dev'));
app.use((0, cors_1.default)());
app.use(passport_1.default.initialize());
app.use('/api/v1/characters', characterRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', adminRoutes);
app.all('/*', (_req, _res, next) => {
    const err = (0, errorHandler_1.createCustomError)("URL doesn't exist", 404);
    next(err);
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Attempting to connect to database");
    yield (0, utils_1.connectDB)(config_1.default.get("mongo_uri"))
        .then(function () {
        console.log('Connection established');
    }, function (error) {
        console.error("Error connecting to the database", error);
    });
    console.log(`Server listening on port ${port}`);
}));
//# sourceMappingURL=server.js.map