import {Schema} from 'mongoose'

export const expressionSchema = new Schema({
  // Happy, neutral, surprised, sad, scared, fucking horny man > 6 image urls
  happy:{
    type:String,
    validate:{
        validator:(v:string)=>{
        return /\w+(.webp)/g.test(v)
      }
    }
  },
  neutral:{
    type:String,
    validate:{
        validator:(v:string)=>{
        return /\w+(.webp)/g.test(v)
      }
    }
  },
  surprised:{
    type:String,
    validate:{
        validator:(v:string)=>{
        return /\w+(.webp)/g.test(v)
      }
    }
  },
  sad:{
    type:String,
    validate:{
        validator:(v:string)=>{
        return /\w+(.webp)/g.test(v)
      }
    }
  },
  scared:{
    type:String,
    validate:{
        validator:(v:string)=>{
        return /\w+(.webp)/g.test(v)
      }
    }
  },
  horny:{
    type:String,
    validate:{
        validator:(v:string)=>{
        return /\w+(.webp)/g.test(v)
      }
    }
  },


})
