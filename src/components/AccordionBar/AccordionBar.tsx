import { useState } from "react";
import { CoustomizeAccordion } from "../Accordion/CoustmaizeAccordion";
import { Checkbox } from "../Checkbox";
import { Elevation } from "../Elevation";
import { SmallCursor } from "./data";
import React from "react";


interface IData {
  children: string;
  content: any;
  Icon?: React.ReactNode;
  childClassName?: string;
  more?: string;
  isMore?: boolean;
}

export const AccordionBar = ({
  handleClick,
  title,
  data,
  handleFilter,
  queryValues,
  selectedSize,
  setSelectedSize,
}: {
  handleClick: () => void;
  title: string;
  data: { subcategories: [] }[];
  handleFilter: any;
  queryValues: string[];
  selectedSize: string[];
  setSelectedSize: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [isColorPopupOpen, setIsColorPopupOpen] = useState(false);

  const categories = data[0]?.subcategories;

  const myData: IData[] = [
    {
      children: "Categories",
      content: categories,
      childClassName: "bg-[#EBE3E0] text-black shadow rounded-md",
    },
    {
      Icon: <SmallCursor />,
      children: "Size",
      content: [
        { id: 1, name: "XS" },
        { id: 2, name: "S" },
        { id: 3, name: "M" },
        { id: 4, name: "L" },
        { id: 5, name: "XL" },
        { id: 6, name: "XXL" },
        { id: 7, name: "XXXL" },
      ],
      childClassName: "bg-[#EBE3E0] text-black shadow rounded-md",
    },
    {
      Icon: <SmallCursor />,
      children: "Color",
      content: [
        { id: 1, name: "Black", color: "#000000" },
        { id: 2, name: "Blue", color: "#0000FF" },
        { id: 3, name: "Green", color: "#00FF00" },
        { id: 4, name: "Pink", color: "#FFC0CB" },
        { id: 5, name: "White", color: "#FFFFFF" },
        { id: 6, name: "Red", color: "#FF0000" },
        { id: 7, name: "Yellow", color: "#FFFF00" },
      ],
      more: "+35",
      isMore: true,
      childClassName: "bg-[#EBE3E0] text-black shadow rounded-md",
    },
    {
      Icon: <SmallCursor />,
      children: "Price",
      content: [
        { id: 1, name: "Under ₹ 500" },
        { id: 2, name: "₹ 500 to ₹ 1000" },
        { id: 3, name: "₹ 1000 to ₹ 2000" },
        { id: 4, name: "₹ 2000 to ₹ 5000" },
        { id: 5, name: "₹ 5000 to ₹ 10000" },
      ],
      childClassName: "bg-[#EBE3E0] text-black shadow rounded-md",
    },
  ];

  const toggleColorPopup = () => {
    setIsColorPopupOpen(!isColorPopupOpen);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  return (
    <>
      <div className="hidden h-full overflow-y-auto lg:block">
        <Elevation className="h-[fit] w-fit flex-col gap-2 px-2 py-3 font-sans font-medium">
          <div className="w-full px-2 text-center text-lg font-bold capitalize">
            {title}
          </div>
          <div className="flex flex-col gap-1">
            {myData?.map((item) => {
              const isSizeButton = item.children === "Size";

              return (
                <CoustomizeAccordion
                  key={item?.children}
                  Icon={item?.Icon || <SmallCursor />}
                  more={item?.more}
                  children={item?.children}
                  handleMore={item?.isMore ? toggleColorPopup : handleClick}
                  isMore={item?.isMore}
                  content={
                    isSizeButton
                      ? item?.content?.map(
                          (value: { id: string; name: string }) => (
                            <div
                              key={value.id}
                              className={`rounded-md py-2 text-center text-sm ${
                                selectedSize.includes(value.name)
                                  ? "bg-[#3F271E] text-white"
                                  : "bg-white"
                              }`}
                              onClick={() => {
                                handleSizeClick(value.name);
                                handleFilter(value.name, item.children, value);
                              }}
                            >
                              {value.name}
                            </div>
                          ),
                        )
                      : item?.content?.map(
                          (value: {
                            id: string;
                            color: string;
                            name: string;
                          }) => (
                            <div
                              key={value.id}
                              className="text[#26282B] flex items-center gap-2 text-sm font-normal"
                            >
                              {value?.color && (
                                <span
                                  className="h-4 w-4 rounded-full border border-gray-300"
                                  style={{ backgroundColor: value.color }}
                                />
                              )}
                              <Checkbox
                                key={value.id}
                                label={value.name}
                                value={value.name}
                                onChange={(e) =>
                                  handleFilter(
                                    e.target.value,
                                    item.children,
                                    value,
                                  )
                                }
                                className="flex w-full justify-between"
                                labelPosition="before"
                                checked={queryValues?.includes(value.name)}
                              />
                            </div>
                          ),
                        )
                  }
                  childClassName={item?.childClassName}
                  className={`w-[200px] bg-gradient-to-r from-[#D2B48C]  rounded-md to-[#3F271E] text-white`}
                />
              );
            })}
          </div>
        </Elevation>
      </div>

      {isColorPopupOpen && (
        <div
          className="absolute z-[1000] bg-white shadow-lg"
          style={{
            width: "665px",
            height: "345px",
            top: "400px",
            left: "250px",
            paddingTop: "20px",
            borderRadius: "8px 8px 32px 8px",
            overflow: "hidden",
          }}
        >
          <button
            className="float-right mb-2 mr-2 p-1 text-gray-600 hover:text-gray-800"
            onClick={toggleColorPopup}
          >
            Close
          </button>
          <div className="grid grid-cols-3 gap-4 px-5">
            {myData[2].content.map((color: any, index: any) => (
              <div
                key={index}
                className="flex items-center"
                style={{
                  width: "200px",
                  height: "36px",
                  padding: "10px 16px",
                  gap: "15px",
                  borderRadius: "8px 0px 0px 0px",
                }}
              >
                <span
                  className="h-4 w-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.color }}
                />
                <span className="text-sm font-normal">{color.name}</span>
                <Checkbox
                  label=""
                  value={color.name}
                  onChange={(e) => handleFilter(e.target.value, "Color", color)}
                  checked={queryValues?.includes(color.name)}
                  className="ml-auto"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
