var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import config from "config";
import cors from "cors";
import fileUpload from "express-fileupload";
import passport from "passport";
import * as morgan from "morgan";
import { connectDB } from "./db/utils";
import { createCustomError, errorHandler } from "./middleware/errorHandler";
const port = config.get("port");
const characterRoutes = require("./routes/characters");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    createParentPath: true,
}));
app.use(errorHandler);
app.use(morgan.default("dev"));
app.use(cors());
app.use(passport.initialize());
app.use("/api/v1/characters", characterRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.all("/*", (_req, _res, next) => {
    const err = createCustomError("URL doesn't exist", 404);
    next(err);
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Attempting to connect to database");
    yield connectDB(config.get("mongo_uri")).then(function () {
        console.log("Connection established");
    }, function (error) {
        console.error("Error connecting to the database", error);
    });
    console.log(`Server listening on port ${port}`);
}));
//# sourceMappingURL=server.js.map