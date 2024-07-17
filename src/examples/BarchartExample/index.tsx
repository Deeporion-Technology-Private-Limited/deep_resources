import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { BarChart, Box, Text } from "@/components";
import { Bartype } from "@/components/types";
import { cn } from "@/utils";
import { Grow } from "./icon/Icon";

const chartStyle = cva(["relative flex flex-col gap-[10px]"]);
interface Barprop
  extends ComponentProps<typeof Box>,
    VariantProps<typeof chartStyle> {
  barData: Bartype[];
  svgWidth: number;
  svgHeight: number;
  dataYRangeMax: number;
  dataYRangeMin?: number;
  peddingBetweenBar?: number;
}

export const BarChartExp = forwardRef<HTMLDivElement, Barprop>(
  (
    {
      svgWidth,
      svgHeight,
      dataYRangeMax,
      dataYRangeMin = 0,
      peddingBetweenBar = 10,
      barData,
      ...props
    },
    ref
  ) => {
    return (
      <Box ref={ref} className={cn(chartStyle())} {...props}>
        <Box className="ml-4">
          <Text className="font-bold text-[14px] text-[#72787F]">Orders</Text>
          <Text as="h1" className="text-[26px] font-bold capitalize">
            Total: 92
          </Text>
        </Box>
        <Box className="relative">
          <Box className="flex items-center gap-[10px] ml-4 absolute">
            <Grow />
            <Text as="h1" className="text-[16px] font-bold text-[#059669]">
              +23.32%
            </Text>
          </Box>
          <BarChart
            className=""
            data={barData}
            svgW={svgWidth}
            svgH={svgHeight}
            YRangeMax={dataYRangeMax}
            PeddingBwtBar={peddingBetweenBar}
            YRangeMin={dataYRangeMin}
          />
        </Box>
        <Box className="flex gap-4 ml-4">
          <Box className="flex items-center gap-2">
            <div className="w-[14px] h-[12px] bg-[#5E463B] rounded-full"></div>
            <Text className="text-[12px]">Pending Orders : 52</Text>
          </Box>
          <Box className="flex items-center gap-2">
            <Box className="w-[14px] h-[12px] bg-[#34D399] rounded-full"></Box>
            <Text className="text-[12px]">Completed Orders : 45</Text>
          </Box>
        </Box>
      </Box>
    );
  }
);
