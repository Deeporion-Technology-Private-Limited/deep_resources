import { Checkbox } from "@/components";
import { ButtonSize } from "@/components/types";
import React, { useState } from "react";
import { categories } from "@/components/Data/OfferData";
import { FindIconUrl } from "@/utils/Constant";

const Checklist: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };
  const expand = FindIconUrl("ExpandMore.svg")

  return (
    <>
      <div className="pt-0.5">
        <label className="text-gray-800 text-sm font-semibold font-poppins">
          Apply to
        </label>
      </div>
      <div className="w-full max-h-full px-4 bg-white rounded-lg scrollbar-w-0.5 scrollbar-h-full overflow-y-scroll scrollbar-thumb-brown-[#3F271E] scroll-track-[#EBE3E0]">
        {categories.map((category: any) => (
          <div key={category.name} className="border-b last:border-b-0">
            <div
              className="flex justify-between items-center py-2 cursor-pointer"
              onClick={() => toggleCategory(category.name)}
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  onChange={() => {}}
                  size={ButtonSize.Small}
                  value="Default Checkbox"
                  checked={category.checked}
                  type="checkbox"
                />
                <p className="text-gray-800 text-sm font-medium">
                  {category.name}
                </p>
                {category.count > 0 && (
                  <span className="text-gray-500">({category.count})</span>
                )}
              </div>
              <img
                src={expand}
                alt="Profile"
                className={`w-4 h-4 transform transition-transform ${
                  openCategories.includes(category.name) ? "rotate-180" : ""
                }`}
              />
            </div>
            {openCategories.includes(category.name) &&
              category.items.length > 0 && (
                <div className="flex flex-col gap-2 px-4">
                  {category.items.map((item: any) => (
                    <div key={item.name} className="flex items-center">
                      <Checkbox
                        onChange={() => {}}
                        size={ButtonSize.Small}
                        value="Default Checkbox"
                        type="checkbox"
                        className="mr-2"
                      />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Checklist;
