import { Box, Button, Checkbox, IconButton, Input, Text } from "@/components";
import { Table } from "@/components/Table/Table";
import { ComponentProps, forwardRef, useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import SearchImage from "@/images/InputIcons/SearchImage";
import { InputType, InputVariant } from "@/components/Input/type";
import filter from "./icon/filter.svg";
import Pagination from "@/components/Pagination/PaginationBasic";
import { Color, Shape, Variants } from "@/components/Pagination/type";
import { cn } from "@/utils";


const OrderStyle = cva([
    "w-full flex flex-col gap-5"
])

type OrdersProps = ComponentProps<typeof Box> &
  VariantProps<typeof OrderStyle> & {
    data: [] | any;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    search?: string;
    onCheckBoxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSorting: () => void,
    sortingArray: string[],
  };

export const Profile = ({ data }: any) => {
  return (
    <Box className="w-full h-full flex items-center justify-center gap-2">
      <img
        className="w-10 h-10 rounded-sm"
        src={
          data?.profileUrl ??
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlie4MsQ9pJSSKY7DoEpxn3uBAq-rT7in1sA&s"
        }
        alt={data.agentName}
      />
      <Text as="p" className="text-[14px]">
        {data.agentName}
      </Text>
    </Box>
  );
};
const Order = forwardRef<HTMLDivElement, OrdersProps>(
  ({ data,search="", handleChange, handleSorting, sortingArray ,onCheckBoxChange, className, ...props }, ref) => {
    const [page, setPage] = useState(1);
    const [showDropdown, setShowDropdown] = useState(false);
    function change(page: number) {
      setPage(page);
    }

    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }

    return (
      <Box
        ref={ref}
        className={cn(
          OrderStyle(),
          className
        )}
        {...props}
      >
        <Box className="p-[24px_12px] flex w-full gap-3 rounded-[8px] relative">
          <Box className="w-full">
            <Input
              name="Search"
              className="round-full w-full"
              value={search}
              onChange={handleChange}
              type={InputType.SearchIcon}
              search={<SearchImage />}
              placeholder={"Search"}
              variant={InputVariant.Outlined}
            ></Input>
          </Box>
          <IconButton iconUrl={filter} onClick={handleDropdown} />

          {showDropdown &&
                <Box className="flex z-10 flex-col w-[16rem] px-5 py-4 rounded-lg bg-slate-50 shadow absolute mt-[45px] right-0">
                  {sortingArray.map((label) =>
                    <Checkbox
                      key={label}
                      onChange={onCheckBoxChange}
                      type="checkbox" label={label} labelPosition="before" value={label} aria-label={label}
                      labelClassname="text-zinc-800 text-base font-normal font-['Poppins']" />)}
                  <Box className="flex w-full h-full pt-5 border-t-2 px-2 gap-2 ">
                    <Button
                      className=" h-fit bg-transparent text-[#3F271E]"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      Clear all
                    </Button>
                    <Button
                      hover
                      onClick={handleSorting}
                    >
                      Apply
                    </Button>
                  </Box>
                </Box>
              }
        </Box>
        <Box className="flex flex-col">
          <Table
            className="text-black w-full py-2"
            tHeadStyle="w-fit py-0 h-16"
            tDataStyle=" text-[14px]"
            data={data}
          ></Table>
          <Box className="w-full flex justify-center py-5">
            <Pagination
              totalPages={10}
              currentPage={page}
              onPageChange={change}
              variant={Variants.Outlined}
              activeColor={Color.Brown}
              className="w-20"
              customButtonSize="2rem"
              iconStyle="size-2  max-w-none"
              shape={Shape.Square}
            />
          </Box>
        </Box>
      </Box>
    );
  }
);

export default Order;
