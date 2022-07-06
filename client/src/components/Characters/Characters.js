"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const characterStore_1 = require("../../stores/characterStore");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const CharacterCardStyle_1 = __importDefault(require("./CharacterCardStyle"));
const Characters = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { getAllCharacters, characterList } = (0, characterStore_1.characterStore)((state) => state);
    (0, react_1.useEffect)(() => {
        getAllCharacters();
        console.log("Character list", characterList);
    }, []);
    const handleClick = (e, id) => {
        e.preventDefault();
        navigate(`${id}`);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h4", { children: "Characters? Characters." }), characterList && characterList.length > 0 ? (characterList.map((character) => {
                let keys = Array.from(Object.keys(character.data));
                let chars = keys.map((key, index) => {
                    var _a, _b;
                    let information = character.data[key];
                    console.log(character);
                    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: ((_a = information.infos) === null || _a === void 0 ? void 0 : _a.name) && ((0, jsx_runtime_1.jsxs)(CharacterCardStyle_1.default, Object.assign({ onClick: (e) => handleClick(e, character._id) }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "picture" }), (_b = information.infos) === null || _b === void 0 ? void 0 : _b.name] }), index)) }));
                });
                return chars;
            })) : ((0, jsx_runtime_1.jsxs)("div", { children: ["You don't have any characters yet.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/create-character" }, { children: "Make one ?" }))] }))] }));
};
exports.default = Characters;
//# sourceMappingURL=Characters.js.map