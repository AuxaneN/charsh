import {Schema, model, Types} from 'mongoose'


const userSchema = new Schema({
  email:{
    type:String,
      validate:{
          validator:(v:string)=>{
          return /(([a-z]*[A-Z]*[0-9]*)+@([A-Z]*[a-z]*)\.([A-Z]*[a-z]*))/g.test(v)
      },
      message: () => `Incorrect email`
    },
  },
  password:{
    type:String,
    min:[8, "Password must be minimum 8 characters long."]
  },
  characters: [Types.ObjectId]
})
export const User = model('User', userSchema)
