import { FC } from "react";

export interface InputAnnotationProps {
  text: string;
  type?: "error" | "info" | "success";
}

const InputAnnotation: FC<InputAnnotationProps> = ({ text, type }) => {
  const baseClasses = "text-xs mt-1";
  const typeClasses = {
    error: "text-red-500", 
    info: "text-blue-500",
    success: "text-green-500",
  };

  return (
    <div
      className={`${baseClasses} ${type ? typeClasses[type] : "text-gray-600"}`}
    >
      {text}
    </div>
  );
};

export default InputAnnotation;
