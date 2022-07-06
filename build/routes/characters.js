import * as express from "express";
const router = express.Router();
const characterIsAccessible = require("../middleware/characterIsAccessible");
const isAuthenticated = require("../middleware/isAuthenticated");
const isOwner = require("../middleware/isOwner");
import { getAllCharacters, getOneCharacter, updateOneCharacter, createCharacter, uploadImages, deleteCharacter, } from "../controllers/characters";
router.get("/", [isAuthenticated], getAllCharacters);
router.post("/", [isAuthenticated], createCharacter);
router.get("/:id", [isAuthenticated, characterIsAccessible], getOneCharacter);
router.route("/:id").delete(deleteCharacter);
router.put("/:id/:version", [isAuthenticated, isOwner], updateOneCharacter);
router.put("/:id/:version/spiceitup", [isAuthenticated, isOwner], uploadImages);
module.exports = router;
//# sourceMappingURL=characters.js.map