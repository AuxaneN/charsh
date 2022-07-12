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
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const router = express.Router();
const characterIsAccessible = require("../middleware/characterIsAccessible");
const isAuthenticated = require("../middleware/isAuthenticated");
const isOwner = require("../middleware/isOwner");
const characters_1 = require("../controllers/characters");
router.get("/", [isAuthenticated], characters_1.getAllCharacters);
router.post("/", [isAuthenticated], characters_1.createCharacter);
router.get("/:id", [isAuthenticated, characterIsAccessible], characters_1.getOneCharacter);
router.post("/images/:id/", [isAuthenticated, characterIsAccessible], characters_1.getImages);
router.route("/:id").delete(characters_1.deleteCharacter);
router.put("/:id/:version", [isAuthenticated, isOwner], characters_1.updateOneCharacter);
router.put("/uploadImages/:id/:version/", [isAuthenticated, isOwner], characters_1.uploadImages);
module.exports = router;
//# sourceMappingURL=characters.js.map