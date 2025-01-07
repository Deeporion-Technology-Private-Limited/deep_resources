import React from "react";
import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonDirection } from "../../types";
import { cn } from "../../../utils";

const IconButtonStyles = cva(
  ["flex", "items-center", "justify-start", "bg-transparent", "p-2"],
  {
    variants: {
      direction: {
        [ButtonDirection.Row]: "flex-row gap-2",
        [ButtonDirection.Column]: "flex-col",
      },
    },
    defaultVariants: {
      direction: ButtonDirection.Row,
    },
  }
);

type IconButtonProps = ComponentProps<"button"> &
  VariantProps<typeof IconButtonStyles> & {
    iconUrl?: string | React.ReactNode;
    text?: string;
    backgroundColor?: string;
    className?: string;
    direction?: ButtonDirection;
    children?: React.ReactNode;
    iconStyle?: string;
  };

export const SingleIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      iconUrl,
      text,
      backgroundColor,
      className,
      children,
      iconStyle,
      direction = ButtonDirection.Row,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {iconUrl && (
          <button
            ref={ref}
            className={cn(
              IconButtonStyles({ direction }),
              backgroundColor,
              className
            )}
            {...props}
            data-testid="click-me"
          >
            {typeof iconUrl === "string" ? (
              <img className="icon-group" src={iconUrl} />
            ) : (
              iconUrl
            )}
            {text}
            {children}
          </button>
        )}
      </>
    );
  }
);
