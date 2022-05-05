import * as express from "express";

const router = express.Router()
// Import the passport library and the passport strategy declaration we made, passing in passport as a parameter.
import passport from 'passport'
require('../utils/passport')(passport)
//Middleware
const isAdmin = require('../middleware/isAdmin')

import {login,register, userInfo,deleteUser,registerAdmin} from '../controllers/user'

// router.route('/').get(userInfo)

router.route('/login').post(login)

router.route('/register').post(register)
router.post('/register-admin', isAdmin, registerAdmin)

// api/v1/user/oops
router.post('/oops',[passport.authenticate('jwt', { session: false }), isAdmin],deleteUser)

router.get('/account-information', passport.authenticate('jwt', { session: false }), userInfo);

module.exports = router
