import { useState } from "react";
import Form from "../Form/Form";
import Form_2 from "./Form_2";
import Form_3 from "./Form_3";
const CharacterCreation = () => {
  // multipart form that sends the data for by form
  //  1 - Name
  //  2 - Body and expressions
  //  3 - Infos
  const component = [<Form />, <Form_2 />, <Form_3 />];
  const [step, setStep] = useState(0);
  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      setStep(0);
    }
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(2);
    }
  };

  return (
    <div>
      {component[step]}
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default CharacterCreation;
