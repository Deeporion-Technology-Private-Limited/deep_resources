import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import React,{ ComponentProps, forwardRef } from "react";
import { Link } from "react-router-dom";


const anchorStyles = cva([["text-[12px]", "font-bold", "text-black"]]);

type AnchorProps = ComponentProps<"a"> & {
  to: string;
  state: string;
};

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, to, ...props }, ref) => {
    return (
      <li className="list-none text-nowrap px-[6px] py-[8px]">
        <Link
          to={to}
          ref={ref}
          className={cn(anchorStyles({ className }))}
          {...props}
          data-testid="link"
        />
      </li>
    );
  },
);
