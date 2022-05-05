import * as express from "express";
const router = express.Router()

// middleware
// Import the passport library and the passport strategy declaration we made, passing in passport as a parameter.
import passport from 'passport'
require('../utils/passport')(passport)

//is admin <= Can just delete it from the DB
// is Owner ? y/n

// import functions from controllers
import {getAllCharacters, getOneCharacter, updateOneCharacter, createCharacter,uploadImages,deleteCharacter} from '../controllers/characters'

/**
 * Get All Characters for that one specific user
 * @route "/api/v1/characters/"
 * @method GET
 * @access owner
 */
router.get('/',[passport.authenticate('jwt', { session: false })], getAllCharacters)
/**
 * Create a new character for the logged in user
 * @route "/api/v1/characters/"
 * @method POST
 * @access logged
 */
router.post('/', passport.authenticate('jwt', { session: false }),createCharacter)

/**
 * Get the info on one character
 * @route "/api/v1/characters/:id"
 * @method GETk
 * @access owner and whitelist
 */
router.route('/:id').get(getOneCharacter)
/**
 * Create a new character for the logged in user
 * @route "/api/v1/characters/"
 * @method POST
 * @access owner
 */
router.route('/:id').delete(deleteCharacter)

// Must be logged in and own the character
router.route('/:id/:version').put(updateOneCharacter)
// Must be logged in and own the character
router.route('/:id/:version/spiceitup').put(uploadImages)

module.exports = router
