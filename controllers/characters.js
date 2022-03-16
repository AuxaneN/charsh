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
exports.updateOneCharacter = exports.getOneCharacter = exports.uploadImages = exports.createCharacter = exports.getAllCharacters = void 0;
const async_1 = require("../middleware/async");
const Character_1 = require("../models/Character");
const imageUtils_1 = require("../utils/imageUtils");
exports.getAllCharacters = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const character = yield Character_1.Character.find({});
    console.log(character);
    return _res.status(200).json(character);
}));
exports.createCharacter = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    let character = new Character_1.Character(_req.body);
    yield character.save();
    return _res.status(200).json(character);
}));
exports.uploadImages = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = _req.params;
    const { bodyPart } = _req.body;
    if (!_req.files) {
        _res.send({
            status: false,
            msg: 'No file uploaded'
        });
    }
    else {
        const character = yield Character_1.Character.findById(id);
        const path = `./uploads/${id}/${bodyPart}/`;
        switch (bodyPart) {
            case 'body':
                const file = _req.files.body;
                const imageName = file.name;
                yield file.mv(path + imageName);
                const compressedImageName = yield (0, imageUtils_1.convertToWebp)(path, imageName);
                console.log(compressedImageName);
                character.default.body = compressedImageName;
                console.log(character);
                yield character.save();
                break;
            case 'expression':
                const files = _req.files;
                for (const expression of Object.keys(_req.files)) {
                    let image = files[expression];
                    let imageName = image.name;
                    yield image.mv(path + `${expression}/` + imageName);
                    const compressedImageName = yield (0, imageUtils_1.convertToWebp)(path + `${expression}/`, imageName);
                    character.default.expressions[expression] = compressedImageName;
                }
                yield character.save();
                break;
        }
        return _res.status(200).json({ msg: "Images uploaded !" });
    }
    return _res.status(500).send(`Something went wrong`);
}));
exports.getOneCharacter = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = _req.params.id;
    const character = yield Character_1.Character.findById(id);
    return _res.status(200).json(character);
}));
exports.updateOneCharacter = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    _res.send(`updateOneCharacter with id of ${_req.params.id}`);
}));
//# sourceMappingURL=characters.js.map