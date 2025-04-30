import { useState } from "react";

interface InputProps {
  placeholder: string;
  className?: string;
}

function Input({ placeholder, className }: InputProps) {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`rounded border px-2 py-1 placeholder-gray-500${className}`}
    />
  );
}

export default Input;
