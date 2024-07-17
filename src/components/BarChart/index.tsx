import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Bartype } from "../types";
import { cn } from "@/utils";

const chartStyle = cva([""]);
interface Barprop
  extends ComponentProps<"svg">,
    VariantProps<typeof chartStyle> {
  data: Bartype[];
  svgW: number;
  svgH: number;
  YRangeMax: number;
  YRangeMin?: number;
  PeddingBwtBar?: number;
}

export const BarChart = forwardRef<HTMLDivElement, Barprop>(
  ({ svgW, svgH, YRangeMax, YRangeMin = 0, PeddingBwtBar = 10, data, className, ...props}) => {
    const SVG_WIDTH = svgW;
    const SVG_HEIGHT = svgH;
    const x0 = 50;
    const xAxisLength = SVG_WIDTH - x0 * 2;

    const y0 = 50;
    const yAxisLength = SVG_HEIGHT - y0 * 2;

    const xAxisY = y0 + yAxisLength;

    const dataYMax = YRangeMax;
    const dataYMin = YRangeMin;

    const dataYRange = dataYMax - dataYMin;

    const numYTicks = 5;

    const barPlotWidth = xAxisLength / data.length;

    return (
      <svg width={SVG_WIDTH} height={SVG_HEIGHT} className={cn(chartStyle(), className)} {...props}>
        <line
          x1={x0}
          y1={xAxisY}
          x2={x0 + xAxisLength}
          y2={xAxisY}
          stroke="grey"
          strokeWidth=".2"
        />
        {Array.from({ length: numYTicks }).map((_, index) => {
          const y = y0 + index * (yAxisLength / numYTicks);
          const yValue = Math.round(
            dataYMax - index * (dataYRange / numYTicks)
          );

          return (
            <g key={index}>
              <line
                x1={x0}
                y1={y}
                x2={x0 + xAxisLength}
                y2={y}
                stroke="grey"
                strokeWidth=".3"
                strokeDasharray="2,2"
              />
              <text
                x={x0 - 15}
                y={y + 5}
                textAnchor="end"
                className="text-[12px] font-[300]"
              >
                {yValue}
              </text>
            </g>
          );
        })}

        {data.map((obj, index) => {
          const x = x0 + index * barPlotWidth;

          const sidePadding = PeddingBwtBar;

          let y = xAxisY;
          return (
            <g key={index}>
              {obj.value.map((item, subIndex) => {
                const yRatio = item.a1 / dataYRange;
                const height = yRatio * yAxisLength;
                y -= height;
                const isLastItem = subIndex === obj.value.length - 1;

                return (
                  <g key={subIndex}>
                    <rect
                      x={x + sidePadding / 2}
                      y={y}
                      width={barPlotWidth - sidePadding}
                      height={height}
                      fill={item.color}
                      rx={isLastItem ? 4 : 0}
                      ry={isLastItem ? 4 : 0}
                    />
                    {isLastItem && (
                      <>
                        <rect
                          x={x + sidePadding / 2}
                          y={y + height - (item.a1 > 0 ? 2 : 0)}
                          width={barPlotWidth - sidePadding}
                          height={item.a1 > 0 ? 2 : 0}
                          fill={item.color}
                        />
                      </>
                    )}
                  </g>
                );
              })}
              <text
                x={x + barPlotWidth / 2}
                y={xAxisY + 16}
                textAnchor="middle"
                className="text-[12px] font-[300]"
              >
                {obj.day}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }
);
