import User from '../models/User';
module.exports = function (_req, _res, _next) {
    console.log("checking for admin");
    if (_req.user) {
        const userId = _req.user._id;
        console.log(userId);
        User.findOne({ _id: userId }).then(user => {
            if (user.role == "admin") {
                return _next();
            }
            else {
                const err = new Error("Not authorized");
                return _next(err);
            }
        });
    }
    else {
        _res.status(500).json({ msg: "Couldn't verify user ID" });
    }
};
//# sourceMappingURL=isAdmin.js.map