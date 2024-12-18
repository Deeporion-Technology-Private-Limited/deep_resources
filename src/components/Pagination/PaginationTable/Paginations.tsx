import React, { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonSize, Shape, Variants } from "../../types";
import { cn } from "../../../utils";
import { FindIconUrl } from "../../../utils/Constant";
import { Box } from "../../Layout";
// import { FindIconUrl } from "@/utils/Constant";

const paginationStyles = cva("flex items-center justify-between w-full", {
  variants: {
    size: {
      [ButtonSize.Small]: "text-lg",
      [ButtonSize.Medium]: "text-2xl",
      [ButtonSize.Large]: "text-3xl",
    },
  },
  defaultVariants: {
    size: ButtonSize.Medium,
  },
});

const buttonStyles = cva("px-3 py-1 h-full w-full flex items-center justify-center", {
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed shado",
      false: "",
    },
    variant: {
      [Variants.Text]: "",
      [Variants.Outlined]: "border border-gray-300 rounded",
      [Variants.Contained]: "bg-gray-300 text-white rounded",
    },
    shape: {
      [Shape.Rounded]: "rounded-full",
      [Shape.Square]: "rounded-none",
    },
  },
  defaultVariants: {
    disabled: false,
    variant: Variants.Text,
    shape: Shape.Rounded,
  },
});

export interface PaginationPropsTable
  extends React.ComponentProps<typeof Box>,
    VariantProps<typeof paginationStyles>,
    VariantProps<typeof buttonStyles> {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  customButtonSize?: string;
  iconStyle?:string;
  className?:string;
  onPageChange: (page: number) => void;
}

export const Paginations = forwardRef<HTMLDivElement, PaginationPropsTable>(
  (
    {
      totalItems,
      itemsPerPage,
      currentPage,
      onPageChange,
      customButtonSize,
      iconStyle="size-6",
      size,
      variant,
      shape,
      className,
      ...props
    },
    ref
  ) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = (page: number) => {
      onPageChange(page);
    };

    return (
      <Box
        className={cn(paginationStyles({ size }), className)}
        ref={ref}
        {...props}
      >
        <Box>
          <button
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
            className={cn(
              buttonStyles({ shape, variant, disabled: currentPage === 1 })
            )}
            style={{ width:  customButtonSize, height:  customButtonSize }}
            data-testid="previousPage"
          >
            <img src={FindIconUrl("Left.svg")}  className={iconStyle}/>
          </button>
        </Box>
        <Box>
          <span>
            {currentPage * itemsPerPage - itemsPerPage + 1}-
            {currentPage * itemsPerPage} of {totalItems}
          </span>
        </Box>
        <Box>
          <button
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={cn(
              buttonStyles({
                shape,
                variant,
                disabled: currentPage === totalPages,
              })
            )}
            style={{ width:  customButtonSize, height:  customButtonSize }}
            data-testid="nextPage"
          >
            <img src={FindIconUrl("Right.svg")} className={iconStyle} />
          </button>
        </Box>
      </Box>
    );
  }
);

