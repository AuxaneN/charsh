// Models
const Character = require('../models/Character')

const getAllCharacters = (req,res) => {
    res.send('getAllCharacters')
}

const createCharacter = (req, res) => {
    res.send('createCharacter')
    const {name, height, age, pronouns} = req.body
    let character = new characterModel({name, height, age, pronouns})
    character.save()
}

const getOneCharacter = (req,res) => {
    res.send(`getCharacter with id of ${req.params.id}`)
}

const updateOneCharacter = (req,res) =>{
    res.send(`updateOneCharacter with id of ${req.params.id}`)
}

module.exports = {getAllCharacters, getOneCharacter, updateOneCharacter, createCharacter} 