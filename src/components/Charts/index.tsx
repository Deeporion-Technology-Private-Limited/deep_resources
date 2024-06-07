import { useState, useEffect, forwardRef } from 'react';
import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";

const chartStyle = cva(
  [
    "relative",
    "w-full",
    "h-[240px]",
    "p-4",
    "rounded",
    "gap-2",
    "bg-white",
  ],
  {
    variants: {
      variant: {
        Double_spline_area_chart: "",
        BarChart: "",
        PieChart: "",
        Table_bar_chart: "",
        Basic_area_Chart: "",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-black",
      },
    },
    compoundVariants: [
      {
        variant: "Double_spline_area_chart",
        colorscheme: "primary",
        className: "text-[#DC2626] ",
      },
    ],
    defaultVariants: {
      variant: "Double_spline_area_chart",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ChartProps = ComponentProps<"div"> &
  VariantProps<typeof chartStyle> & { 
    value1?: number[], 
    value2?: number[], 
    days?: string[], 
    yAxisLabels?: string[], 
    region?: string[],
    lineColor1?: string,
    lineColor2?: string,
    gradientColor1Start?: string,
    gradientColor1End?: string,
    gradientColor2Start?: string,
    gradientColor2End?: string
  };

const createCurvedPath = (values: number[], maxValue: number, width: number, height: number) => {
  const step = width / (values.length - 1);
  const points = values.map((val, index) => `${index * step},${height - (val / maxValue) * height}`);
  const pathData = points.reduce((acc, point, i, arr) => {
    if (i === 0) {
      return `M${point}`;
    }
    const [prevX, prevY] = arr[i - 1].split(",").map(parseFloat);
    const [x, y] = point.split(",").map(parseFloat);
    const cpx1 = prevX + (x - prevX) * 0.25;
    const cpy1 = prevY;
    const cpx2 = prevX + (x - prevX) * 0.75;
    const cpy2 = y;
    return `${acc} C${cpx1},${cpy1} ${cpx2},${cpy2} ${x},${y}`;
  }, "");
  return pathData;
};

export const Chart = forwardRef<HTMLDivElement, ChartProps>(
  (
    {
      variant = "Double_spline_area_chart",
      size,
      colorscheme,
      className,
      value1 = [],
      value2 = [],
      days = [],
      yAxisLabels = [],
      region = [],
      lineColor1 = "#6366F1",
      lineColor2 = "#EC4899",
      gradientColor1Start = "rgba(99, 102, 241, 0.3)",
      gradientColor1End = "rgba(99, 102, 241, 0)",
      gradientColor2Start = "rgba(236, 72, 153, 0.3)",
      gradientColor2End = "rgba(236, 72, 153, 0)",
      ...props
    },
    ref
  ) => {
    const [maxValue, setMaxValue] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const maxVal = Math.max(...value1, ...value2);
      setMaxValue(maxVal);
      const calculatedWidth = days.length * 90;
      setWidth(calculatedWidth);
    }, [value1, value2, days]);

    const height = 170;
    const path1 = createCurvedPath(value1, maxValue, width, height);
    const path2 = createCurvedPath(value2, maxValue, width, height);

    return (
      <div
        ref={ref}
        className={cn(chartStyle({ variant, size, colorscheme, className }))}
        {...props}
      >
        {variant === "Double_spline_area_chart" && (
          <div className="relative w-[610px] h-[238px]">
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="0.5">
                  <stop offset="0%" stopColor={gradientColor1Start} />
                  <stop offset="100%" stopColor={gradientColor1End} />
                </linearGradient>
                <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="0.5">
                  <stop offset="0%" stopColor={gradientColor2Start} />
                  <stop offset="100%" stopColor={gradientColor2End} />
                </linearGradient>
              </defs>
              <path
                d={`M0,${height} ${path1} L${width},${height} Z`}
                fill="url(#gradient1)"
              />
              <path
                d={`M0,${height} ${path2} L${width},${height} Z`}
                fill="url(#gradient2)"
              />
              <path d={path1} stroke={lineColor1} strokeWidth="1" fill="none" />
              <path d={path2} stroke={lineColor2} strokeWidth="1" fill="none" />
              <g stroke="#E5E7EB" strokeWidth="1">
                {yAxisLabels.map((label, index) => (
                  index !== 0 && index !== yAxisLabels.length - 1 &&
                  <line key={index} x1="0" y1={height - (index / (yAxisLabels.length - 1)) * height} x2={width} y2={height - (index / (yAxisLabels.length - 1)) * height} />
                ))}
              </g>
            </svg>
            <div style={{ position: 'absolute', top: 0, left: -70, height: '185px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {yAxisLabels.map((label, index) => (
                <div key={index} style={{ textAlign: 'right', width: 50, color: '#6B7280', fontSize: '14px' }}>
                  {label}
                </div>
              ))}
            </div>
            <div style={{ position: 'absolute', bottom: 30, left: 0, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              {days.map((label, index) => (
                <div key={index} style={{ textAlign: 'center', width: `${100 / days.length}%`, color: '#6B7280', fontSize: '14px' }}>
                  {label}
                </div>
              ))}
            </div>
            <div className='flex gap-4 text-black absolute bottom-[-20px]'>
              {region?.map((item) => (
                <div className={`flex justify-center items-center gap-2`} key={item}>
                  <div className={`h-[10px] w-[10px] rounded-full`} style={{ backgroundColor: `${item === "Region1" ? lineColor1 : lineColor2}` }}></div>
                  <span style={{ color: '#6B7280', fontSize: '14px' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default Chart;
