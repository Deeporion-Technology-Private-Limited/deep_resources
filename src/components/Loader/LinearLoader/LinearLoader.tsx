import React from 'react';
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import "./linearLoader.css";
import { cn } from "../../../utils";
import { Box } from "../../Layout";

const linearLoaderStyles = cva(["flex", "items-center"]);

type LinearLoaderProps = ComponentProps<"div"> &
  VariantProps<typeof linearLoaderStyles> & {
    value: number;
    color?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
    animationDuration: string;
  };

const LinearLoader = forwardRef<HTMLDivElement, LinearLoaderProps>(
  (
    {
      className,
      color = "blue",
      backgroundColor = "lightgray",
      height = "15px",
      animationDuration = "1s",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(linearLoaderStyles(), className)}
        {...props}
        style={{
          backgroundColor,
          height,
          width: "200px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="linear-loader-bar"
          style={{
            width: "100px",
            backgroundColor: color,
            height,
            overflow: "hidden",
            position: "absolute",
            animationName: "example",
            animationDuration,
            animationDelay: "0.5s",
            animationIterationCount: "infinite",
            animationDirection: "normal",
          }}
          data-testid="LinearLoader"
        />
        {children}
      </Box>
    );
  }
);

LinearLoader.displayName = "LinearLoader";

export { LinearLoader };
