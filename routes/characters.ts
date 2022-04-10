import * as express from "express";
const router = express.Router()

// import functions from controllers
import {getAllCharacters, getOneCharacter, updateOneCharacter, createCharacter,uploadImages,deleteCharacter} from '../controllers/characters'

router.route('/').get(getAllCharacters)
router.route('/').post(createCharacter)


router.route('/:id').get(getOneCharacter)
router.route('/:id').delete(deleteCharacter)

router.route('/:id/:version').put(updateOneCharacter)
router.route('/:id/:version/spiceitup').put(uploadImages)


module.exports = router
