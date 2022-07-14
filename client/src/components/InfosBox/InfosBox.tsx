import InfosBoxStyle from "./InfosBoxStyle";

type IProps = {
  infos: {
    [key: string]: string | number;
    name: string;
    height: number;
    age: number;
  };
  about: string;
  personality: {
    [key: string]: string[];
    qualities: string[];
    flaws: string[];
  };
};

const capitalize = (word: string) => {
  let res = word.replace(/^\w/, (c) => c.toUpperCase());
  return res;
};
const InfosBox = ({ infos, about, personality }: IProps) => {
  return (
    <InfosBoxStyle>
      <h3>{infos.name}</h3>
      <div>
        <div className="content">
          <div className="info">
            <h4>Info:</h4>
            {Object.keys(infos)
              .filter((key) => {
                // Why would you do this instead of omitting the id from the query in the first place
                if (key !== "_id" && key !== "name") {
                  return true;
                } else {
                  return false;
                }
              })
              .map((info) => {
                //Capitalize first letter function
                let parsedInfo = capitalize(info);
                return (
                  <p className="info-item">
                    {parsedInfo}: {infos[info]}
                  </p>
                );
              })}
          </div>
          <div className="about">
            <h4>About:</h4>
            <div>
              <p className="about-item">{about}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="personality">
          <div className="qualities">
            <h3>+</h3>
            {personality.qualities.map((item) => {
              return <div className="qualities-item">{item}</div>;
            })}
          </div>
          <div className="flaws">
            <h3>-</h3>
            {personality.flaws.map((item) => {
              return <div className="flaws-item">{item}</div>;
            })}
          </div>
        </div>
      </div>
    </InfosBoxStyle>
  );
};

export default InfosBox;
