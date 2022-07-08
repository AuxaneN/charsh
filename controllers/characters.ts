import { Request, Response } from "express";
// Middleware
import { asyncWrapper } from "../middleware/async";
// Models
import { Character } from "../models/Character";
import User from "../models/User";

//utils
import { convertToWebp } from "../utils/imageUtils";
import { getUserId } from "../utils/userUtils";

import * as fileUpload from "express-fileupload";

export const getAllCharacters = asyncWrapper(
  async (_req: Request, _res: Response) => {
    if (_req.user) {
      const userId = _req.user._id;
      const user = await User.findOne({ _id: userId });
      if (user) {
        console.log(user.characters);
        const characters = await Character.find({
          _id: { $in: [...user.characters] },
        });
        console.log(characters);
        return _res
          .status(200)
          .json({ msg: `Retrieved characters`, data: characters });
      }
    }

    return _res.status(200).json({ msg: `No characters found` });
  }
);

export const createCharacter = asyncWrapper(
  async (_req: Request, _res: Response) => {
    console.log("This is painful");
    if (_req.user) {
      //let character = new Character(_req.body);
      // TODO - Require only a name and a picture
      console.log(_req.body);
      const character = new Character({
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
      await character.save();
      const userId = _req.user._id;
      const user = await User.findOne({ _id: userId });
      if (user) {
        user.characters.push(character._id);
        user.save();

        return _res.status(200).json(character);
      } else {
        return _res.status(401).json({ msg: "Couldn't find a user account" });
      }
    } else {
      return _res.status(200).json({ msg: "Couldn't find user account" });
    }
  }
);

export const getOneCharacter = asyncWrapper(
  async (_req: Request, _res: Response) => {
    const id = _req.params.id;
    const character = await Character.findById(id);
    return _res.status(200).json(character);
  }
);

export const updateOneCharacter = asyncWrapper(
  async (_req: Request, _res: Response) => {
    try {
      const { id, version } = _req.params;
      // Find the character with the id
      let character = await Character.findById(id);
      if (character == null) {
        return _res
          .status(500)
          .json({ msg: `No character was found with this ID` });
      }
      // Update based on body or just throw everything in there
      // The Map object lets us use the .get or .set methods to replace things, it's pretty dope
      character.data.set(version, _req.body);
      console.log(character.data);

      await character.save();

      return _res.status(200).json(character);
    } catch (error) {
      return _res
        .status(500)
        .json({ msg: `Something went wrong please try again another time` });
    }
  }
);

export const uploadImages = asyncWrapper(
  async (_req: Request, _res: Response) => {
    const { id, version } = _req.params;
    const { bodyPart } = _req.body;
    console.log(_req.files);
    if (!_req.files) {
      _res.send({
        status: false,
        msg: "No file uploaded",
      });
    }
    // in here somewhere check if the file format is correct
    else {
      const character = await Character.findById(id);
      const path = `./uploads/${id}/${bodyPart}/`;
      for (const fileName in _req.files) {
        let imageName: string = _req.files[fileName].name;
        let compressedImageName;
        let value;
        switch (fileName) {
          case "body":
            console.log("Body image", _req.files[fileName]);
            const file = _req.files[fileName] as fileUpload.UploadedFile;
            await file.mv(path + imageName);

            compressedImageName = await convertToWebp(path, imageName);
            console.log(compressedImageName);
            value = character.data.get(version);
            value.body = compressedImageName;

            character.data.set(version, { ...value });

            break;
          case "expressions1":
          case "expressions2":
          case "expressions3":
          case "expressions4":
          case "expressions5":
          case "expressions6":
            const files = _req.files as fileUpload.FileArray;
            // we use a for of loop to be able to wait for it to finish before calling our character.save()

            console.log("Expression image", _req.files[fileName]);
            // we have to specify the type here or typescript yells at us
            let image = files[fileName] as fileUpload.UploadedFile;
            await image.mv(path + `${fileName}/` + imageName);
            compressedImageName = await convertToWebp(
              path + `${fileName}/`,
              imageName
            );
            value = character.data.get(version);
            console.log("VALUE", value);
            value.expressions[fileName] = compressedImageName;
            console.log("VALUE EXPRESSION", value.expressions);
            console.log("CHARACTER DATA", character.data);
            character.data.set(version, { ...value });

            break;
        }
      }

      await character.save();
      return _res.status(200).json({ msg: "Images uploaded !" });
    }
    return _res.status(500).json({ msg: `Something went wrong` });
  }
);

export const deleteCharacter = asyncWrapper(
  async (_req: Request, _res: Response) => {
    const { id } = _req.params;
    await Character.deleteOne({ id });

    return _res.status(200).json({ msg: "Character successfuly deleted" });
  }
);
