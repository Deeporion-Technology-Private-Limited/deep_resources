import { Box, ProfileAvatar, Text } from "@/components";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
const reviewCardStyles = cva(
  "flex flex-col p-4 bg-white shadow-md rounded-lg  mx-auto  w-[40rem] gap-6 rounded-[8,8,12,16]",
  {
    variants: {
      size: {
        small: "text-sm ",
        medium: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

const textStyles = cva(
  "text-center text-gray-800 mb-2 capitalize font-bold text-xl"
);
const starStyles = cva("flex mb-2 h-fit w-full text-yellow-500 bg-yellow");

type ReviewCardProps = ComponentProps<"div"> &
  VariantProps<typeof reviewCardStyles> & {
    imageSrc?: string;
    reviewerName: string;
    reviewText?: string;
    rating: number;
    avatarImage?: string;
    StarRating?: boolean;
    image?: boolean;
    avatar?: boolean;
    imageStyle?: string;
    textStyle?: string;
    starStyle?: string;
  };

export const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(
  (
    {
      imageSrc,
      reviewerName,
      imageStyle,
      avatarImage,
      reviewText,
      image,
      avatar,
      rating,
      starStyle,
      textStyle,
      size,
      StarRating,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(reviewCardStyles({ size }), className)}
        {...props}
      >
        {image && (
          <Box className="relative mb-4">
            <img
              src={imageSrc}
              alt={`${reviewerName}'s picture`}
              className={imageStyle}
            />
          </Box>
        )}
        {
          <>
            <Box className="flex w-full gap-4 items-end h-fit">
              <ProfileAvatar
                name={reviewerName}
                src={avatarImage}
                className="h-[6rem] w-[6rem] text-2xl"
              />
              <Text className="w-max font-extrabold text-2xl">
                {reviewerName}
              </Text>
            </Box>
            {StarRating && (
              <Box className={starStyle ? starStyle : starStyles()}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={
                      i < rating
                        ? "text-yellow-500 w-7 h-7"
                        : "text-gray-300 w-7 h-7"
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </Box>
            )}
            <Box className={textStyle ? textStyle : textStyles()}>
              {reviewText}
            </Box>
          </>
        }
      </div>
    );
  }
);
