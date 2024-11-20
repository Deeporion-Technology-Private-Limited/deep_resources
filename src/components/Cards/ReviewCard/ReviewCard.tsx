import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { cn } from "../../../utils";
import { ProfileAvatar } from "../../Avatar";
import { Box } from "../../Layout";
import { Text } from "../../Text";
const reviewCardStyles = cva(
  "flex flex-col p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg mx-auto w-full max-w-2xl gap-4",
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
  "text-gray-600 leading-relaxed font-normal italic"
);
const starStyles = cva("flex gap-1 items-center mb-2");

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
    clientReviewCard?: boolean;
    onViewMoreClick?: () => void;
  };

export const ReviewCard = React.forwardRef<HTMLDivElement, ReviewCardProps>(
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
      clientReviewCard,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${cn(reviewCardStyles({ size }), className)} ${
          clientReviewCard
            ? "h-[250px] rounded-2xl bg-gradient-to-b from-white to-white shadow-xl transition-all duration-300 hover:from-gray-50 hover:to-white hover:shadow-2xl"
            : ""
        }`}
        {...props}
      >
        {image && (
        <Box className="relative mb-4 overflow-hidden rounded-lg">
            <img
              src={imageSrc}
              alt={`${reviewerName}'s picture`}
              className={cn("h-48 w-full object-cover", imageStyle)}
            />
          </Box>
        )}
     
            <Box className="flex items-center gap-4">
              <ProfileAvatar
                name={reviewerName}
                src={avatarImage}
                className="h-16 w-16 text-lg ring-2 ring-gray-100 ring-offset-2"
              />
               <Text className="text-xl font-bold text-gray-900">
                {reviewerName}
              </Text>
            </Box>
            {StarRating && (
               <Box className={cn(starStyle || starStyles(), "py-2")}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={
                      i < rating
                        ? "h-5 w-5 text-yellow-400"
                    : "h-5 w-5 text-gray-200"
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
           {reviewText && (
          <Box className="relative mt-2">
            <svg
              className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p
              className={cn(textStyle || textStyles(), "relative pl-6 text-lg")}
            >
              {reviewText}
            </p>
          </Box>
        )}
       
      </div>
    );
  }
);
