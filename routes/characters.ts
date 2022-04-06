import * as express from "express";
const router = express.Router()

// import functions from controllers
import {getAllCharacters, getOneCharacter, updateOneCharacter, createCharacter,uploadImages} from '../controllers/characters'

router.route('/').get(getAllCharacters)
router.route('/').post(createCharacter)

router.route('/:id/:version/spiceitup').put(uploadImages)

router.route('/:id').get(getOneCharacter)
router.route('/:id/:version').put(updateOneCharacter)


module.exports = router
