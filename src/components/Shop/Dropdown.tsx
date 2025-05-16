import { useState, useRef } from "react";

interface DropdownProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function Dropdown({ value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <div className="relative z-1">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className="flex w-full items-center justify-center gap-1 rounded p-1 font-medium hover:bg-gray-100"
      >
        {value}
        <svg
          className="size-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0" onClick={() => setIsOpen(false)}></div>
          <div className="absolute left-0 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5">
            <div className="whitespace-nowrap">
              {[
                "All",
                "Electronics",
                "Jewellery",
                "Men's Clothing",
                "Women's Clothing",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onChange(category);
                    setIsOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm ${
                    category === value
                      ? "cursor-not-allowed text-gray-400"
                      : "text-gray-700 hover:bg-sky-100"
                  } `}
                  disabled={category === value}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
