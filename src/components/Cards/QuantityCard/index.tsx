import React, { useState, forwardRef, ComponentProps } from "react";
import { Box } from "@/components/Layout";
import { Text } from "@/components/Text";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";
import { Button } from "@/components/Button/DefaultButton";
import close from "../icons/close.svg";
import exchange from "../icons/image_ (1).svg";
import delivery from "../icons/image_.svg";
import { Checkbox } from "@/components/Checkbox";

type CardProps = ComponentProps<typeof Box> &
  VariantProps<typeof cardStyles> & {
    imageSrc?: string;
    brand?: string;
    name?: string;
    price?: number;
    children?: React.ReactNode;
    imageStyle?: string;
    sizeOptions?: string[];
    quantityOptions?: number[];
    returnPolicy?: string;
    deliveryText?: string;
    handleClose?: () => void;
    checked?: boolean;
    iconStyle?: string;
    handleClicked?: () => void;
    isReturn?: boolean;
    isQuantity?: boolean;
  };

const cardStyles = cva(
  "max-w-full sm:max-w-[60rem] rounded overflow-hidden shadow-lg flex flex-col sm:flex-row relative"
);

const QuantityCard = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      imageSrc,
      brand,
      name,
      price,
      className,
      imageStyle = "w-full h-full object-cover",
      sizeOptions = ["S", "M", "L", "Xl", "2Xl", "3Xl", "4Xl", "5Xl"],
      quantityOptions = [1, 2, 3, 4],
      returnPolicy = "14 days return available",
      deliveryText = "Delivery by 7 June 2024",
      handleClose,
      checked,
      iconStyle = "size-8",
      children,
      handleClicked,
      isReturn = false,
      isQuantity = false,
    },
    ref
  ) => {
    const [size, setSize] = useState(sizeOptions[0]);
    const [quantity, setQuantity] = useState(quantityOptions[0]);

    return (
      <Box ref={ref} className={cn(cardStyles(), className)}>
        <Box className="relative w-full sm:w-1/3">
          <img className={imageStyle} src={imageSrc} alt="product" />
        </Box>
        <Checkbox
          className="bg-black absolute top-2 left-2 size-8 rounded-lg"
          checked={checked}
          onClick={handleClicked}
          value={"check"}
        />
        <Box className="w-full sm:w-2/3 p-4 flex flex-col">
          <Button
            className="absolute top-2 right-2 bg-gray-200 rounded-lg p-1 w-max"
            onClick={handleClose}
          >
            <img src={close} className={iconStyle} />
          </Button>
          <Box>
            <Text as={"p"} className="font-bold text-xl mb-2">
              {brand}
            </Text>
            <Text as={"p"} className="text-gray-700 text-base mb-1">
              {name}
            </Text>
            <Text as={"p"} className="text-gray-900 font-bold mb-2">
              ₹ {price}
            </Text>
            {children}
            {isQuantity && (
              <Box className="flex flex-col sm:flex-row gap-5">
                <Box className="flex items-center space-x-2 mb-2 w-max rounded-lg bg-[#e5e7eb] p-2">
                  <Text as={"label"} className="font-semibold">
                    Size:
                  </Text>
                  <select
                    value={size}
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                    className="border rounded p-1 bg-transparent"
                  >
                    {sizeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Box>
                <Box className="flex items-center space-x-2 mb-2 w-max bg-[#e5e7eb] p-2 rounded-lg">
                  <Text as={"label"} className="font-semibold">
                    Qty:
                  </Text>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="border rounded p-1 bg-transparent"
                  >
                    {quantityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Box>
              </Box>
            )}
          </Box>
          {isReturn && (
            <Box className="mt-4 flex flex-col space-y-2">
              <Box className="flex items-center space-x-2">
                <img src={exchange} className={iconStyle} />
                <Text as={"p"} className="text-gray-600">
                  {returnPolicy}
                </Text>
              </Box>
              <Box className="flex items-center space-x-2">
                <img src={delivery} className={iconStyle} />
                <Text as={"p"} className="text-gray-600 font-semibold">
                  {deliveryText}
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
);

export default QuantityCard;
