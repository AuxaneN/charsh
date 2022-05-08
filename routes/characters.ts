import * as express from "express";
const router = express.Router()

// middleware


//is admin <= Can just delete it from the DB
// is Owner ? y/n
const characterIsAccessible = require("../middleware/characterIsAccessible")
const isAuthenticated = require("../middleware/isAuthenticated")
const isOwner = require("../middleware/isOwner")
// import functions from controllers
import {getAllCharacters, getOneCharacter, updateOneCharacter, createCharacter,uploadImages,deleteCharacter} from '../controllers/characters'

/**
 * Get All Characters for that one specific user
 * @route "/api/v1/characters/"
 * @method GET
 * @access owner
 */
router.get('/',[isAuthenticated], getAllCharacters)
/**
 * Create a new character for the logged in user
 * @route "/api/v1/characters/"
 * @method POST
 * @access logged
 */
router.post('/',isAuthenticated,createCharacter)

/**
 * Get the info on one character
 * @route "/api/v1/characters/:id"
 * @method GETk
 * @access owner and whitelist
 */
router.get('/:id',[isAuthenticated, characterIsAccessible], getOneCharacter)
/**
 * Create a new character for the logged in user
 * @route "/api/v1/characters/"
 * @method POST
 * @access owner
 */
router.route('/:id').delete(deleteCharacter)

// Must be logged in and own the character
router.put('/:id/:version',[isAuthenticated, isOwner],updateOneCharacter)
// Must be logged in and own the character
router.put('/:id/:version/spiceitup', [isAuthenticated, isOwner], uploadImages)

module.exports = router
