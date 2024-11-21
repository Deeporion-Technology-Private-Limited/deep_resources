import { ComponentProps, forwardRef, useEffect, useState } from "react";
import { BreadCrumb } from "../BreadCrumb";
import { DefaultButton } from "../Button/DefaultButton";
import { ProductCard } from "../Cards/ProductCards";
import { Checkbox } from "../Checkbox";
import { Chips } from "../Chips";
import { FilterDropdown } from "../FilterDropdown";
import { Box } from "../Layout";
import { DownArrow } from "../MenuItem/Icon/icon";
import { Text } from "../Text";
import { ChipsTypes } from "../types";
import { IBreadCrumbsType, IData } from "./data";


interface ISortingProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
  title: string | undefined;
  data: IData[];
  onClick?: (data: any) => void;
  options: string[];
  breadCrumbs: IBreadCrumbsType[];
  chips: string[];
  breadCrumbIcon: string;
  sortHandler?: any;
  className?: string;
  handleClear?: () => void;
  removeChip?: (label: string) => void;
  handleClearAllChips?: () => void;
  setSelectedSize: React.Dispatch<React.SetStateAction<string[]>>;
}

const handleClick = (data: string) => {
  alert(data);
};
const SortingCard = forwardRef<HTMLDivElement, ISortingProps>(
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
      handleClear,
      removeChip,
      handleClearAllChips,
      setSelectedSize,
      ...props
    },
    ref,
  ) => {
    const [showChips, setShowChips] = useState(chips);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [option, setOption] = useState("Recommended");

    useEffect(() => {
      setShowChips(chips);
    }, [chips]);

    const clearAllChips = () => {
      setShowChips([]);
      setSelectedSize([]);
      if (handleClearAllChips !== undefined) {
        handleClearAllChips();
      }
    };

    const handleChip = (label: string) => {
      const filterChipsArray = showChips.filter((item) => item !== label);
      setShowChips(filterChipsArray);
      if (removeChip !== undefined) {
        removeChip(label);
      }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;

      if (!sortHandler || !checked) return;

      const sortMapping: { [key: string]: string } = {
        "Price: Low-to-High": "price_asc",
        "Price: High-to-Low": "price_desc",
        "Better Discount": "discount",
        "Customer Rating": "rating",
        "What's New": "newest",
        Popularity: "popular",
      };

      const sortValue = sortMapping[value] || "recommended";

      sortHandler(sortValue);
      setShowDropdown(false);
      setOption(value);
    };

    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    const handleFilter = () => {
      setShowFilter(!showFilter);
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
          <Text className="pt text-[26px] font-bold capitalize">{title}</Text>
          <Box className="flex w-full flex-wrap gap-8 pl-2 pt-5 lg:gap-4">
            {data?.map((item) => (
              <Box
                key={item.id}
                className="flex cursor-pointer flex-col gap-[0.5rem] transition hover:scale-110"
                onClick={() => handleClick(item.label)}
              >
                <ProductCard
                  className="w-[5.375rem] rounded-full lg:w-full lg:rounded-none"
                  imageClass="w-[5.625rem] h-[5.625rem] rounded-[0.5rem] z-[100]"
                  imageSrc={item?.imgSrc}
                />
                <Text className="pt-2 text-center font-['Poppins'] text-xs font-medium">
                  {item?.label}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="flex justify-between p-4 lg:justify-end">
          <Box className="flex gap-2 lg:hidden lg:justify-end">
            <Text as={"p"} className={`w-fit text-[#E5E7EB]`}>
              Filter{" "}
            </Text>
            <Box className="relative flex items-center justify-center gap-2">
              <Box
                className="h-fit w-full cursor-pointer"
                onClick={handleFilter}
              >
                <DownArrow />
              </Box>
            </Box>
            {showFilter && (
              <Box
                className={`absolute z-30 mt-[35px] flex w-[18rem] flex-col rounded-lg bg-[#FFFFFF] px-5 py-4 shadow`}
              >
                <h4>Filter</h4>

                <FilterDropdown />
              </Box>
            )}
          </Box>

          <Box className="flex w-full gap-2 lg:justify-end">
            <Text as={"p"} className={`w-fit text-[#F3F4F6]`}>
              Sort by:{" "}
            </Text>
            <Box className="relative flex items-center justify-center gap-2 font-medium">
              <Text as={"p"} className="w-fit">
                {option}
              </Text>
              <Box
                className="h-fit w-fit cursor-pointer"
                onClick={handleDropdown}
              >
                <DownArrow />
              </Box>
            </Box>
            {showDropdown && (
              <Box
                className={`absolute right-0 z-30 mt-[35px] flex w-[18rem] flex-col items-start gap-5 rounded-lg bg-white px-5 py-4 shadow-md md:right-auto`}
              >
                {options?.map((label) => (
                  <div key={label}>
                    <Checkbox
                      onChange={onChange}
                      type="checkbox"
                      label={label}
                      labelPosition="before"
                      value={label}
                      aria-label={label}
                      className="flex w-full justify-between"
                      labelClassname="text-zinc-800 text-base font-normal font-['Poppins']"
                      checked={!!option.includes(label)}
                    />
                  </div>
                ))}
              </Box>
            )}
          </Box>
        </Box>

        <Box className="flex flex-wrap gap-2 pt-4">
          {showChips.length > 0
            ? showChips.map((label) => (
                <Chips
                  handleClick={() => handleChip(label)}
                  key={label}
                  addRightIcon
                  size="lg"
                  className={`w-30 h-8 rounded-2xl bg-[#FFFFFF] capitalize text-[#654321]`}
                  variant={ChipsTypes.default}
                >
                  {label}
                </Chips>
              ))
            : null}

          {showChips.length > 0 && (
            <DefaultButton
              className={`h-8 w-[4rem] bg-transparent p-0 font-['Poppins'] text-sm font-medium text-[#D1D5DB]`}
              onClick={clearAllChips}
            >
              Clear all
            </DefaultButton>
          )}
        </Box>
      </Box>
    );
  },
);

export default SortingCard;
