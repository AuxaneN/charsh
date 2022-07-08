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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCharacter = exports.uploadImages = exports.updateOneCharacter = exports.getOneCharacter = exports.createCharacter = exports.getAllCharacters = void 0;
const async_1 = require("../middleware/async");
const Character_1 = require("../models/Character");
const User_1 = __importDefault(require("../models/User"));
const imageUtils_1 = require("../utils/imageUtils");
exports.getAllCharacters = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    if (_req.user) {
        const userId = _req.user._id;
        const user = yield User_1.default.findOne({ _id: userId });
        if (user) {
            console.log(user.characters);
            const characters = yield Character_1.Character.find({
                _id: { $in: [...user.characters] },
            });
            console.log(characters);
            return _res
                .status(200)
                .json({ msg: `Retrieved characters`, data: characters });
        }
    }
    return _res.status(200).json({ msg: `No characters found` });
}));
exports.createCharacter = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("This is painful");
    if (_req.user) {
        console.log(_req.body);
        const character = new Character_1.Character({
            data: {
                default: {
                    infos: {
                        name: _req.body.name,
                    },
                    expressions: {},
                },
            },
        });
        console.log(character);
        yield character.save();
        const userId = _req.user._id;
        const user = yield User_1.default.findOne({ _id: userId });
        if (user) {
            user.characters.push(character._id);
            user.save();
            return _res.status(200).json(character);
        }
        else {
            return _res.status(401).json({ msg: "Couldn't find a user account" });
        }
    }
    else {
        return _res.status(200).json({ msg: "Couldn't find user account" });
    }
}));
exports.getOneCharacter = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = _req.params.id;
    const character = yield Character_1.Character.findById(id);
    return _res.status(200).json(character);
}));
exports.updateOneCharacter = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, version } = _req.params;
        let character = yield Character_1.Character.findById(id);
        if (character == null) {
            return _res
                .status(500)
                .json({ msg: `No character was found with this ID` });
        }
        character.data.set(version, _req.body);
        console.log(character.data);
        yield character.save();
        return _res.status(200).json(character);
    }
    catch (error) {
        return _res
            .status(500)
            .json({ msg: `Something went wrong please try again another time` });
    }
}));
exports.uploadImages = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, version } = _req.params;
    const { bodyPart } = _req.body;
    console.log(_req.files);
    if (!_req.files) {
        _res.send({
            status: false,
            msg: "No file uploaded",
        });
    }
    else {
        const character = yield Character_1.Character.findById(id);
        const path = `./uploads/${id}/${bodyPart}/`;
        for (const fileName in _req.files) {
            let imageName = _req.files[fileName].name;
            let compressedImageName;
            let value;
            switch (fileName) {
                case "body":
                    console.log("Body image", _req.files[fileName]);
                    const file = _req.files[fileName];
                    yield file.mv(path + imageName);
                    compressedImageName = yield (0, imageUtils_1.convertToWebp)(path, imageName);
                    console.log(compressedImageName);
                    value = character.data.get(version);
                    value.body = compressedImageName;
                    character.data.set(version, Object.assign({}, value));
                    break;
                case "expressions1":
                case "expressions2":
                case "expressions3":
                case "expressions4":
                case "expressions5":
                case "expressions6":
                    const files = _req.files;
                    console.log("Expression image", _req.files[fileName]);
                    let image = files[fileName];
                    yield image.mv(path + `${fileName}/` + imageName);
                    compressedImageName = yield (0, imageUtils_1.convertToWebp)(path + `${fileName}/`, imageName);
                    value = character.data.get(version);
                    console.log("VALUE", value);
                    value.expressions[fileName] = compressedImageName;
                    console.log("VALUE EXPRESSION", value.expressions);
                    console.log("CHARACTER DATA", character.data);
                    character.data.set(version, Object.assign({}, value));
                    break;
            }
        }
        yield character.save();
        return _res.status(200).json({ msg: "Images uploaded !" });
    }
    return _res.status(500).json({ msg: `Something went wrong` });
}));
exports.deleteCharacter = (0, async_1.asyncWrapper)((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = _req.params;
    yield Character_1.Character.deleteOne({ id });
    return _res.status(200).json({ msg: "Character successfuly deleted" });
}));
//# sourceMappingURL=characters.js.map