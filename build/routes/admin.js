import * as express from "express";
const router = express.Router();
let isAdmin = require('../middleware/isAdmin');
const isAuthenticated = require('../middleware/isAuthenticated');
import { adminDashboard } from '../controllers/admin';
router.use(isAuthenticated);
router.use(isAdmin);
router.route('/dashboard').get(adminDashboard);
module.exports = router;
//# sourceMappingURL=admin.js.map