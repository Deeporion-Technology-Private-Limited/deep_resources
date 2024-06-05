import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import {Box} from "@/components"

const IconsListStyle = cva(["flex","justify-center", "items-center"]);

type IconsListProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof IconsListStyle>;

export const IconsList = forwardRef<HTMLDivElement, IconsListProps>(
  ({ className, children, ...props }, ref) => {
    return (
        <Box
          ref={ref}
          className={cn(IconsListStyle({className }))}
          {...props}
        >
          {children}
      </Box>
    );
  }
);
