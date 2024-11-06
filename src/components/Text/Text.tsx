import React from "react";
import{ forwardRef, ElementType, ComponentPropsWithoutRef, PropsWithoutRef, ForwardRefRenderFunction } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils";

const textStyles = cva("w-full", {
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

type TextStyleProps = VariantProps<typeof textStyles>;

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends ElementType,
  Props = {}
> = PropsWithoutRef<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicRef<C extends ElementType> = React.ComponentPropsWithRef<C>["ref"];

type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type TextProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  TextStyleProps
>;

type TextComponent = <C extends ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement | null;

const TextImpl: ForwardRefRenderFunction<
  HTMLSpanElement,
  TextProps<ElementType>
> = (
  { as, align, size, emphasis, italic, underline, weight, className, ...props },
  ref
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
        })
      )}
      {...props}
    />
  );
};

export const Text = forwardRef(TextImpl) as TextComponent;

