import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Box} from "..";


const cardStyles = cva(
  [
    "border",
    "rounded-lg",
    "p-0",
    "shadow-md",
    "overflow-hidden",
    "h-[22rem]",
    "w-[20rem]",
  ],
  {
    variants: {
      size: {
        sm: "p-2 p",
        md: "p-1",
        lg: "p-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type CardProps = { title?: string; imageSrc?: string ;imageClass?:string; price: string; description: string;} & ComponentProps<"div"> &
  VariantProps<typeof cardStyles>;
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ size, className, children, title,...props }, ref) => {
    return (
      <Box ref={ref} className={cn(cardStyles({ size, className }))} {...props}>
        {children}
      </Box>
    );
  }
);

export default Card;
