"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const userStore_1 = require("../../stores/userStore");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Logout = () => {
    const { logout } = (0, userStore_1.userStore)((state) => state);
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        logout();
        navigate("/", { replace: true });
    }, [logout]);
    return ((0, jsx_runtime_1.jsx)("div", { children: "Logging out..." }));
};
exports.default = Logout;
//# sourceMappingURL=Logout.js.map