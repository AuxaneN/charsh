import { version } from "process";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { characterStore } from "../../stores/characterStore";
import BodyView from "../BodyView/BodyView";

const Character = () => {
  const { getCharacter, character } = characterStore((state) => state);

  const initialState = "default";
  const [version, setVersion] = useState(initialState);

  let id: string = useParams().id as string;
  useEffect(() => {
    getCharacter(id);
  }, []);
  return (
    <div>
      {character ? (
        <>
          Pick a version:
          <select
            onChange={(e) => {
              setVersion(e.target.value);
              console.log(version);
            }}
            value={version}
          >
            {Object.keys(character.data).map((ver) => {
              return <option>{ver}</option>;
            })}
          </select>
          <BodyView character={character.data[version]} />
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Character;
