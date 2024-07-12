

import { VariantProps, cva } from "class-variance-authority";
import {  forwardRef} from "react";

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

// type HProps = ComponentProps<"h1"> & VariantProps<typeof textStyles> & {
//     text: string;
//     FontSize?:string;
//     fontWeight?:string;
// };
interface HProps extends React.TextareaHTMLAttributes<HTMLHeadingElement> , VariantProps<typeof textStyles>  {
  text: string;
    FontSize?:string;
    fontWeight?:string;
}


export const Headings = forwardRef<HTMLHeadingElement, HProps>((props,ref) => {

  const { text, FontSize,fontWeight, className = '', ...rest } = props;

  return (
    <div>
    <h1 ref={ref} className={`${FontSize} ${fontWeight} ${className}`} {...rest}>
      
      {text}
    </h1>
  </div>
  )
});