import * as express from "express";
const router = express.Router()

// Admin verification middleware
let isAdmin = require('../middleware/isAdmin')
const isAuthenticated = require('../middleware/isAuthenticated')
// Admin controller
import {adminDashboard} from '../controllers/admin'

// Ensure that all routes can only be accessed by an admin
router.use(isAuthenticated)
router.use(isAdmin)

router.route('/dashboard').get(adminDashboard)

module.exports = router
