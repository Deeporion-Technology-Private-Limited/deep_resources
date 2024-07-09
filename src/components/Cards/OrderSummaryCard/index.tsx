import { forwardRef, ComponentProps } from "react";
import { Box } from "@/components/Layout";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";
import { Button, Text } from "@/components";
import { Arrow, Return, Secure } from "./Icons/icons";
import { FindIconUrl } from "@/utils/Constant";

type CardProps = ComponentProps<typeof Box> &
  VariantProps<typeof cardStyles> & {
    imageSrc?: string;
    brand?: string;
    description?: string;
    subTotal?: string;
    taxes?: string;
    delivery?: string;
    total?: string;
    handleClick?: () => void;
    buttonText?: string;
  };

const cardStyles = cva(
  "flex flex-col bg-white border border-[#CBD5E1] gap-[5]"
);

const OrderSummary = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      brand,
      imageSrc,
      description,
      subTotal,
      taxes,
      delivery,
      total,
      handleClick,
      buttonText = "checkout",
    },
    ref
  ) => {
    const items = [
      { label: "Subtotal", value: subTotal },
      { label: "Taxes", value: taxes },
      { label: "Delivery", value: delivery },
    ];

    const icon = FindIconUrl("checkoutCart.svg");

    return (
      <Box ref={ref} className={cn(cardStyles(), className)}>
        <Box className="p-6 bg-gradient-to-r from-[#BFA59A] via-[#BFA59A] to-[#3F271E] rounded-t-md border-b border-b-[#C9CDD2]">
          <span className="text-xl font-bold text-white">Order Summary</span>
        </Box>
        <Box className="flex flex-col gap-5 p-6">
          <Box className="flex items-center gap-3">
            {imageSrc && (
              <img className="h-11 w-11" src={imageSrc} alt="product image" />
            )}
            <Box className="flex flex-col">
              <Text className="font-bold text-sm text-black">{brand}</Text>
              <Text className="font-normal text-sm text-black">
                {description}
              </Text>
            </Box>
          </Box>
          <Box className="flex flex-col border-b border-gray-200 pb-4">
            {items.map((item, index) => (
              <Box
                key={index}
                className="flex flex-row h-[29px] justify-between"
              >
                <Text className="text-sm font-normal font-poppins text-gray-800 text-left">
                  {item.label}
                </Text>
                <Text className="text-sm font-normal font-poppins text-gray-800 text-right">
                  {item.value}
                </Text>
              </Box>
            ))}
          </Box>
          <Box className="flex justify-between text-sm font-bold">
            <Text>Total</Text>
            <Text className="text-right">{total}</Text>
          </Box>
          <Box className="flex items-center gap-2 cursor-pointer">
            <Text className="text-sm font-bold">Add a promo code</Text>
            <Arrow />
          </Box>
          <Box className="flex flex-col gap-2">
            <Box className="flex items-center gap-2">
              <Return />
              <Text className="text-sm text-gray-600">Free 100 day return</Text>
            </Box>
            <Box className="flex items-center gap-2">
              <Secure />
              <Text className="text-sm text-gray-600">
                Secure checkout with SSL data encryption
              </Text>
            </Box>
          </Box>
          <Button iconUrl={icon} onClick={handleClick}>
            {buttonText}
          </Button>
        </Box>
      </Box>
    );
  }
);

export default OrderSummary;
