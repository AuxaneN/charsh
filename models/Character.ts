import {Schema, model} from 'mongoose'

//Schema bits
import {characterVersionSchema} from './CharacterVersion'


const characterSchema = new Schema({
  data:{
    type: Map,
    of: characterVersionSchema
  },
  isPublic:{
    type: Boolean,
    default:true
  }
})
export const Character = model('Character', characterSchema)
