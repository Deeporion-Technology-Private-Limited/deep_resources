import React, { useState, forwardRef, ComponentProps } from "react";
import star from "../icons/start.svg";
import { Button } from "@/components/Button/DefaultButton";
import { Box } from "@/components/Layout";
import { Text } from "@/components/Text";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

type CardProps = ComponentProps<typeof Box> &
  VariantProps<typeof cardStyles> & {
    imageSrc?: string;
    rating?: number;
    reviews?: number;
    brand?: string;
    description?: string;
    price?: number;
    favorite?: boolean;
    starRating?: boolean;
    children?: React.ReactNode;
    isnew?: string;
    imageStyle?: string;
    iconUrl?: string;
    isDescription?: boolean;
  };

const cardStyles = cva("max-w-sm rounded overflow-hidden shadow-lg");

const FaverateCard = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      imageSrc,
      rating,
      reviews,
      brand,
      description,
      favorite,
      price,
      starRating,
      className,
      isnew,
      imageStyle = "w-full",
      children,
      iconUrl,
      isDescription=true,
    },
    ref
  ) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
    };

    return (
      <Box ref={ref} className={cn(cardStyles(), className)}>
        <Box className="relative">
          <img className={imageStyle} src={imageSrc} alt="image" />
          {favorite && (
            <>
              <Button
                className={cn(
                  "absolute top-2 right-2 text-2xl p-[1px] bg-[#EBE3E0] rounded-[8px] w-max",
                  !iconUrl
                    ? isFavorite
                      ? "text-red-500 p-3"
                      : "text-gray-500 p-3"
                    : null
                )}
                onClick={toggleFavorite}
              >
                {iconUrl ? (
                  <img src={iconUrl} className="w" />
                ) : (
                  <svg
                    className="w-6 h-6 fill-current border-b"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                )}
              </Button>
            </>
          )}
          {isnew && (
            <Text
              as={"span"}
              className="absolute top-2 left-2 bg-[#3F271E] text-white text-md px-2 py-1 rounded-xl w-max capitalize"
            >
              {isnew}
            </Text>
          )}
          {starRating && (
            <Box className="absolute bottom-2 left-2 bg-[#00000066] bg-opacity-75 px-2 py-1 rounded-lg text-[#FFFFFF] flex items-center gap-1">
              <Text as={"p"}>{rating}</Text>
              <Text as={"p"}>
                <img src={star} className="size-4" />
              </Text>
              <Text className="h-max w-max" as={"span"}>
                {reviews}
              </Text>
            </Box>
          )}
        </Box>
        {isDescription && (
          <Box className="px-6 py-4">
            <Text as={"p"} className="font-bold text-xl mb-2">
              {brand}
            </Text>
            <Text as={"p"} className="text-gray-700 text-base">
              {description}
            </Text>
            <Text as={"p"} className="text-gray-900 font-bold">
              {price ? "₹  " + price : ""}
            </Text>
            {children}
          </Box>
        )}
      </Box>
    );
  }
);

export default FaverateCard;