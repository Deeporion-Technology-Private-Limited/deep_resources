import { cn } from "@/utils";
import { forwardRef, useState } from "react";
import { ITabsProps, Tabstyles } from "./TabData";
import { Box } from "../Layout";


export const Tabs = forwardRef<HTMLDivElement, ITabsProps>(
  ({ tabs, className }, ref) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    return (
      <Box className={cn(Tabstyles(), className)} ref={ref}>
        <Box className="flex h-full w-[100vw] justify-center overflow-x-auto pb-4">
          {tabs?.map((tab, index) => (
            <button
              key={index}
              className={`text-md h-full w-full text-nowrap rounded-none bg-transparent px-4 py-2 font-medium ${
                activeTabIndex === index
                ? `border-b-2 border-b-[#654321] text-[#654321]`
                : `border-b-2 border-b-[#f5f5f5] text-[#cccccc]`
                
              }`}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab?.label}
            </button>
          ))}
        </Box>
        <Box className="h-full w-full p-5">{tabs[activeTabIndex].content}</Box>
      </Box>
    );
  },
);
