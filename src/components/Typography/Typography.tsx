import { cn } from "@/utils";
import React from "react";

type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline";

type ITypographyProps<V extends React.ElementType = "p"> = {
  variant?: TypographyVariants;
  className?: string;
  as?: V;
  children: React.ReactNode;
} & React.ComponentProps<V>;

const variantClasses: Record<TypographyVariants, string> = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-medium",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  body1: "text-base",
  body2: "text-sm",
  caption: "text-xs text-gray-500",
  subtitle1: "text-lg font-normal text-gray-700",
  subtitle2: "text-base font-medium text-gray-600",
  overline: "text-xs uppercase font-bold tracking-widest text-gray-500",
};

export const Typography = React.forwardRef(
  <V extends React.ElementType = "p">({
    variant = "body1",
    className = "",
    as,
    children,
    ...rest
  }: ITypographyProps<V>) => {
    const Component = as || "p";
    const variantClass = variantClasses[variant as TypographyVariants];

    return (
      <Component className={cn(variantClass, className)} {...rest}>
        {children}
      </Component>
    );
  }
);
