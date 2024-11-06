import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";


const logoImageStyles = cva([[
    "w-[68px]"
]]);

type LogoImageProps ={
    logo: string;
  } & ComponentProps<"img"> & VariantProps<typeof logoImageStyles> ;

export const LogoImg = forwardRef<HTMLImageElement, LogoImageProps>(
  ({ className, logo , children, ...props }, ref) => {
    return (
      <img ref={ref} className={cn(logoImageStyles({className}))} {...props} src={logo} />
    );
  }
);
