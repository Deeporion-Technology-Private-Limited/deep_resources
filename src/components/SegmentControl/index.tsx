import { forwardRef, useState, ComponentProps } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva(
  [
    "w-full",
    "border",
    "border-gray-200",
    "p-2",
    "rounded-lg",
    "transition-all",
    "duration-100",
    "outline-none",
    "placeholder:text-gray-400",
    "placeholder:text-sm",
  ],
  {
    variants: {
      size: {
        small: "text-sm p-1",
        medium: "text-base p-2",
        large: "text-lg p-3",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

type SegmentControlProps = {
  suggestions: string[];
  onSegmentChange?: (segment: string) => void;
  size?: string;
} & ComponentProps<"div"> &
  VariantProps<typeof inputStyles>;

export const SegmentControl = forwardRef<HTMLDivElement, SegmentControlProps>(
  ({ className, suggestions, onSegmentChange, size , ...props }, ref) => {
    const [selectedSegment, setSelectedSegment] = useState(suggestions[0]);

    const handleSegmentClick = (segment: string) => {
      setSelectedSegment(segment);
      if (onSegmentChange) {
        onSegmentChange(segment);
      }
    };

    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className={cn("flex space-x-2 bg-gray-200 p-1 rounded-lg", inputStyles({ size }))}>
          {suggestions.map((segment) => (
            <button
              key={segment}
              className={cn(
                "rounded-lg transition-all duration-100",
                {
                  "bg-primary-500 text-white": segment === selectedSegment,
                  "bg-gray-200 text-gray-800": segment !== selectedSegment
                },
                inputStyles({ size })
              )}
              onClick={() => handleSegmentClick(segment)}
            >
              {segment}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

export default SegmentControl;
