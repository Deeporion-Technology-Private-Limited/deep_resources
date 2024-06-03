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
        className: "text-[#72787F] bg-[#FFFFFF] text-center p-2 rounded-lg border-b-2",
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
    header: string[];
    data: string[][];
  };

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ variant, size, colorscheme, className, header, data, ...props }, ref) => {
  return (
    <div
      className="overflow-x-auto"
      style={{
        borderBottom: "1px solid #CBD5E1",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "white",
        fontFamily: 'Poppins, sans-serif', 
      }}
    >
      <table className="w-full">
        <thead
          ref={ref}
          className={cn(
            headerStyles({ variant, size, colorscheme }),
            className
          )}
        >
          <tr>
            {header.map((column, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left bg-[#FFFFFF] border-b-2"
                style={{
                  whiteSpace: "nowrap",
                  textAlign: "left",
                }}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 text-left"
                  style={{ width: "auto" }}
                >
                  {column}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

TableHeader.displayName = "TableHeader";
