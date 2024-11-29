import React, { ComponentProps, forwardRef, useState } from "react";

import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../utils";
import { FindIconUrl } from "../../../utils/Constant";
import { DefaultButton } from "../../Button";
import { Box } from "../../Layout";
import { Text } from "../../Text";

export type CardProps = ComponentProps<typeof Box> &
  VariantProps<typeof cardStyles> & {
    id?: number | string;
    imageSrc?: string;
    rating?: number;
    reviews?: number;
    brand?: string;
    description?: string;
    price?: number | string;
    favorite?: boolean;
    starRating?: boolean;
    children?: React.ReactNode;
    isnew?: string | boolean;
    imageStyle?: string;
    iconUrl?: string;
    isDescription?: boolean;
    onIconClick?: () => void;
    image?: string;
    price_of_first_variant?: number | undefined;
    name?: string;
    isChange?: (id: string | number) => void;
    handleCart?: (id: string) => void;
    buttonText?: string;
    isButton?: boolean;
    descriptionStyle?: string;
    handleNavigate?: () => void;
    isFavorite?: boolean;
    onSimilarProductClick?: () => void;
    is_favorite?: boolean;
    rating_and_review?: {
      average_rating?: number;
      total_review_count?: number;
    };
  };

const cardStyles = cva(
  " lg:w-[17rem]  w-[19.5rem] lg:max-w-sm rounded overflow-hidden shadow-xl"
);
export const FavouriteCard = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      id = "",
      isFavorite,
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
      imageStyle = "w-full cursor-pointer object-cover",
      children,
      iconUrl,
      isDescription = true,
      isChange,
      onIconClick = () => {},
      handleCart,
      buttonText = " Move to cart",
      isButton = false,
      descriptionStyle = "flex flex-col gap-2",
      handleNavigate,
    },

    ref
  ) => {
    const [isFav, setIsFav] = useState(isFavorite);
    const toggleFavorite = () => {
      setIsFav(!isFavorite);
    };
    const pathname = window.location.pathname;
    const isLandingPage = pathname === "/";
    const dynamicImageStyle = isLandingPage
      ? "h-[412px] w-[405px]"
      : "h-[341px] w-[253px]";

    const finalImageStyle = `${imageStyle} ${dynamicImageStyle} `;

    const handleDescClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.stopPropagation();
      if (handleCart !== undefined && id) {
        handleCart(id);
      }
    };

    return (
      <Box
        ref={ref}
        className={cn(cardStyles(), className)}
        onClick={handleNavigate}
      >
        <Box className="group relative flex items-center justify-center">
          {imageSrc && (
            <>
              <img
                loading="lazy"
                className={`${finalImageStyle} transform transition-transform duration-300 group-hover:scale-105`}
                src={imageSrc}
                alt="image"
              />
              <span className="font-boldbg-opacity-50 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </>
          )}

          {favorite && (
            <DefaultButton
              className={cn(
                "absolute right-2 top-2 w-max rounded-[8px] bg-[#EBE3E0] p-[1px] text-2xl",
                !iconUrl
                  ? isFav
                    ? "p-3 text-red-500"
                    : "p-3 text-gray-500"
                  : null
              )}
            >
              {iconUrl ? (
                <img
                  loading="lazy"
                  src={iconUrl}
                  className="w"
                  onClick={() => onIconClick()}
                />
              ) : (
                <svg
                  className="h-6 w-6 border-b fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              )}
            </DefaultButton>
          )}
          {isnew && (
            <Text
              as={"span"}
              className="text-md absolute left-2 top-2 w-max rounded-xl bg-[#3F271E] px-2 py-1 capitalize text-white"
            >
              {isnew}
            </Text>
          )}
          {starRating && (
            <Box className="absolute bottom-2 left-2 flex items-center gap-1 rounded-lg bg-[#00000066] bg-opacity-75 px-2 py-1 text-[#FFFFFF]">
              <Text as={"p"}>{rating}</Text>
              <Text as={"p"}>
                <img src={FindIconUrl("star.svg")} className="size-4" />
              </Text>
              <Text className="h-max w-max" as={"span"}>
                {reviews}
              </Text>
            </Box>
          )}
        </Box>
        {isDescription && (
          <Box className={`cursor-pointer py-4 ${descriptionStyle}`}>
            {isButton && (
              <DefaultButton
                className="bg-[#EBE3E0] p-3 text-black"
                onClick={handleDescClick}
              >
                {buttonText}
              </DefaultButton>
            )}
            {brand && (
              <Text
                as={"p"}
                className="pl-4 text-xs font-normal capitalize text-[#999]"
              >
                {brand}
              </Text>
            )}
            {description && (
              <Text as={"p"} className="pl-4 text-sm capitalize text-[#515151]">
                {description}
              </Text>
            )}
            {price && (
              <Text
                as={"p"}
                className="text-[#515151]-400 pl-4 font-bold capitalize"
              >
                {price ? `₹  ${price}` : "3000"}
              </Text>
            )}
            {children}
          </Box>
        )}
      </Box>
    );
  }
);
