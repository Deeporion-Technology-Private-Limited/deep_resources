import React, { forwardRef, useState, ComponentProps } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

const CrossIcon = ({ onClick }: { onClick: () => void }) => (
  <div onClick={onClick} className="cursor-pointer absolute top-0 right-0 mt-2 mr-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>
);

const DropDownArrowIcon = ({ onClick }: { onClick: () => void }) => (
  <div onClick={onClick} className="cursor-pointer absolute top-0 right-0 mt-2 mr-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
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
} & ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const AutoComplete = forwardRef<HTMLInputElement, AutoCompleteProps>(
  ({ className, type = "text", suggestions, ...props }, ref) => {
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
      setFilteredSuggestions(suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      ));
      setShowSuggestions(value.length > 0);
    };

    const clearInput = () => {
      setInputValue('');
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    };

    const handleItemClick = (suggestion: string) => {
      if (type === "multivalues") {
        setSelectedValues(prevValues => [...prevValues, suggestion]);
        setInputValue('');
      } else {
        setInputValue(suggestion);
        setShowSuggestions(false);
      }
    };

    const removeSelectedItem = (item: string) => {
      setSelectedValues(prevValues => prevValues.filter(value => value !== item));
    };

    const toggleSuggestions = () => {
      setShowSuggestions(prevState => !prevState);
    };

    return (
      <div className="relative">
        <div className="relative">
          {type === "multivalues" && (
            <div className="flex flex-wrap gap-1 mb-1">
              {selectedValues.map((value, index) => (
                <div key={index} className="flex items-center bg-gray-200 rounded px-2 py-1">
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
            className={cn(
              inputStyles({ className }),
            )}
            {...props}
            onChange={handleChange}
            value={type === "multivalues" ? inputValue : inputValue}
          />
          {inputValue && (
            <CrossIcon onClick={clearInput} />
          )}
          <DropDownArrowIcon onClick={toggleSuggestions} />
        </div>
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="absolute z-10 mt-1 w-full bg-white rounded-lg border border-gray-300 shadow-md">
            {filteredSuggestions.map((suggestion, index) => (
              <li key={index} className="px-3 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleItemClick(suggestion)}>
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
