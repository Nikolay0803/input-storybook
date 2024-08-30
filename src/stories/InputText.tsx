import { ChangeEvent, FC } from "react";

export interface InputTextProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: string;
  ariaLabel?: string;
  status: "error" | "default";
}

const InputText: FC<InputTextProps> = ({
  value,
  onChange,
  placeholder,
  id,
  ariaLabel,
  status,
}) => {

  const statusClasses =
    status === "error"
      ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
      : "border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-200";

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      aria-label={ariaLabel}
      className={`w-[323px] h-[36px] p-2.5 rounded border transition-colors duration-200 outline-none ${statusClasses} placeholder-gray-600`}
    />
  );
};

export default InputText;
