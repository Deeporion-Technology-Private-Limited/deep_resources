import { useState, useEffect, forwardRef, useRef } from 'react';
import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from 'react';
import { ChartsType } from './ChartsTypes';

const chartStyle = cva(
  ["w-full"],
  {
    variants: {
      variant: {
        [ChartsType.doubleSplineAreaChart]: ""
      },
    },
    compoundVariants: [
      {
        variant: ChartsType.doubleSplineAreaChart,
        className: "text-[#DC2626]",
      },
    ],
    defaultVariants: {
      variant: ChartsType.doubleSplineAreaChart,
    },
  }
);

type ChartProps = ComponentProps<"div"> &
  VariantProps<typeof chartStyle> & {
    xAxisValues: number[],
    yAxisValues: number[],
    xAxisLabels?: string[],
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
      variant = ChartsType.doubleSplineAreaChart,
      className,
      xAxisValues = [],
      yAxisValues = [],
      xAxisLabels = [],
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
    const [width, setWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleResize = () => {
        if (containerRef.current) {
          setWidth(containerRef.current.offsetWidth);
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const height = 170;
    const maxValue = Math.max(...xAxisValues, ...yAxisValues);
    const fixedMaxValue = parseFloat(yAxisLabels[0]?.replace(/[^0-9.]/g, ''));

    const mapToFixedYAxis = (values: number[]) => values.map(val => (val / maxValue) * fixedMaxValue);

    const adjustedXAxis = mapToFixedYAxis(xAxisValues);
    const adjustedYAxis = mapToFixedYAxis(yAxisValues);

    const path1 = createCurvedPath(adjustedXAxis, fixedMaxValue, width, height);
    const path2 = createCurvedPath(adjustedYAxis, fixedMaxValue, width, height);

    return (
      <div
        ref={ref}
         data-testid="chart-container"
        className={cn(chartStyle({ variant, className }))}
        {...props}
      >
        <div className="relative w-[610px] h-[238px]">
          <svg  data-testid="chart-svg" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" style={{ overflow: 'visible' }}>
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
              {yAxisLabels.map((_label, index) => (
                index !== 0 && index !== yAxisLabels.length - 1 &&
                <line key={index} x1="0" y1={height - (index / (yAxisLabels.length - 1)) * height} x2={width} y2={height - (index / (yAxisLabels.length - 1)) * height} />
              ))}
            </g>
          </svg>
          <div style={{ position: 'absolute', top: 0, left: -70, height: '185px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {yAxisLabels.map((label, index) => (
              <div key={index} className="w-fit text-[#6B7280] text-sm">
                {label}
              </div>
            ))}
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="" height={height} viewBox={`0 0 ${width} ${height}`} fill="none" style={{ overflow: 'visible' }}>
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
              <path d={`M0,${height} ${path1} L${width},${height} Z`} fill="url(#gradient1)" />
              <path d={`M0,${height} ${path2} L${width},${height} Z`} fill="url(#gradient2)" />
              <path d={path1} stroke={lineColor1} strokeWidth="1" fill="none" />
              <path d={path2} stroke={lineColor2} strokeWidth="1" fill="none" />
              <g stroke="#E5E7EB" strokeWidth="1">
                {yAxisLabels.map((_label, index) => (
                  index !== 0 && index !== yAxisLabels.length - 1 &&
                  <line key={index} x1="0" y1={height - (index / (yAxisLabels.length - 1)) * height} x2={width} y2={height - (index / (yAxisLabels.length - 1)) * height} />
                ))}
              </g>
            </svg>
          </div>
        </div>
        <div className="w-full flex justify-between pl-4">
          {xAxisLabels.map((label, index) => (
            <div key={index} style={{ textAlign: 'center', width: `${100 / xAxisLabels.length}%`, color: '#6B7280', fontSize: '14px' }}>
              {label}
            </div>
          ))}
        </div>
        <div className="flex gap-4 text-black pl-10 pt-4">
          {region?.map((item) => (
            <div className="flex justify-center items-center gap-2" key={item}>
              <div className="h-[10px] w-[10px] rounded-full" style={{ backgroundColor: `${item === "Region1" ? lineColor1 : lineColor2}` }}></div>
              <span style={{ color: '#6B7280', fontSize: '14px' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default Chart;
