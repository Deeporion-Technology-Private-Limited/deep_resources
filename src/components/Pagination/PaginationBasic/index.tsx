import React, { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils";
import Left from "../icon/Left.svg";
import Right from "../icon/Right.svg";
import { Box, Text } from "@/components";
import { ButtonSize } from "@/components/Button/type";
import { Color, Shape, Variants } from "../type";
import { FindIconUrl } from "@/utils/Constant";

const paginationContainerStyles = cva(
  "flex items-center justify-center space-x-2",
  {
    variants: {
      size: {
        [ButtonSize.Small]: "text-lg",
        [ButtonSize.Medium]: "text-xl",
        [ButtonSize.Large]: "text-3xl",
      },
    },
    defaultVariants: {
      size: ButtonSize.Medium,
    },
  }
);

const paginationButtonStyles = cva(
  "px-3 py-1  h-full w-full flex items-center justify-center",
  {
    variants: {
      shape: {
        [Shape.Rounded]: "rounded-full",
        [Shape.Square]: "rounded-none ",
      },
      variant: {
        [Variants.Text]: "",
        [Variants.Outlined]: "border border-gray-300",
        [Variants.Contained]: "bg-gray-300 text-white",
      },
      active: {
        true: "",
        false: "",
      },
      activeColor: {
        [Color.Primary]: "bg-blue-500 text-white",
        [Color.Success]: "bg-green-500 text-white",
        [Color.Danger]: "bg-red-500 text-white",
        [Color.Secondary]: "bg-gray-300 text-white",
        [Color.Brown]: "bg-[#3F271E] text-white",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      shape: Shape.Rounded,
      variant: Variants.Text,
      active: false,
      disabled: false,
    },
  }
);

export interface PaginationProps
  extends React.ComponentProps<typeof Box>,
    VariantProps<typeof paginationContainerStyles>,
    VariantProps<typeof paginationButtonStyles> {
  currentPage: number;
  onPageChange: (page: number) => void;
  customButtonSize?: string;
  totalPages: number;
  iconStyle?: string;
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      onPageChange,
      size,
      iconStyle = "size-6",
      shape,
      totalPages,
      variant,
      activeColor,
      customButtonSize,
      className,
      ...props
    },
    ref
  ) => {
    const handleClick = (page: number) => {
      if (page > 0 && page <= totalPages) {
        onPageChange(page);
      }
    };

    const getPages = () => {
      const pages = [];
      if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= 3) {
          pages.push(1, 2, 3, 4, "...", totalPages);
        } else if (currentPage >= totalPages - 2) {
          pages.push(
            1,
            "...",
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages
          );
        } else {
          pages.push(
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages
          );
        }
      }
      return pages;
    };

    return (
      <Box
        className={cn(paginationContainerStyles({ size }), className)}
        ref={ref}
        {...props}
      >
        <button
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={cn(
            paginationButtonStyles({
              shape,
              variant,
              disabled: currentPage === 1,
            })
          )}
          style={{ width: customButtonSize, height: customButtonSize }}
          data-testid="previouspage"
        >
          <img src={FindIconUrl("Left.svg")} className={iconStyle} />
        </button>

        {getPages().map((page, index) => (
          <Text key={index} as={"span"} className="">
            {typeof page === "number" ? (
              <button
                onClick={() => handleClick(page)}
                className={cn(
                  paginationButtonStyles({
                    shape,
                    variant,
                    active: currentPage === page ? true : false,
                    activeColor: currentPage === page ? activeColor : undefined,
                    disabled: typeof page === "string" ? true : false,
                  })
                )}
                style={{ width: customButtonSize, height: customButtonSize }}           
              >
                {page}
              </button>
            ) : (
              <span className="px-3">{page}</span>
            )}
          </Text>
        ))}

        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(
            paginationButtonStyles({
              shape,
              variant,
              disabled: currentPage === totalPages,
            })
          )}
          style={{ width: customButtonSize, height: customButtonSize }}
          data-testid="nextPage"
        >
          <img src={FindIconUrl("Right.svg")} className={iconStyle} />
        </button>
      </Box>
    );
  }
);

export default Pagination;