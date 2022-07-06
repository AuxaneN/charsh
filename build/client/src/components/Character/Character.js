import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { characterStore } from "../../stores/characterStore";
const Character = () => {
    const { getCharacter, character } = characterStore((state) => state);
    let id = useParams().id;
    useEffect(() => {
        getCharacter(id);
        console.log(character);
    }, []);
    return (_jsx("div", { children: id }));
};
export default Character;
//# sourceMappingURL=Character.js.map