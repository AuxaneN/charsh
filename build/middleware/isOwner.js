import User from '../models/User';
module.exports = function (_req, _res, _next) {
    const characterId = _req.params.id;
    let userId;
    if (_req.user) {
        userId = _req.user._id;
        console.log("User ID :", userId);
        User.findOne({ _id: userId }).then(user => {
            if (user.characters.indexOf(characterId) != -1) {
                _next();
            }
            else {
                _res.status(401).json({ msg: "Unauthorized" });
            }
        });
    }
    else {
        _res.status(500).json({ msg: "Couldn't verify user ID" });
    }
};
//# sourceMappingURL=isOwner.js.map