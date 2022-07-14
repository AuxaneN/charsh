import BodyViewStyle from "./BodyViewStyle";

type Character = {
  _id: string;
  body: string;
  // Name, pronouns, age, height, Species
  infos?: {
    name: string;
    height?: number;
    age?: number;
  };
  about?: string;
  //Qualities, flaws
  personality?: {
    qualities?: string[];
    flaws?: string[];
  };
  //Eyes, nose, mouth, faceshape, ears
  face?: {
    [key: string]: string | undefined;
    eyes?: string;
    nose?: string;
    mouth?: string;
    faceshape?: string;
    ears?: string;
  };
  // Happy, neutral, surprised, sad, scared, fucking horny man > 6 image urls
  expressions?: string;
};

interface IProps {
  character: Character;
}

const BodyView = ({ character }: IProps) => {
  return (
    <BodyViewStyle>
      <img src={character.body} />
    </BodyViewStyle>
  );
};

export default BodyView;
