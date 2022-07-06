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
      console.log(user.characters);
      const characters = await Character.find({
        _id: { $in: [...user.characters] },
      });
      console.log(characters);
      return _res
        .status(200)
        .json({ msg: `Retrieved characters`, data: characters });
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
      const character = await new Character({
        data: { default: { infos: { name: _req.body.name } } },
      });

      console.log(character);
      await character.save();
      const userId = _req.user._id;
      const user = await User.findOne({ _id: userId });
      user.characters.push(character._id);
      user.save();
      return _res.status(200).json(character);
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
      switch (bodyPart) {
        case "body":
          const file = _req.files.body as fileUpload.UploadedFile;
          const imageName: string = file.name;
          await file.mv(path + imageName);

          const compressedImageName = await convertToWebp(path, imageName);
          console.log(compressedImageName);
          let value = character.data.get(version);
          value.body = compressedImageName;

          character.data.set(version, { ...value });

          await character.save();

          break;
        case "expression":
          const files = _req.files as fileUpload.FileArray;
          // we use a for of loop to be able to wait for it to finish before calling our character.save()
          for (const expression of Object.keys(_req.files)) {
            // we have to specify the type here or typescript yells at us
            let image = files[expression] as fileUpload.UploadedFile;
            let imageName = image.name;
            await image.mv(path + `${expression}/` + imageName);
            const compressedImageName = await convertToWebp(
              path + `${expression}/`,
              imageName
            );
            let value = character.data.get(version);
            value.expressions[expression] = compressedImageName;
            character.data.set(version, value);
          }
          await character.save();
          break;
      }
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
