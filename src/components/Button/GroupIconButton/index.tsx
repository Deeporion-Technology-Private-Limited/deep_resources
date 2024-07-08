import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonDirection } from "../type";
import { cn } from "@/utils";

const GroupButtonStyles = cva(
  ["flex", "items-center", "justify-center", "bg-transparent"],
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

type GroupButtonProps = ComponentProps<"div"> &
  VariantProps<typeof GroupButtonStyles> & {
    iconUrl?: string;
    className?: string;
    direction?: ButtonDirection;
    children?: React.ReactNode;
  };

export const GroupIconButton = forwardRef<HTMLDivElement, GroupButtonProps>(
  (
    { iconUrl, className, children, direction = ButtonDirection.Row, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(GroupButtonStyles({ direction }), className)}
        {...props}
        data-testid="groupicon">
        {children}
      </div>
    );
  }
);
