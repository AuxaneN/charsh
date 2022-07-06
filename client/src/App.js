"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const defaultTheme_1 = __importDefault(require("./styles/defaultTheme"));
const userStore_1 = require("./stores/userStore");
const react_router_dom_1 = require("react-router-dom");
const Nav_1 = __importDefault(require("./components/Nav/Nav"));
const Content_1 = __importDefault(require("./components/Content/Content"));
const Home_1 = __importDefault(require("./components/Home/Home"));
const Login_1 = __importDefault(require("./components/Login/Login"));
const Logout_1 = __importDefault(require("./components/Logout/Logout"));
const Register_1 = __importDefault(require("./components/Register/Register"));
const Messages_1 = __importDefault(require("./components/Messages/Messages"));
const Characters_1 = __importDefault(require("./components/Characters/Characters"));
const Character_1 = __importDefault(require("./components/Character/Character"));
const Form_1 = __importDefault(require("./components/Form/Form"));
const App = () => {
    let token;
    const setToken = (0, userStore_1.userStore)((state) => state.setToken);
    const localToken = localStorage.getItem("token");
    (0, react_1.useEffect)(() => {
        console.log("should be first");
        if (localToken) {
            setToken(localToken);
        }
        console.log("Apptsx fires once");
    }, []);
    token = (0, userStore_1.userStore)((state) => state.token);
    if (localToken) {
        axios_1.default.defaults.headers.common["Authorization"] = localToken;
    }
    axios_1.default.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios_1.default.defaults.withCredentials = false;
    return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, Object.assign({ theme: defaultTheme_1.default }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)(Messages_1.default, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(Nav_1.default, { loggedIn: token ? true : false }), (0, jsx_runtime_1.jsx)(Content_1.default, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/logout", element: (0, jsx_runtime_1.jsx)(Logout_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/register", element: (0, jsx_runtime_1.jsx)(Register_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/characters", element: (0, jsx_runtime_1.jsx)(Characters_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/characters/:id", element: (0, jsx_runtime_1.jsx)(Character_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/create-character", element: (0, jsx_runtime_1.jsx)(Form_1.default, {}) })] }), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "credits" }, { children: ["Made with \uD83D\uDC96 by", " ", (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://twitter.com/casyus", target: "_blank", rel: "no-referrer no-opener" }, { children: "@casyus" }))] }))] }) })] })] })) })));
};
exports.default = App;
//# sourceMappingURL=App.js.map