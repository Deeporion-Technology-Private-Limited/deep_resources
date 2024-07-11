import ProductCard from "@/components/Cards/ProductCards";
import { Box, BreadCrumb, Button, Checkbox, Text } from "@/components";
import Chips from "@/components/Chips";
import { ComponentProps, forwardRef, useState } from "react";
import { IData, breadCrumbsType, optionsArray } from "./data";
import { ChipsTypes } from "@/components/Chips/chipsTypes";
import { DownArrow } from "@/components/MenuItem/Icon/icon";

interface SortingProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
  title: string;
  data: IData[];
  onClick: (data: any) => void;
  images: string[];
  labels: string[];
  options: string[];
  breadCrumbs: breadCrumbsType[];
  chips: string[];
  breadCrumbIcon: string;
  sortHandler?: Function;
  className?: string;
}

const handleClick = (data: string) => {
  alert(data);
};
const SortingCard = forwardRef<HTMLDivElement, SortingProps>(
  (
    {
      title,
      data,
      breadCrumbs,
      chips,
      options,
      breadCrumbIcon,
      sortHandler,
      className,
      ...props
    },
    ref
  ) => {
    const [showChips, setShowChips] = useState(chips);
    const [showDropdown, setShowDropdown] = useState(false);

    const clearAllChips = () => {
      setShowChips([]);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      alert(value);
      return value;
    };

    const handleChip = (name: string) => {
      const filterChipsArray = showChips.filter((item) => item !== name);
      setShowChips(filterChipsArray);
    };

    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    return (
      <Box ref={ref} {...props} className={className}>
        <Box>
          <BreadCrumb
            breadCrumbItems={breadCrumbs}
            defaultSeparatorIconUrl={breadCrumbIcon}
          />
        </Box>
        <Box className="flex flex-col py-6">
          <Text className="font-bold pt text-[26px]">{title}</Text>
          <Box className="flex flex-wrap w-full gap-4 pt-5">
            {data?.map((item: any) => (
              <Box
                key={item.id}
                className="flex flex-col gap-[0.5rem] cursor-pointer hover:scale-110 transition"
                onClick={() => handleClick(item.label)}
              >
                <ProductCard
                  imageClass="w-[10rem] h-[13rem]"
                  imageSrc={item.imgSrc}
                />
                <Text className="pt-2 text-center">{item.label}</Text>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="flex justify-end gap-2">
          <Text as={"p"} className="text-zinc-400 w-fit ">
            Sort by:{" "}
          </Text>
          <Box className="flex items-center justify-center gap-2 relative">
            <Text>Recommended</Text>
            <Box
              className="w-full h-fit cursor-pointer"
              onClick={handleDropdown}
            >
              <DownArrow />
            </Box>
          </Box>
          {showDropdown && (
            <Box className="flex flex-col w-[16rem] px-5 py-4 rounded-lg bg-white shadow absolute mt-[35px]">
              {optionsArray.map((label) => (
                <Checkbox
                  onChange={onChange}
                  type="checkbox"
                  label={label}
                  labelPosition="before"
                  value={label}
                  aria-label={label}
                  labelClassname="text-zinc-800 text-base font-normal font-['Poppins']"
                />
              ))}
              <Box className="flex w-full h-full pt-5 border-t-2 px-2 gap-2 ">
                <Button className=" h-fit bg-transparent text-[#3F271E]">
                  Clear all
                </Button>
                <Button hover>Apply</Button>
              </Box>
            </Box>
          )}
        </Box>
        <Box className="flex gap-3 pt-4">
          {showChips.length > 0
            ? showChips.map((label) => (
              <Chips
                handleClick={() => handleChip(label)}
                key={label}
                addRightIcon
                size="lg"
                className="rounded-xl w-30 h-8 bg-[#EBE3E0] text-[#3F271E]"
                variant={ChipsTypes.default}
              >
                {label}
              </Chips>
            ))
            : null}

          {showChips.length > 0 && (
            <Button
              className="bg-transparent text-zinc-400 w-[5rem] h-8 p-0 font-normal"
              onClick={clearAllChips}
            >
              clear all
            </Button>
          )}
        </Box>
      </Box>
    );
  }
);

export default SortingCard;