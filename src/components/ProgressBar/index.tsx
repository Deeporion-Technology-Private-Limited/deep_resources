import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils";
import { IProgressBar, variants } from "./type";
import { Box } from "..";

const progressBarStyles = cva(" ", {
  variants: {
    variant: {
      linear: "w-full h-5 bg-gray-200 w-[80rem] rounded-xl overflow-hidden",
      circular: "flex items-center justify-center rounded-xl",
    },
  },
});

type ProgressBarProps = ComponentProps<"div"> &
  VariantProps<typeof progressBarStyles> &
  IProgressBar;

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      variant,
      progress,
      textColor = "3498db",
      size = 100,
      bgColor,
      rotate,
      strokeWidth = 10,
      textFont = "20px",
      className,
      middleText,
      ...props
    },
    ref
  ) => {
    const validProgress = Math.min(100, Math.max(0, progress));
    if (variant === variants.linear) {
      return (
        <Box
          className={cn(progressBarStyles({ variant }), className)}
          ref={ref}
          {...props}
        >
          <Box
            className="h-full flex items-center justify-end pr-2 bg-blue-400 rounded-xl"
            style={{
              width: `${validProgress}%`,
              backgroundColor: bgColor,
              color: textColor,
            }}
          >
            {middleText ? <>{validProgress + "%"}</> : null}
          </Box>
        </Box>
      );
    } else {
      const radius = (size - strokeWidth) / 2;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (validProgress / 100) * circumference;

      return (
        <Box
          className={cn(progressBarStyles({ variant }), className)}
          ref={ref}
          {...props}
        >
          <svg
            width={size}
            height={size}
            className="relative"
            viewBox={`0 0 ${size} ${size}`}
          >
            <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
              <circle
                stroke="#e6e6e6"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
              />
              <circle
                stroke={bgColor}
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                style={{ transition: "stroke-dashoffset 0.35s" }}
              />
            </g>
            {middleText && (
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize={textFont}
                fill={textColor}
                style={{ transform: "rotate(-90)", transformOrigin: "center" }}
              >
                {`${validProgress}%`}
              </text>
            )}
          </svg>
        </Box>
      );
    }
  }
);

export default ProgressBar;
