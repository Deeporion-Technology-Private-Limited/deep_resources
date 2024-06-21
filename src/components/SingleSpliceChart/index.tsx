import { useState, useEffect, forwardRef } from 'react';
import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from 'react';
import { singleSpliceType } from './singleSpliceType';

const singleSplineStyle = cva(
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
        [singleSpliceType.SingleLineChart]: "",
      }},
    compoundVariants: [
      {
        variant: singleSpliceType.SingleLineChart,
        className: "text-[#DC2626] ",
      },
    ],
    defaultVariants: {
      variant:singleSpliceType.SingleLineChart,
    },
  }
);

type SingleLineChartProps = ComponentProps<"div"> &
  VariantProps<typeof singleSplineStyle> & {
    xAxisValues?: number[],
    xAxisLabels?: string[],
    yAxisLabels?: string[],
    region?: string,
    curveLineColor?: string,
    gradientStartColor?: string,
    gradientEndColor?: string,
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

export const SingleLineChart = forwardRef<HTMLDivElement, SingleLineChartProps>(
  (
    {
      variant = singleSpliceType.SingleLineChart,
      className,
      xAxisValues = [],
      xAxisLabels = [],
      yAxisLabels = [],
      region,
      curveLineColor = "#6366F1",
      gradientStartColor = "rgba(99, 102, 241, 0.3)",
      gradientEndColor = "rgba(99, 102, 241, 0)",
      ...props
    },
    ref
  ) => {
    const [maxValue, setMaxValue] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const maxVal = Math.max(...xAxisValues);
      setMaxValue(maxVal);
      const calculatedWidth = xAxisLabels.length * 90;
      setWidth(calculatedWidth);
    }, [xAxisValues, xAxisLabels]);

    const height = 170;
    const path1 = createCurvedPath(xAxisValues, maxValue, width, height);

    return (
      <div
        ref={ref}
        className={cn(singleSplineStyle({ variant, className }))}
        {...props}
      >
        <div className="relative w-[610px] h-[238px]">
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="0.5">
                <stop offset="0%" stopColor={gradientStartColor} />
                <stop offset="100%" stopColor={gradientEndColor} />
              </linearGradient>
            </defs>
            <path
              d={`M0,${height} ${path1} L${width},${height} Z`}
              fill="url(#gradient1)"
            />
            <path d={path1} stroke={curveLineColor} strokeWidth="1" fill="none" />
            <g stroke="#E5E7EB" strokeWidth="1">
              {yAxisLabels.map((_label, index) => (
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
            {xAxisLabels.map((label, index) => (
              <div key={index} style={{ textAlign: 'center', width: `${100 / xAxisLabels.length}%`, color: '#6B7280', fontSize: '14px' }}>
                {label}
              </div>
            ))}
          </div>
          <div className='flex gap-4 text-black absolute bottom-[-20px]'>
            {region}
          </div>
        </div>
      </div>
    );
  }
);

export default SingleLineChart;
