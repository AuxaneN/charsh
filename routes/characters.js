const express = require("express")
const router = express.Router()

// import functions from controllers 
const {getAllCharacters, getOneCharacter, updateOneCharacter, createCharacter} = require('../controllers/characters')

router.route('/').get(getAllCharacters)
router.route('/').post(createCharacter)

router.route('/:id').get(getOneCharacter)
router.route('/:id').put(updateOneCharacter)



module.exports = router 