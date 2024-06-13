import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

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
