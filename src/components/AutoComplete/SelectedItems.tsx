import React from "react";
import { CrossIcon } from "./Icons";

type SelectedItemsProps = {
  selectedValues: string[];
  removeSelectedItem: (item: string) => void;
};

const SelectedItems: React.FC<SelectedItemsProps> = ({
  selectedValues,
  removeSelectedItem,
}) => (
  <div className="flex flex-wrap gap-2 mb-2">
    {selectedValues.map((value, index) => (
      <div
        key={index}
        className="flex items-center bg-blue-200 text-blue-800 rounded-full px-3 py-1 shadow-sm"
      >
        <span className="mr-2">
          {value}
          <CrossIcon onClick={() => removeSelectedItem(value)} />
        </span>
      </div>
    ))}
  </div>
);

export default SelectedItems;
