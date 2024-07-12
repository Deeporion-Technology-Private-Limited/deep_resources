import { Box, Text } from "@/components";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { IProductDetails, IProductSpecifications } from './type';

const productCardStyles = cva(
  "flex flex-col p-4 bg-white w-[600px] h-[fit-content] border border-[#CBD5E1] gap-[20px]",
);
const textStyles = cva(
  "font-poppins text-sm font-normal leading-[21px] text-left text-[#26282B] whitespace-pre-line"
);
const boxStyle = cva("flex flex-col gap-[8px]");

function formatKey(key: string) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, string => string.toUpperCase())
    .trim();
}

type ProductCardProps = ComponentProps<typeof Box> &
  VariantProps<typeof productCardStyles> & {
    productCode: string;
    productDetails: IProductDetails;
    productSpecifications: IProductSpecifications;
  };

export const ProductDetailCard = forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      productCode,
      productDetails,
      productSpecifications,
      className,
      ...props
    },
    ref
  ) => {
    const [showMore, setShowMore] = useState<boolean>(false);

    const specificationsArray = Object.entries(productSpecifications);
    const displayedSpecifications = showMore ? specificationsArray : specificationsArray.slice(0, 8);
  
    return (
      <Box
        ref={ref}
        className={cn(productCardStyles(), className)}
        {...props}
      >
        <Text><span className="font-semibold">Product Code: </span>{productCode}</Text>
        {Object.entries(productDetails).map(([key, value]) => (
          <Box className={boxStyle()}>
            <Text className="font-semibold">{formatKey(key)}</Text>
            <Text className={textStyles()}>{value}</Text>
          </Box>
        ))}
        <Text className="font-semibold">Product Specifications</Text>
        <Box className="grid grid-cols-2 gap-4">
          {displayedSpecifications.map(([key, value]) => (
            <Box key={key} className="flex flex-col border-b border-[#E8EBED]">
              <Text className="text-sm font-normal leading-6 text-left bg-#72787F capitalize"
                style={{ color: '#72787F' }}>{key}</Text>
              <Text className={textStyles()}>{value}</Text>
            </Box>
          ))}
        </Box>
        {specificationsArray.length > 4 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="font-poppins text-base font-semibold leading-6 text-left text-[#7D5D4F]"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        )}
      </Box>
    );
  }
);

