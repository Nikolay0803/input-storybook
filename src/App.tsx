import { ChangeEvent, useState } from "react";
import InputGroup from "./stories/InputGroup";
import InputLabel from "./stories/InputLabel";
import InputText from "./stories/InputText";
import { InputAnnotationProps } from "./stories/InputAnnotation";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsTouched(true);
  };

  const annotation: InputAnnotationProps | undefined =
    isTouched && inputValue.length === 0
      ? { text: "This field is required", type: "error" }
      : undefined;

  return (
    <InputGroup
      label={<InputLabel htmlFor="email-input" text="Email" />}
      input={
        <InputText
          id="email-input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text..."
          ariaLabel="Example input field"
          status={isTouched && inputValue.length === 0 ? "error" : "default"}
        />
      }
      annotation={annotation}
    />
  );
}

export default App;
