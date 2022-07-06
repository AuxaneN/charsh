import * as express from "express";
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated');
const isAdmin = require('../middleware/isAdmin');
import { login, register, userInfo, deleteUser, registerAdmin } from '../controllers/user';
router.route('/login').post(login);
router.route('/register').post(register);
router.post('/register-admin', isAdmin, registerAdmin);
router.post('/oops', [isAuthenticated, isAdmin], deleteUser);
router.get('/account-information', isAuthenticated, userInfo);
module.exports = router;
//# sourceMappingURL=user.js.map