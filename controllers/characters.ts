import { Request, Response } from 'express';
// Middleware
import {asyncWrapper} from '../middleware/async'
// Models
import {Character} from '../models/Character'
//utils
import {convertToWebp} from '../utils/imageUtils'

import * as fileUpload from 'express-fileupload'

export const getAllCharacters = asyncWrapper(async (_req:Request,_res:Response) => {
    const character = await Character.find({})
    console.log(character)

    return _res.status(200).json(character)
})

export const createCharacter = asyncWrapper(async (_req:Request, _res:Response) => {
    // const {name, height, age, pronouns} = _req.body
    let character = new Character(_req.body)
    await character.save()

    return _res.status(200).json(character)
})

export const uploadImages = asyncWrapper( async  (_req:Request,_res:Response) =>{
      const {id} = _req.params
      const {bodyPart} = _req.body

      if(!_req.files) {
            _res.send({
                status: false,
                msg: 'No file uploaded'
            });
        }
        // in here somewhere check if the file format is correct
      else {

        const character = await Character.findById(id)
        const path = `./uploads/${id}/${bodyPart}/`
        switch (bodyPart){
          case 'body':
            const file = _req.files.body as fileUpload.UploadedFile
            const imageName:string = file.name
            await file.mv(path + imageName)

            const compressedImageName = await convertToWebp(path, imageName)
            console.log(compressedImageName)
            // The body doesn't save as planned
            character.default.body = compressedImageName
            console.log(character)
            await character.save()

          break;
          case 'expression':
              const files = _req.files as fileUpload.FileArray
              // we use a for of loop to be able to wait for it to finish before calling our character.save()
              for (const expression of Object.keys(_req.files)) {
                // we have to specify the type here or typescript yells at us
                  let image = files[expression] as fileUpload.UploadedFile
                  let imageName = image.name
                  await image.mv(path +`${expression}/`+ imageName)
                  const compressedImageName = await convertToWebp(path +`${expression}/`, imageName)

                  character.default.expressions[expression] = compressedImageName
              }

              await character.save()
          break;
        }
        return _res.status(200).json({msg:"Images uploaded !"})
      }
      return _res.status(500).send(`Something went wrong`)
  }
)

export const getOneCharacter =  asyncWrapper(async (_req:Request,_res:Response) => {
  const id = _req.params.id
  const character = await Character.findById(id)
   return _res.status(200).json(character)
})

export const updateOneCharacter = asyncWrapper(async (_req:Request,_res:Response) =>{
    _res.send(`updateOneCharacter with id of ${_req.params.id}`)
})
