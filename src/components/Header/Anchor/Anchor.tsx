import { cva } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { cn } from "../../../utils";

const anchorStyles = cva([["text-[12px]", "font-bold"]]);

type AnchorProps = ComponentProps<"a">;

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, ...props }, ref) => {
    return (
      <li className="px-[6px] py-[8px] list-none">
        <a
          ref={ref}
          className={cn(anchorStyles({ className }))}
          {...props}
          data-testid="anchor"
        />
      </li>
    );
  }
);
