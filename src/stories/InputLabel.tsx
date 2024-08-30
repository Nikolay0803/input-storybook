import { FC } from "react";

export interface InputLabelProps {
  htmlFor: string;
  text: string;
}

const InputLabel: FC<InputLabelProps> = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default InputLabel;
