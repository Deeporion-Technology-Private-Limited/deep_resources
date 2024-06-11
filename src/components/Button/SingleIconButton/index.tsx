import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonDirection } from "../type";
import { cn } from "@/utils";

const IconButtonStyles = cva(
  [
    "flex",
    "items-center",
    "justify-start",
    "bg-transparent",
    "p-[10px]",
  ],
  {
    variants: {
      direction: {
        [ButtonDirection.Row]: "flex-row gap-2",
        [ButtonDirection.Column]: "flex-col",
      },
    },
    defaultVariants: {
      direction : ButtonDirection.Row,
    },
  }
);

type IconButtonProps = ComponentProps<"button"> & VariantProps<typeof IconButtonStyles> & {
  iconUrl?: string;
  text?: string;
  backgroundColor?: string;
  className?: string;
  direction?: ButtonDirection;
  children?: React.ReactNode;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ iconUrl, text, backgroundColor, className,children, direction = ButtonDirection.Row, ...props }, ref) => {

    return (
      <button
        ref={ref}
        className={cn(IconButtonStyles({ direction }), backgroundColor, className)}
        {...props}
      >
        {iconUrl && <img src={iconUrl} alt="Icon"  />}
        {text}
        {children}
      </button>
    );
  }
);
