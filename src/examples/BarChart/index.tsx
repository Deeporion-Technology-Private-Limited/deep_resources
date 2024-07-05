import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { DayData } from "./barConst";

const chartStyle = cva([""]);
interface Barprop
  extends ComponentProps<"svg">,
    VariantProps<typeof chartStyle> {
      data: DayData
      svgW: number;
      svgH: number;
      dYMax: number;
    }

export const BarChart = forwardRef<HTMLDivElement, Barprop>(
  ({ svgW,svgH,dYMax,data }) => {
    const SVG_WIDTH = svgW;
  const SVG_HEIGHT = svgH;
  const x0 = 50;
  const xAxisLength = SVG_WIDTH - x0 * 2;

  const y0 = 50;
  const yAxisLength = SVG_HEIGHT - y0 * 2;

  const xAxisY = y0 + yAxisLength;

  const dataYMax = dYMax;
  const dataYMin = 0;

  const dataYRange = dataYMax - dataYMin;

  const numYTicks = 5;

  const barPlotWidth = xAxisLength / data.length;

  return (
    <svg width={SVG_WIDTH} height={SVG_HEIGHT} >
      {/* X axis */}
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
        const yValue = Math.round(dataYMax - index * (dataYRange / numYTicks));

        return (
          <g key={index}>
            <line
              x1={x0 - 25}
              y1={y}
              x2={x0 + xAxisLength}
              y2={y}
              stroke="grey"
              strokeWidth=".2"
              strokeDasharray="2,2"
            />
            <text x={x0 - 15} y={y + 5} textAnchor="end"  className="text-[12px] font-[300]">
              {yValue}
            </text>
          </g>
        );
      })}

      {data.map(([day, values], index) => {
        const x = x0 + index * barPlotWidth;

        const sidePadding = 20;

        let y = xAxisY;
        return (
          <g key={index}>
            {values.map(({ a1, color }, subIndex) => {
              const yRatio = a1 / dataYRange;
              const height = yRatio * yAxisLength;
              y -= height;

              return (
                <rect
                  key={subIndex}
                  x={x + sidePadding / 2}
                  y={y}
                  width={barPlotWidth - sidePadding}
                  height={height}
                  fill={color}
                />
              );
            })}
            <text x={x + barPlotWidth / 2} y={xAxisY + 16} textAnchor="middle" className="text-[12px] font-[300]">
              {day}
            </text>
          </g>
        );
      })}
    </svg>
  );
  }
    
);
