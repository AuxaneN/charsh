import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { characterStore } from "../../stores/characterStore";
// Screen parts
import BodyView from "../BodyView/BodyView";
import InfosBox from "../InfosBox/InfosBox";
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
        <div>
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
          <InfosBox
            infos={character.data[version].infos}
            about={character.data[version].about}
            personality={character.data[version].personality}
          />
          <BodyView character={character.data[version]} />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Character;
