import { forwardRef, useState, ComponentProps } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva(
  [
    "w-full",
    "border",
    "border-gray-200",
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
  color?: string;
  type?: string;
} & ComponentProps<"div"> &
  VariantProps<typeof inputStyles>;

export const SegmentControl = forwardRef<HTMLDivElement, SegmentControlProps>(
  (
    {
      className,
      suggestions,
      onSegmentChange,
      size = "medium",
      type,
      color,
      ...props
    },
    ref
  ) => {
    const [selectedSegment, setSelectedSegment] = useState(suggestions[0]);

    const handleSegmentClick = (segment: string, index: number) => {
      if (type === "toggle" && index === suggestions.length - 1) {
        return;
      }
      setSelectedSegment(segment);
      if (onSegmentChange) {
        onSegmentChange(segment);
      }
    };

    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div
          className={cn(
            "flex space-x-2 bg-gray-200 p-1 rounded-lg",
            inputStyles({ size })
          )}
        >
          {suggestions.map((segment, index) => (
            <button
              key={segment}
              className={cn(
                "rounded-lg transition-all duration-100 flex items-center",
                {
                  "bg-primary-500 text-white": segment === selectedSegment,
                  "bg-gray-200 text-gray-800 hover:bg-white hover:text-gray-800":
                    segment !== selectedSegment,
                  "cursor-not-allowed opacity-50":
                    type === "toggle" && index === suggestions.length - 1,
                },
                inputStyles({ size })
              )}
              onClick={() => handleSegmentClick(segment, index)}
              disabled={type === "toggle" && index === suggestions.length - 1}
            >
              {type === "default" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                >
                  <path
                    d="M16.6667 2.50001H15.8333V0.833344H14.1667V2.50001H5.83334V0.833344H4.16667V2.50001H3.33334C2.41667 2.50001 1.66667 3.25001 1.66667 4.16668V17.5C1.66667 18.4167 2.41667 19.1667 3.33334 19.1667H16.6667C17.5833 19.1667 18.3333 18.4167 18.3333 17.5V4.16668C18.3333 3.25001 17.5833 2.50001 16.6667 2.50001ZM16.6667 17.5H3.33334V8.33334H16.6667V17.5ZM16.6667 6.66668H3.33334V4.16668H16.6667V6.66668Z"
                    fill="#72787F"
                  />
                </svg>
              )}
              {segment}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

export default SegmentControl;
