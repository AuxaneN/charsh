import { useState } from "react";
import { characterStore } from "../../stores/characterStore";

const Form_3 = () => {
  const { character, updateCharacter } = characterStore((state) => state);

  // Interface-
  interface IInfos {
    [key: string]: string | number | undefined;
    name: string;
    height?: number;
    age?: number;
    pronouns?: string;
  }
  interface IPersonality {
    [key: string]: string[] | undefined;
    qualities?: string[];
    flaws?: string[];
  }
  interface IFace {
    [key: string]: string | undefined;
    eyes?: string;
    nose?: string;
    mouth?: string;
    faceshape?: string;
    ears?: string;
  }
  type IAbout = string;
  // initial states
  const initialInfosState = {
    name: character!.data.default.infos.name,
    height: 0,
    age: 0,
    pronouns: "",
  };
  const initialPersonalityState = {
    qualities: [""],
    flaws: [""],
  };
  const initialFaceState = {
    eyes: "",
    nose: "",
    mouth: "",
    faceshape: "",
    ears: "",
  };
  const initialAboutState = "";
  const [infos, setInfos] = useState<IInfos>(initialInfosState);

  const [personality, setPersonality] = useState<IPersonality>(
    initialPersonalityState
  );
  const [face, setFace] = useState<IFace>(initialFaceState);

  const [about, setAbout] = useState<IAbout>(initialAboutState);

  const handleInfosInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfos({ ...infos, [e.target.name]: e.target.value });
  };
  const handlePersonalityInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    number: number
  ) => {
    let newState = personality[e.target.name] || [];
    newState[number] = e.target.value;
    setPersonality({ ...personality, newState });
  };
  const handleFaceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFace({ ...face, [e.target.name]: e.target.value });
  };
  const handleAboutInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAbout(e.target.value);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(character.data);
    let characterBuild = character.data.default;
    characterBuild!.infos = infos;
    characterBuild!.personality = personality;
    characterBuild!.face = face;
    characterBuild!.about = about;

    updateCharacter(
      character!._id,
      Object.keys(character!.data)[0],
      characterBuild!
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="about">About</label>
        <input name="about" onChange={handleAboutInput} value={about} />
        <br />
        <label htmlFor="height">Height</label>
        <input name="height" onChange={handleInfosInput} value={infos.height} />
        <br />
        <label htmlFor="age">Age</label>
        <input name="age" onChange={handleInfosInput} value={infos.age} />
        <br />
        <label htmlFor="pronouns">Pronouns</label>
        <input
          name="pronouns"
          onChange={handleInfosInput}
          value={infos.pronouns}
        />
        <br />
        <label htmlFor="Qualities">Qualities</label>
        <input
          name="qualities"
          onChange={(e) => handlePersonalityInput(e, 0)}
          value={personality.qualities[0]}
        />
        <input
          name="qualities"
          onChange={(e) => handlePersonalityInput(e, 1)}
          value={personality.qualities[1]}
        />{" "}
        <br />
        <input
          name="qualities"
          onChange={(e) => handlePersonalityInput(e, 2)}
          value={personality.qualities[2]}
        />
        <label htmlFor="Flaws">Flaws</label>
        <input
          name="flaws"
          onChange={(e) => handlePersonalityInput(e, 0)}
          value={personality.flaws[0]}
        />
        <input
          name="flaws"
          onChange={(e) => handlePersonalityInput(e, 1)}
          value={personality.flaws[1]}
        />{" "}
        <br />
        <input
          name="flaws"
          onChange={(e) => handlePersonalityInput(e, 2)}
          value={personality.flaws[2]}
        />
        <br />
        <label htmlFor="eyes">Eyes</label>
        <input name="eyes" onChange={handleFaceInput} value={face.eyes} />
        <br />
        <label htmlFor="nose">Nose</label>
        <input name="nose" onChange={handleFaceInput} value={face.nose} />
        <br />
        <label htmlFor="mouth">Mouth</label>
        <input name="mouth" onChange={handleFaceInput} value={face.mouth} />
        <br />
        <label htmlFor="faceshape">Faceshape</label>
        <input
          name="faceshape"
          onChange={handleFaceInput}
          value={face.faceshape}
        />
        <br />
        <label htmlFor="ears">Ears</label>
        <input name="ears" onChange={handleFaceInput} value={face.ears} />
        <button>Submit</button>
      </form>
    </>
  );
};
export default Form_3;
