var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { userStore } from "../../stores/userStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const { register } = userStore((state) => state);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const handleChange = (prop, value) => {
        setData(Object.assign(Object.assign({}, data), { [prop]: value }));
    };
    const handleClick = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let res = yield register(data.email, data.password);
        console.log(res);
        if (res) {
            navigate("/", { replace: true });
            console.log("Logged in");
        }
    });
    return (_jsxs("div", { children: ["Register", _jsxs("form", { children: [_jsx("input", { placeholder: "email", type: "email", name: "email", onChange: (e) => {
                            handleChange('email', e.target.value);
                        } }), _jsx("input", { type: "password", name: "password", onChange: (e) => {
                            handleChange('password', e.target.value);
                        } }), _jsx("button", Object.assign({ onClick: (e) => {
                            handleClick(e);
                        } }, { children: "Submit" }))] })] }));
};
export default Register;
//# sourceMappingURL=Register.js.map