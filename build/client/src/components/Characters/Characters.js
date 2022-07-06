import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { characterStore } from "../../stores/characterStore";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CharacterCardStyle from "./CharacterCardStyle";
const Characters = () => {
    const navigate = useNavigate();
    const { getAllCharacters, characterList } = characterStore((state) => state);
    useEffect(() => {
        getAllCharacters();
        console.log("Character list", characterList);
    }, []);
    const handleClick = (e, id) => {
        e.preventDefault();
        navigate(`${id}`);
    };
    return (_jsxs(_Fragment, { children: [_jsx("h4", { children: "Characters? Characters." }), characterList && characterList.length > 0 ? (characterList.map((character) => {
                let keys = Array.from(Object.keys(character.data));
                let chars = keys.map((key, index) => {
                    var _a, _b;
                    let information = character.data[key];
                    console.log(character);
                    return (_jsx(_Fragment, { children: ((_a = information.infos) === null || _a === void 0 ? void 0 : _a.name) && (_jsxs(CharacterCardStyle, Object.assign({ onClick: (e) => handleClick(e, character._id) }, { children: [_jsx("span", { className: "picture" }), (_b = information.infos) === null || _b === void 0 ? void 0 : _b.name] }), index)) }));
                });
                return chars;
            })) : (_jsxs("div", { children: ["You don't have any characters yet.", _jsx("br", {}), _jsx(Link, Object.assign({ to: "/create-character" }, { children: "Make one ?" }))] }))] }));
};
export default Characters;
//# sourceMappingURL=Characters.js.map