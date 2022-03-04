const mongoose = require('mongoose')
const {Schema} = mongoose;

const characterSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Your character needs a name']
    },
    height:{
        type:Number,
        required:[true, 'You can change this later, I just need this to initialize things in the background']
    },
    age:{
        type:Number,
        min: [0, "Can't go lower than that"]
    },
    pronouns:{
        type:String,
        validate:{
            validator: function(string) {
                return /[a-z][A-Z]/.test(string)
            },
            message: props => 'Please use only letters.'
        }
    }
    // face :
    //   - head shape
         
})

const Character = mongoose.model('Character', characterSchema)

module.exports = Character