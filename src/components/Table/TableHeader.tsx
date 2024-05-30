import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const headerStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",

  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
        custom: "",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "w-[110px] text-[#72787F] bg-[#FFFFFF] text-center p-16 rounded-lg border-2",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className: "text-[#72787F] bg-[#FFFFFF] text-center p-12 rounded-lg border-2",
      },
      {
        variant: "ghost",
        className: "text-[#72787F] bg-[#FFFFFF] text-center p-16 rounded-lg border-2",
      },
      {
        variant: "custom",
        className: "text-[#72787F] bg-[#FFFFFF] text-center p-16 rounded-lg border-2",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type TableHeaderProps = ComponentProps<"thead"> &
  VariantProps<typeof headerStyles> & {
    children: string[];
  };

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ variant, size, colorscheme, className, children, ...props }, ref) => {
  return (
    <div
      style={{
        borderBottom: "1px solid #CBD5E1",
        borderRadius: "8px 8px 0px 0px",
        overflow: "hidden",
      }}
    >

    <thead
      ref={ref}
      className={cn(headerStyles({ variant, size, colorscheme }), className)}
      {...props}
    >
      <tr>
        {children.map((item, index) => (
          <th key={index} className="w-[110px] h-[34px] size-[12px]">
            {item}
          </th>
        ))}
      </tr>
    </thead>
    </div>
  );
});

TableHeader.displayName = "TableHeader";
