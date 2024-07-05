import { forwardRef, useState } from "react";
import { Box } from "../Layout";
import { TabsProps, Tabstyles } from "./data";
import { cn } from "@/utils";

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ tabs, className }, ref) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    return (
      <Box className={cn(Tabstyles(), className)} ref={ref}>
        <Box className="flex space-x-4 border-b ">
          {tabs?.map((tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 text-md font-medium  w-1/${tabs?.length}  ${
                activeTabIndex === index
                  ? "border-b-4 border-[#BFA59A] text-[#26282B]"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab?.label}
            </button>
          ))}
        </Box>
        <Box className="p-4 ">{tabs[activeTabIndex].content}</Box>
      </Box>
    );
  }
);
export default Tabs;
