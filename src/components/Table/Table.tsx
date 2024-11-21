import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

const tableStyles = cva(
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
        className:
          "text-[#72787F] bg-[#FFFFFF] text-center p-2 rounded-lg border-b-2",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type TableProps = ComponentProps<"thead"> &
  VariantProps<typeof tableStyles> & {
    data: Array<{ [key: string]: string | React.ReactNode }> | [];
    tableStyle?: string;
    tHeadStyle?: string;
    tDataStyle?: string;
  };

export const Table = forwardRef<HTMLTableSectionElement, TableProps>(
  (
    {
      variant,
      size,
      colorscheme,
      className,
      data,
      tableStyle,
      tDataStyle,
      tHeadStyle,
    },
    ref
  ) => {
    const headers = Object.keys(data[0]);

    return (
      <div
        className="overflow-x-auto"
        style={{
          borderBottom: "1px solid #CBD5E1",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "white",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <table
          className={cn(
            `h-full w-full font-[Poppins] font-[14px] text-[#333333]`,
            tableStyle
          )}
        >
          <thead
            ref={ref}
            className={cn(
              tableStyles({ variant, size, colorscheme }),
              className
            )}
          >
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={cn(
                    "h-fit border-b-2 px-4 py-2 text-center capitalize",
                    tHeadStyle
                  )}
                  style={{
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr key={rowIndex} className="h-[4.25rem] py-4">
                {headers?.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className={cn(
                      `h-full border-b border-[#E5E7EB] px-4 py-2 text-center`,
                      tDataStyle
                    )}
                    style={{ width: "auto" }}
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);

Table.displayName = "Table";
