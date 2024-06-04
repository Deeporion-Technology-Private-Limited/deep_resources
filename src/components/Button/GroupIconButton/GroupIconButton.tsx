import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonDirection } from "../type";
import { cn } from "@/utils";
import { Cart, Favourite, Notification, Setting } from "../ButtonImage/icon";

const GroupButtonStyles = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "bg-transparent",
  ],
  {
    variants: {
      direction: {
        [ButtonDirection.Row]: "flex-row gap-2",
        [ButtonDirection.Column]: "flex-col gap-2",
      },
    },
    defaultVariants: {
      direction: ButtonDirection.Row,
    },
  }
);

type GroupButtonProps = ComponentProps<"div"> & VariantProps<typeof GroupButtonStyles> & {
  cart?: boolean;
  setting?: boolean;
  favourite?: boolean;
  notification?: boolean;
  className?: string;
  direction?: ButtonDirection;
  children?: React.ReactNode;
};

export const GroupIconButton = forwardRef<HTMLDivElement, GroupButtonProps>(
  ({ cart=false,setting=false,favourite=false,notification=false,className, children, direction = ButtonDirection.Row, ...props }, ref) => {

    return (
      <div
        ref={ref}
        className={cn(GroupButtonStyles({ direction }), className)}
        {...props}
      >
        {cart && <Cart />}
        {setting && <Setting />}
        {favourite && <Favourite />}
        {notification && <Notification />}
        {children}
      </div>
    );
  }
);