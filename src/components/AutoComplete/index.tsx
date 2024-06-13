import React, { forwardRef, useState, ComponentProps } from "react";
import { cn } from "@/utils";
import { inputStyles } from "./styles";
import { AutoType } from "./type";
import { CrossIcon, DropDownArrowIcon } from "../AutoComplete/Icons";
import SelectedItems from "../AutoComplete/SelectedItems";
import SuggestionsList from "../AutoComplete/SuggestionsList";

type AutoCompleteProps = {
  suggestions: string[];
  type: AutoType;
} & ComponentProps<"input">;

export const AutoComplete = forwardRef<HTMLInputElement, AutoCompleteProps>(
  ({ className, type = "text", suggestions, ...props }, ref) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
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
      if (type === AutoType.Multivalues) {
        setSelectedValues((prevValues) => [...prevValues, suggestion]);
        setInputValue("");
      } else {
        setInputValue(suggestion);
        setShowSuggestions(false);
      }

      setFilteredSuggestions((prevSuggestions) =>
        prevSuggestions.filter((item) => item !== suggestion)
      );
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
        <div className={cn(inputStyles({ className }))}>
          {type === AutoType.Multivalues && (
            <SelectedItems
              selectedValues={selectedValues}
              removeSelectedItem={removeSelectedItem}
            />
          )}
          <input
          className="!outline-none !ring-none !border-none "
            ref={ref}
            type="text"
            autoComplete="off"
            {...props}
            onChange={handleChange}
            value={inputValue}
          />
          
        </div>
        
        {showSuggestions && filteredSuggestions.length > 0 && (
          <SuggestionsList
            suggestions={filteredSuggestions}
            handleItemClick={handleItemClick}
          />
        )}
        {inputValue && <CrossIcon onClick={clearInput} />}
        <DropDownArrowIcon onClick={toggleSuggestions} />
      </div>
    );
  }
);

export default AutoComplete;
