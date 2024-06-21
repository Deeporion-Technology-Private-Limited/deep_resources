import { forwardRef, ComponentProps } from "react";
import { Box } from "@/components/Layout";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";
import { Text } from "@/components";
import { Arrow, Return, Secure } from "./Icons/icons";

type CardProps = ComponentProps<typeof Box> &
  VariantProps<typeof cardStyles> & {
    imageSrc?: string;
    brand?: string;
    description?: string;
    subTotal?: number;
    taxes?: number;
    delivery?: number;
    total?: number;
  };

const cardStyles = cva(
  "flex flex-col bg-white w-[461px] h-[512px] border border-[#CBD5E1] gap-[20px]"
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
    },
    ref
  ) => {
    const items = [
      { label: "Subtotal", value: subTotal },
      { label: "Taxes", value: taxes },
      { label: "Delivery", value: delivery },
    ];

    return (
      <Box ref={ref} className={cn(cardStyles(), className)}>
        <Box className="w-[461px] h-[78px] p-[24px_40px] gap-[10px] rounded-t-[8px] rounded-tr-[8px] border-b border-b-[#C9CDD2] bg-gradient-to-r from-[#BFA59A] via-[#BFA59A] to-[#3F271E]">
          <span className="text-xl font-bold text-white">Order Summary</span>
        </Box>
        <Box className="flex flex-col gap-[20px] h-[433px] items-center">
          <Box className="flex flex-row w-[381px] h-[64px] text-white gap-[8px] items-center p-[10px]">
            <img className="h-[44px] w-[44px]" src={imageSrc} alt="image" />
            <Box className="flex flex-col">
              <Text className="font-bold text-sm text-black">{brand}</Text>
              <Text className="font-normal text-sm text-black">
                {description}
              </Text>
            </Box>
          </Box>
          <Box className="w-[381px] h-[160px] flex flex-col justify-between">
            <Box className="flex flex-col w-[381px] h-[115px] border-b border-gray-200 justify-between">
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
            <Box className="flex flex-row w-[381px] h-[35px] items-center">
              <Text className="text-sm font-bold font-poppins">Total</Text>
              <Text className="text-sm font-bold font-poppins text-right">
                {total}
              </Text>
            </Box>
          </Box>
          <Box className="w-[381px] h-[24px] flex flex-row gap-[8px]">
            <Text className="text-sm font-bold font-poppins w-[120px]">
              Add a promo code
            </Text>
            <Arrow />
          </Box>
          <Box className="w-[381px] h-[70px]">
            <Box className="flex flex-row h-[32px] w-[360px] items-center gap-[8px]">
              <Return />
              <Text className="inline-block text-sm font-normal font-poppins text-gray-600 leading-5 text-left">
                Free 100 day return
              </Text>
            </Box>
            <Box className="flex flex-row h-[32px] w-[360px] items-center gap-[8px]">
              <Secure />
              <Text className="text-sm font-normal font-poppins text-gray-600 leading-5 text-left">
                Secure checkout with SSL data encryption
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
);

export default OrderSummary;
