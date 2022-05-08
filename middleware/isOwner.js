"use strict";
exports.__esModule = true;
//models
var User_1 = require("../models/User");
module.exports = function (_req, _res, _next) {
    var characterId = _req.params.id;
    if (_req.user) {
        var userId = _req.user._id;
        //=> Is it your character? Display the character
        User_1["default"].findOne({ _id: userId }).then(function (user) {
            if (user.characters.indexOf(characterId) != -1) {
                _next();
            }
            else {
                _res.redirect("/");
            }
        });
    }
    else {
        _res.status(500).json({ msg: "Couldn't verify user ID" });
    }
};
