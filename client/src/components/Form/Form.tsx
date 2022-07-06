import { useState } from "react";
import { characterStore } from "../../stores/characterStore";

const Form = () => {
  const { createCharacter } = characterStore((store) => store);

  interface IForm {
    name: string;
  }

  const [data, setData] = useState<IForm>({ name: "" });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data.name);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    const formData = new FormData(e.currentTarget);

    e.preventDefault();
    createCharacter(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => handleInput(e)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Form;
