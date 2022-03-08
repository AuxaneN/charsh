import { Request, Response } from 'express';
// Middleware
import {asyncWrapper} from '../middleware/async'
// Models
import {Character} from '../models/Character'

export const getAllCharacters = asyncWrapper(async (_req:Request,_res:Response) => {
    const character = await Character.find({})
    console.log(character)

    return _res.status(200).json(character)
})

export const createCharacter = asyncWrapper(async (_req:Request, _res:Response) => {

    console.log("create character")
    console.log(_req.body)
    if(_req.files){
      console.log("files detected", _req.files)
      // upload the image and return a url
      //do the same for every possible file in here
    }
    // const {name, height, age, pronouns} = _req.body
    let character = new Character(_req.body)

    await character.save()
    return _res.status(200).json(character)
})

export const uploadImages = asyncWrapper( async (_req:Request,_res:Response) =>{
    console.log('Spice it up')
    return _res.status(200).send('Spicing things up')
  }
)

export const getOneCharacter =  asyncWrapper(async (_req:Request,_res:Response) => {
  const id = _req.params.id
  const character = await Character.findById(id)
  console.log(character)

   return _res.status(200).json(character)
})

export const updateOneCharacter = asyncWrapper(async (_req:Request,_res:Response) =>{
    _res.send(`updateOneCharacter with id of ${_req.params.id}`)
})
