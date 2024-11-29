import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const anchorStyles = cva([["text-[12px]", "font-bold", "text-black"]]);

type AnchorProps = ComponentProps<"a"> & {
  to: string;
  state: string;
};

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, to, ...props }, ref) => {
    return (
      <button className={cn(anchorStyles({ className }))}>
        <li className="list-none text-nowrap px-[6px] py-[8px]">
          <a href={to} ref={ref} {...props} data-testid="link" />
        </li>
      </button>
    );
  }
);
