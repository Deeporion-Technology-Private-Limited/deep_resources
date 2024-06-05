import React, { forwardRef, useState, ComponentProps } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

const CrossIcon = ({ onClick }: { onClick: () => void }) => (
  <div
    onClick={onClick}
    className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-6"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill="#9EA4AA"
      />
    </svg>
  </div>
);

const DropDownArrowIcon = ({ onClick }: { onClick: () => void }) => (
  <div
    onClick={onClick}
    className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-2"
  >
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.62615 7.29289C6.01667 6.90237 6.64983 6.90237 7.04036 7.29289L10.3333 10.5858L13.6261 7.29289C14.0167 6.90237 14.6498 6.90237 15.0404 7.29289C15.4309 7.68342 15.4309 8.31658 15.0404 8.70711L11.0404 12.7071C10.6498 13.0976 10.0167 13.0976 9.62614 12.7071L5.62615 8.70711C5.23562 8.31658 5.23562 7.68342 5.62615 7.29289Z"
        fill="#72787F"
      />
    </svg>
  </div>
);

const inputStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-primary-500",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
]);

type AutoCompleteProps = {
  suggestions: string[];
  type?: "text" | "multivalues" | "country" | "multivaluesline";
} & ComponentProps<"input"> &
  VariantProps<typeof inputStyles>;

export const AutoComplete = forwardRef<HTMLInputElement, AutoCompleteProps>(
  ({ className, type = "text", suggestions, ...props }, ref) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(
      []
    );
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
      setFilteredSuggestions(
        suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        )
      );
      setShowSuggestions(value.length > 0);
    };

    const clearInput = () => {
      setInputValue("");
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    };

    const handleItemClick = (suggestion: string) => {
      if (type === "multivalues") {
        setSelectedValues((prevValues) => [...prevValues, suggestion]);
        setInputValue("");
      } else {
        setInputValue(suggestion);
        setShowSuggestions(false);
      }
    };

    const removeSelectedItem = (item: string) => {
      setSelectedValues((prevValues) =>
        prevValues.filter((value) => value !== item)
      );
    };

    const toggleSuggestions = () => {
      if (showSuggestions) {
        setShowSuggestions(false);
      } else {
        setFilteredSuggestions(
          suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
        setShowSuggestions(true);
      }
    };

    return (
      <div className="relative">
        <div className="relative">
          {type === "multivalues" && (
            <div className="flex flex-wrap gap-1 mb-1">
              {selectedValues.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-200 rounded px-2 py-1"
                >
                  <span className="mr-2">{value}</span>
                  <CrossIcon onClick={() => removeSelectedItem(value)} />
                </div>
              ))}
            </div>
          )}
          <input
            ref={ref}
            type="text"
            autoComplete="off"
            className={cn(inputStyles({ className }))}
            {...props}
            onChange={handleChange}
            value={type === "multivalues" ? inputValue : inputValue}
          />
          {inputValue && <CrossIcon onClick={clearInput} />}
          <DropDownArrowIcon onClick={toggleSuggestions} />
        </div>
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="absolute z-10 mt-1 w-full bg-white rounded-lg border border-gray-300 shadow-md">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleItemClick(suggestion)}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${suggestion.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${suggestion.toLowerCase()}.png`}
                  alt=""
                />
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

export default AutoComplete;
