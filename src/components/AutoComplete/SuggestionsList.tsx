import React from "react";

type SuggestionsListProps = {
  suggestions: string[];
  handleItemClick: (suggestion: string) => void;
};

const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  handleItemClick,
}) => (
  <ul className="absolute z-10 mt-1 w-full bg-white rounded-lg border border-gray-300 shadow-md max-h-60 overflow-y-auto">
    {suggestions.map((suggestion, index) => (
      <li
        key={index}
        className="px-3 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
        onClick={() => handleItemClick(suggestion)}
      >
        <img
          loading="lazy"
          width="20"
          srcSet={`https://flagcdn.com/w40/${suggestion.toLowerCase()}.png 2x`}
          src={`https://flagcdn.com/w20/${suggestion.toLowerCase()}.png`}
          alt=""
          className="mr-2"
        />
        {suggestion}
      </li>
    ))}
  </ul>
);

export default SuggestionsList;
