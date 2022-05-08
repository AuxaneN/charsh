// Import the passport library and the passport strategy declaration we made, passing in passport as a parameter.
const passport = require('passport')
require('../utils/passport')(passport)

module.exports = passport.authenticate('jwt', { session: false })
