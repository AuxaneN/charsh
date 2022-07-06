"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const userStore_1 = require("../../stores/userStore");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Login = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { login } = (0, userStore_1.userStore)((state) => state);
    const [data, setData] = (0, react_1.useState)({
        email: "",
        password: ""
    });
    const handleChange = (prop, value) => {
        setData(Object.assign(Object.assign({}, data), { [prop]: value }));
    };
    const handleClick = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let res = yield login(data.email, data.password);
        console.log(res);
        if (res) {
            navigate("/", { replace: true });
            console.log("Logged in");
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", { children: ["Login page", (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsx)("input", { placeholder: "email", type: "email", name: "email", onChange: (e) => {
                            handleChange('email', e.target.value);
                        } }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", onChange: (e) => {
                            handleChange('password', e.target.value);
                        } }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: (e) => {
                            handleClick(e);
                        } }, { children: "Submit" }))] })] }));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map