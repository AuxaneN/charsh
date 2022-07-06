var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { asyncWrapper } from "../middleware/async";
import { Character } from "../models/Character";
import User from "../models/User";
import { convertToWebp } from "../utils/imageUtils";
export const getAllCharacters = asyncWrapper((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    if (_req.user) {
        const userId = _req.user._id;
        const user = yield User.findOne({ _id: userId });
        console.log(user.characters);
        const characters = yield Character.find({
            _id: { $in: [...user.characters] },
        });
        console.log(characters);
        return _res
            .status(200)
            .json({ msg: `Retrieved characters`, data: characters });
    }
    return _res.status(200).json({ msg: `No characters found` });
}));
export const createCharacter = asyncWrapper((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("This is painful");
    if (_req.user) {
        console.log(_req.body);
        const character = yield new Character({
            data: { default: { infos: { name: _req.body.name } } },
        });
        console.log(character);
        yield character.save();
        const userId = _req.user._id;
        const user = yield User.findOne({ _id: userId });
        user.characters.push(character._id);
        user.save();
        return _res.status(200).json(character);
    }
    else {
        return _res.status(200).json({ msg: "Couldn't find user account" });
    }
}));
export const getOneCharacter = asyncWrapper((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = _req.params.id;
    const character = yield Character.findById(id);
    return _res.status(200).json(character);
}));
export const updateOneCharacter = asyncWrapper((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, version } = _req.params;
        let character = yield Character.findById(id);
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
export const uploadImages = asyncWrapper((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, version } = _req.params;
    const { bodyPart } = _req.body;
    if (!_req.files) {
        _res.send({
            status: false,
            msg: "No file uploaded",
        });
    }
    else {
        const character = yield Character.findById(id);
        const path = `./uploads/${id}/${bodyPart}/`;
        switch (bodyPart) {
            case "body":
                const file = _req.files.body;
                const imageName = file.name;
                yield file.mv(path + imageName);
                const compressedImageName = yield convertToWebp(path, imageName);
                console.log(compressedImageName);
                let value = character.data.get(version);
                value.body = compressedImageName;
                character.data.set(version, Object.assign({}, value));
                yield character.save();
                break;
            case "expression":
                const files = _req.files;
                for (const expression of Object.keys(_req.files)) {
                    let image = files[expression];
                    let imageName = image.name;
                    yield image.mv(path + `${expression}/` + imageName);
                    const compressedImageName = yield convertToWebp(path + `${expression}/`, imageName);
                    let value = character.data.get(version);
                    value.expressions[expression] = compressedImageName;
                    character.data.set(version, value);
                }
                yield character.save();
                break;
        }
        return _res.status(200).json({ msg: "Images uploaded !" });
    }
    return _res.status(500).json({ msg: `Something went wrong` });
}));
export const deleteCharacter = asyncWrapper((_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = _req.params;
    yield Character.deleteOne({ id });
    return _res.status(200).json({ msg: "Character successfuly deleted" });
}));
//# sourceMappingURL=characters.js.map