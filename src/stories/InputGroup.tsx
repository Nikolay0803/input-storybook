import { ReactNode, FC } from "react";

export interface InputGroupProps {
  label: ReactNode;
  input: ReactNode;
  annotation?: any;
}

const InputGroup: FC<InputGroupProps> = ({ label, input, annotation }) => {
  const getAnnotationClasses = () => {
    switch (annotation?.type) {
      case "error":
        return "text-red-500";
      case "info":
        return "text-blue-500";
      case "success":
        return "text-green-500";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="mb-4 flex flex-col p-6">
      {label}
      {input}
      {annotation && (
        <div className={`mt-1 text-xs ${getAnnotationClasses()}`}>
          {annotation.text}
        </div>
      )}
    </div>
  );
};

export default InputGroup;
