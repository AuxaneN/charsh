import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { characterStore } from "../../stores/characterStore";
const Form = () => {
    const { createCharacter } = characterStore((store) => store);
    const [data, setData] = useState({ name: "" });
    const handleInput = (e) => {
        setData(Object.assign(Object.assign({}, data), { [e.target.name]: e.target.value }));
        console.log(data.name);
    };
    const handleSubmit = (e) => {
        const formData = new FormData(e.currentTarget);
        e.preventDefault();
        createCharacter(formData);
    };
    return (_jsx("div", { children: _jsxs("form", Object.assign({ onSubmit: handleSubmit }, { children: [_jsx("input", { type: "text", name: "name", value: data.name, onChange: (e) => handleInput(e) }), _jsx("button", Object.assign({ type: "submit" }, { children: "Create" }))] })) }));
};
export default Form;
//# sourceMappingURL=Form.js.map