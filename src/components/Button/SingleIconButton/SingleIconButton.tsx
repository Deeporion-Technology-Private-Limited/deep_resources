import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonDirection } from "../type";
import { cn } from "@/utils";
import { Account} from "../ButtonImage/icon";

const IconButtonStyles = cva(
  [
    "flex",
    "items-center",
    "justify-center",
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
  account?: boolean;
  text?: string;
  backgroundColor?: string;
  className?: string;
  direction?: ButtonDirection;
  children?: React.ReactNode;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ account=false, text, backgroundColor, className,children, direction = ButtonDirection.Row, ...props }, ref) => {

    return (
      <button
        ref={ref}
        className={cn(IconButtonStyles({ direction }), backgroundColor, className)}
        {...props}
      >
        {account && <Account />}
        {text}
        {children}
      </button>
    );
  }
);
