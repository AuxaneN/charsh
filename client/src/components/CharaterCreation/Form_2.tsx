import { useState } from "react";
import { characterStore } from "../../stores/characterStore";

const Form_2 = () => {
  const { uploadImages, character } = characterStore((store) => store);

  interface IForm {
    [key: string]: Blob | string | undefined;
    body?: Blob | string;
    expressions1?: Blob | string;
    expressions2?: Blob | string;
    expressions3?: Blob | string;
    expressions4?: Blob | string;
    expressions5?: Blob | string;
    expressions6?: Blob | string;
  }

  const [data, setData] = useState<IForm>({});

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.files![0] });
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
  //Expressions and body
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Full body</h3>
        <label>Body</label>
        <input type="file" name="body" onChange={(e) => handleInput(e)} />

        <h3>Expressions</h3>
        <div>
          <label htmlFor="expression1">Expression 1</label>
          <br />
          <input
            type="file"
            name="expressions1"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="expression1">Expression 2</label>
          <br />

          <input
            type="file"
            name="expressions2"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="expression1">Expression 3</label>

          <br />

          <input
            type="file"
            name="expressions3"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="expression1">Expression 4</label>

          <br />

          <input
            type="file"
            name="expressions4"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="expression1">Expression 5</label>

          <br />

          <input
            type="file"
            name="expressions5"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="expression1">Expression 6</label>

          <br />

          <input
            type="file"
            name="expressions6"
            value={data.name}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Form_2;
