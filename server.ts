import express, { Application } from "express";
import config from "config";
import cors from "cors";
import fileUpload from "express-fileupload";
import passport from "passport";
import * as mongoose from "mongoose";

import * as morgan from "morgan";

import { connectDB } from "./db/utils";

import { createCustomError, errorHandler } from "./middleware/errorHandler";

const port: number = config.get("port");

const characterRoutes = require("./routes/characters");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const isAuthenticated = require("./middleware/isAuthenticated");
const path = require("path");
const app: Application = express();

global.appRoot = path.resolve(__dirname);
// import { Document, PassportLocalModel, PassportLocalDocument } from "mongoose";
// // Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(morgan.default("dev"));
app.use(cors());

// Auth setup
app.use(passport.initialize());

// // Routes
app.use("/api/v1/characters", characterRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);

declare global {
  namespace Express {
    interface User {
      _id: mongoose.Types.ObjectId;
    }
  }
}

// // Error handling
// // 404
// Typescript doesn't check if parameters with a "_" are unused
app.all("/*", (_req, _res, next) => {
  const err = createCustomError("URL doesn't exist", 404);
  next(err);
});

app.listen(port, async () => {
  console.log("Attempting to connect to database");
  await connectDB(config.get("mongo_uri")).then(
    function () {
      console.log("Connection established");
    },
    function (error: Error) {
      console.error("Error connecting to the database", error);
    }
  );
  console.log(`Server listening on port ${port}`);
});
