import { useState } from "react";

export const Select = ({
  options = [],
  placeholder = "",
  disabled = false,
  defaultValue = "",
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) onChange(value);
  };

  return (
    <div className="relative w-full">
      {/* Botón del Select */}
      <button
        type="button"
        className={`relative py-3 ps-4 pe-9 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          disabled ? "pointer-events-none opacity-50" : ""
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{selectedValue || placeholder}</span>
        {/* Icono del dropdown */}
        <div className="absolute top-1/2 end-3 -translate-y-1/2">
          <svg
            className="shrink-0 size-3.5 text-gray-500 "
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul
          className="mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value || option}
              className={`py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100  ${
                option.disabled ? "pointer-events-none opacity-50" : ""
              }`}
              role="option"
              aria-disabled={option.disabled}
              onClick={() =>
                !option.disabled && handleSelect(option.value || option)
              }
            >
              {option.label || option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
