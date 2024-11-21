import React, { ComponentProps, forwardRef, useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";
import { FindIconUrl } from "@/utils/Constant";
import { Box } from "../Layout";
import { DefaultButton } from "../Button";
import { Text } from "../Text"; 

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
    onIconClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
    isChange?: () => void;
    handleCart?: () => void;
    buttonText?: string;
    handleNavigate?: () => void;
    isButton?: boolean;
    descriptionStyle?: string;
    text?: string;
    hashtag?: string;
  };

const cardStyles = cva(
  "w-[17rem] lg:max-w-sm rounded overflow-hidden shadow-xl cursor-pointer",
);

export const FollowUs = forwardRef<HTMLDivElement, CardProps>(
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
      isDescription = true,
      isChange = () => {},
      onIconClick = () => {},
      handleCart,
      buttonText = "Move to cart",
      handleNavigate,
      isButton = false,
      descriptionStyle = "flex flex-col gap-2",
      text,
      hashtag,
    },
    ref,
  ) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
    };

    return (
      <Box
        ref={ref}
        className={cn(cardStyles(), className)}
        onClick={handleNavigate}
      >
        <Box className="group relative">
          {imageSrc && (
            <img
              className={`transition-all duration-300 ${imageStyle}`}
              src={imageSrc}
              alt="image"
            />
          )}
          {text && ( 
            <Box className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-50 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Text
                as="span"
                className="text-center text-xs font-bold text-white"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  lineHeight: "18px",
                }}
              >
                {text}
              </Text>

              {favorite && (
                <>
                  <DefaultButton
                    className={cn(
                      "absolute right-2 top-2 w-max rounded-[8px] bg-transparent p-[1px] text-2xl",
                      !iconUrl
                        ? isFavorite
                          ? "p-3 text-red-500"
                          : "p-3 text-gray-500"
                        : null,
                    )}
                    onClick={() => {
                      isChange ? isChange() : null;
                      toggleFavorite();
                    }}
                  >
                    {iconUrl ? (
                      <img
                        src={iconUrl}
                        className="z-99"
                        onClick={(e) => onIconClick(e)}
                        alt="Icon"
                      />
                    ) : (
                      <></>
                    )}
                  </DefaultButton>
                </>
              )}

              <Text
                as="span"
                className="mt-[10px] text-left text-sm text-white"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "21px",
                }}
              >
                {hashtag}
              </Text>
            </Box>
          )}
          {favorite && (
            <>
              <DefaultButton
                className={cn(
                  "absolute right-2 top-2 w-max rounded-[8px] bg-transparent p-[1px] text-2xl",
                  !iconUrl
                    ? isFavorite
                      ? "p-3 text-red-500"
                      : "p-3 text-gray-500"
                    : null,
                )}
                onClick={() => {
                  isChange ? isChange() : null;
                  toggleFavorite();
                }}
              >
                {iconUrl ? (
                  <img 
                    src={iconUrl} 
                    onClick={(e) => onIconClick(e)} 
                    alt="Icon"
                  />
                ) : (
                  <></>
                )}
              </DefaultButton>
            </>
          )}

          {isnew && (
            <Text
              as="span"
              className="text-md absolute left-2 top-2 w-max rounded-xl bg-[#3F271E] px-2 py-1 capitalize text-white"
            >
              {isnew}
            </Text>
          )}
          {starRating && (
            <Box className="absolute bottom-2 left-2 flex items-center gap-1 rounded-lg bg-[#00000066] bg-opacity-75 px-2 py-1 text-[#FFFFFF]">
              <Text as="p">{rating}</Text>
              <Text as="p">
                <img src={FindIconUrl("star.svg")} className="size-4" alt="Star" />
              </Text>
              <Text className="h-max w-max" as="span">
                {reviews}
              </Text>
            </Box>
          )}
        </Box>
        {isDescription && (
          <Box className={`py-4 ${descriptionStyle}`}>
            {isButton && (
              <DefaultButton
                className="bg-[#EBE3E0] p-3 text-black"
                onClick={handleCart}
              >
                {buttonText}
              </DefaultButton>
            )}
            {brand && (
              <Text as="p" className="pl-4 text-xs font-normal text-[#999]">
                {brand}
              </Text>
            )}
            {description && (
              <Text as="p" className="pl-4 text-sm text-[#515151]">
                {description}
              </Text>
            )}
            {price && (
              <Text as="p" className="pl-4 font-bold text-gray-900">
                {price ? `₹ ${price}` : "₹ 3000"}
              </Text>
            )}
            {children}
          </Box>
        )}
      </Box>
    );
  },
);