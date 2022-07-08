import { useState } from "react";
import { characterStore } from "../../stores/characterStore";

const Form_3 = () => {
  const { character } = characterStore((state) => state);

  const initialState = { infos: { height: 170 } };
  const [data, setData] = useState(initialState);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    const formData = new FormData();
    // Transform state into formData
    for (const key in data) {
      formData.append(key, data[key]!);
    }
    e.preventDefault();
    uploadImages(character!._id, Object.keys(character!.data)[0], formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="traits" onChange={handleInput} value={data.infos.height} />
      </form>
    </>
  );
};
export default Form_3;
