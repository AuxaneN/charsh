import * as express from "express";
const router = express.Router()
// Import the passport library and the passport strategy declaration we made, passing in passport as a parameter.
import passport from 'passport'
require('../utils/passport')(passport)

// Admin verification middleware
let isAdmin = require('../middleware/isAdmin')

// Admin controller
import {adminDashboard} from '../controllers/admin'

// Ensure that all routes can only be accessed by an admin
router.use(passport.authenticate('jwt', { session: false }))
router.use(isAdmin)

router.route('/dashboard').get(adminDashboard)

module.exports = router
