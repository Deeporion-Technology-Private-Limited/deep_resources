import React from 'react';
import { cn } from "../../../utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

import "./circularLoader.css";
import { Box } from "../../Layout";

const circularLoadertyles = cva(["flex", "items-center"]);

type CircularLoaderProps = ComponentProps<"div"> &
  VariantProps<typeof circularLoadertyles> & {
    border?: string;
    borderTop?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
    animation?: string;
  };

const CircularLoader = forwardRef<HTMLDivElement, CircularLoaderProps>(
  (
    {
      className,
      border = "8px solid #f3f3f3",
      borderTop = "8px solid blue",
      borderRadius = "50%",
      width = "60px",
      height = "60px",
      animation = "spin 2s linear infinite",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(circularLoadertyles(), className)}
        {...props}
        data-testid="circularLoader"
      >
        <div
          style={{
            border,
            borderTop,
            borderRadius,
            width,
            height,
            animation,
          }}
        />
        {children}
      </Box>
    );
  }
);

CircularLoader.displayName = "CircularLoader";

export { CircularLoader };
