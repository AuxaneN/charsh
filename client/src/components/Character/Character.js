"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const characterStore_1 = require("../../stores/characterStore");
const Character = () => {
    const { getCharacter, character } = (0, characterStore_1.characterStore)((state) => state);
    let id = (0, react_router_dom_1.useParams)().id;
    (0, react_1.useEffect)(() => {
        getCharacter(id);
        console.log(character);
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { children: id }));
};
exports.default = Character;
//# sourceMappingURL=Character.js.map