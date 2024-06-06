import { Box, Text } from "@/components";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
const reviewCardStyles = cva(
  "flex flex-col items-center p-4 bg-white shadow-md rounded-lg  mx-auto  hover:shadow-xl",
  {
    variants: {
      size: {
        small: "text-sm ",
        medium: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      size: "medium"
    },
  }
);

const textStyles = cva("text-center text-gray-800 mb-2 capitalize");
const starStyles = cva(
  "flex justify-center mb-2 h-full w-full text-yellow-500 bg-yellow"
);

type ReviewCardProps = ComponentProps<"div"> &
  VariantProps<typeof reviewCardStyles> & {
    imageSrc: string;
    reviewerName?: string;
    reviewText?: string;
    rating: number;
    StarRating?:boolean;
    image?:boolean;
    avatar?:boolean;
    imageStyle?:string;
  };

const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(
  (
    { imageSrc, reviewerName,imageStyle, reviewText,image,avatar, rating, size, StarRating, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(reviewCardStyles({ size }), className)}
        {...props}
      >
        { image && (
        <Box className="relative mb-4">
          <img
            src={imageSrc}
            alt={`${reviewerName}'s picture`}
            className={imageStyle}
          />
        </Box>)
  }
        {
          <>
            <Box className="flex items-center justify-center mb-2">
                {avatar && (
              <Box className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center p-8 text-xl font-bold text-gray-600">
                {reviewerName
                  ?.split(" ")
                  .map((name) => name[0])
                  .join("")}
              </Box>)}
            </Box>
            <Box className={textStyles()}>
              <Text className="font-bold">{reviewerName}</Text>
            </Box>
            <Box className={textStyles()}>{reviewText}</Box>
            {StarRating &&(
              <Box className={starStyles()}>
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
            )
            }
          </>
        }
      </div>
    );
  }
);

ReviewCard.displayName = "ReviewCard";

export default ReviewCard;
