import { useState } from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  type?: string;
}

function Input({ placeholder, className, type = "text" }: InputProps) {
  const [value, setValue] = useState("");

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`rounded border px-2 py-1 outline-0 placeholder-gray-500${className}`}
    />
  );
}

export default Input;
