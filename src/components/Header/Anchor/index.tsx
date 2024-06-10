import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";


const anchorStyles = cva([
  [
    "text-[12px]",
    "font-bold",
  ],
]);

type AnchorProps = ComponentProps<"a">;

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, ...props }, ref) => {
    return (
        <li className="px-[6px] py-[8px] list-none">
            <a ref={ref} className={cn(anchorStyles({ className }))} {...props} />
        </li>
    );
  }
);
