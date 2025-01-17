import React from "react";
import{ forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ForwardRefExoticComponent} from "react";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../../utils/types";
import { cn } from "../../utils";

const textStyles = cva("w-full font-['Poppins']", {
  variants: {
    emphasis: {
      low: "text-gray-600 font-light",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
  },
});

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof textStyles>
>;

// type TextComponent = <C extends React.ElementType = "span">(
//   props: TextProps<C>
// ) => React.ReactElement | null;

export const Text: ForwardRefExoticComponent<TextProps<any>> = forwardRef(
  <C extends React.ElementType>(
    {
      as,
      align,
      size,
      emphasis,
      italic,
      underline,
      weight,
      className,
      ...props
    }: TextProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || "span";

    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({
            size,
            weight,
            emphasis,
            italic,
            underline,
            align,
            className,
          }),
        )}
        {...props}
      />
    );
  },
);
