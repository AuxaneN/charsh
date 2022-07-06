"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const characterStore_1 = require("../../stores/characterStore");
const Form = () => {
    const { createCharacter } = (0, characterStore_1.characterStore)((store) => store);
    const [data, setData] = (0, react_1.useState)({ name: "" });
    const handleInput = (e) => {
        setData(Object.assign(Object.assign({}, data), { [e.target.name]: e.target.value }));
        console.log(data.name);
    };
    const handleSubmit = (e) => {
        const formData = new FormData(e.currentTarget);
        e.preventDefault();
        createCharacter(formData);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", value: data.name, onChange: (e) => handleInput(e) }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit" }, { children: "Create" }))] })) }));
};
exports.default = Form;
//# sourceMappingURL=Form.js.map