import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { ElevationShadow } from "./type";
import {Box} from "@/components";
const elevationStyles = cva(
  [
    "w-[168px]",
    "h-[93px]",
    "flex",
    "items-center",
    "justify-center",
    "rounded-md",
  ],
  {
    variants: {
      shadow: {
        [ElevationShadow.None]: "border-[#DEDEDE] border",
        [ElevationShadow.Small]: "shadow-sm border",
        [ElevationShadow.Medium]: "shadow-md border",
        [ElevationShadow.Large]: "shadow-lg border",
      },
    },
    defaultVariants: {
      shadow: ElevationShadow.Medium,
    },
  }
);

type ElevationProps = ComponentProps<"div"> & VariantProps<typeof elevationStyles> & {
  shadow?: ElevationShadow;
  children?: React.ReactNode;
  text?: String;
};

export const Elevation = forwardRef<HTMLDivElement, ElevationProps>(
  ({ shadow = ElevationShadow.Medium, text, className,children, ...props }, ref) => {

    const shadowClass = shadow !== ElevationShadow.None ? `shadow-${shadow}` : "";

    return (
      <Box
        ref={ref}
        className={cn(elevationStyles({ shadow }), shadowClass, className)}
        {...props}
      >
        {text}
        {children}
      </Box>
    );
  }
);