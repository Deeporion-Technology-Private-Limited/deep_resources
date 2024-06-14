import React, { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils";
import Left from "../icon/Left.svg";
import Right from "../icon/Right.svg";
import { Box } from "@/components";
import { ButtonSize } from "@/components/Button/type";
import { Shape, Variants } from "../type";

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

export interface PaginationProps
  extends React.ComponentProps<typeof Box>,
    VariantProps<typeof paginationStyles>,
    VariantProps<typeof buttonStyles> {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  customButtonSize?: string;
  iconStyle?:string;
  onPageChange: (page: number) => void;
}

const Paginations = forwardRef<HTMLDivElement, PaginationProps>(
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
          >
            <img src={Left}  className={iconStyle}/>
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
          >
            <img src={Right} className={iconStyle} />
          </button>
        </Box>
      </Box>
    );
  }
);

export default Paginations;
