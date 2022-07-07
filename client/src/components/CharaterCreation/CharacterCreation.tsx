import { useState } from "react";
import Form from "../Form/Form";
const CharacterCreation = () => {
  // multipart form that sends the data for by form
  //  1 - Name
  //  2 - Body and expressions
  //  3 - Infos
  const initialState = 1;
  const [step, setStep] = useState(initialState);

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setStep(1);
    }
    console.log(step);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(3);
    }
    console.log(step);
  };

  return (
    <div>
      <Form />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default CharacterCreation;
