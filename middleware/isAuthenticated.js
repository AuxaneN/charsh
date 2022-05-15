"use strict";
const passport = require('passport');
require('../utils/passport')(passport);
module.exports = passport.authenticate('jwt', { session: false });
//# sourceMappingURL=isAuthenticated.js.map