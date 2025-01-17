import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, useEffect, useState } from "react";
import { ArrowPosition, ButtonVariant, IndicatorType, SlideItem } from ".";
import { cn } from "../../utils";
import { FindIconUrl } from "../../utils/Constant";
import { DefaultButton, SingleIconButton } from "../Button";
import { ReviewCard } from "../Cards";

const carouselStyles = cva(["relative", "w-[100vw]", "overflow-hidden"], {
  variants: {
    arrowPosition: {
      [ArrowPosition.Inside]: "",
      [ArrowPosition.Outside]: "",
    },
    indicatorType: {
      [IndicatorType.Dots]: "",
      [IndicatorType.Bars]: "",
    },
  },
  defaultVariants: {
    arrowPosition: ArrowPosition.Inside,
    indicatorType: IndicatorType.Dots,
  },
});

export type ReviewDataType = {
  StarRating: boolean;
  avatar: boolean;
  avatarImage: string;
  imageStyle: string;
  rating: number;
  reviewText: string;
  reviewerName: string;
  className: string;
  starStyle: string;
  textStyle: string;
  imageClassNames?: string;
};

type CarouselProps = ComponentProps<"div"> &
  VariantProps<typeof carouselStyles> & {
    items: SlideItem[];
    className?: string;
    slideInterval?: number;
    variant?: "default" | "review";
    onButtonClick?: (label: string) => void;
    imageClassNames?: string;
  };

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      items,
      arrowPosition = ArrowPosition.Inside,
      indicatorType = IndicatorType.Dots,
      className,
      variant = "default",
      onButtonClick,
      imageClassNames,
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(intervalId);
    }, [items.length]);

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    return (
      <div
        className={cn(
          carouselStyles({ arrowPosition, indicatorType }),
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={crypto.randomUUID()}
              className="w-full flex-shrink-0 relative"
              style={{ flex: "0 0 100%" }}
            >
              {variant === "default" ? (
                <>
                  <img
                    src={item.image}
                    alt={`Slide ${index}`}
                    className={cn(
                      "h-48 w-full object-cover sm:h-64 md:h-72 lg:h-[45rem]",
                      imageClassNames
                    )}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center mt-6 p-4 sm:p-6 md:p-8 lg:p-10">
                    {item.heading && (
                      <div
                        className={cn(
                          "text-center text-white rounded text-sm sm:text-lg md:text-xl lg:text-2xl",
                          item.headingClassName
                        )}
                      >
                        {item.heading}
                      </div>
                    )}
                    {item.text && (
                      <div
                        className={cn(
                          "text-center text-white p-2 rounded text-xs sm:text-sm md:text-base lg:text-lg",
                          item.textClassName
                        )}
                      >
                        {item.text}
                      </div>
                    )}
                    {item.button && (
                      <DefaultButton
                        variant={ButtonVariant.DefaultPrimary}
                        hover={true}
                        className={cn(
                          "w-fit text-xs sm:text-sm md:text-base lg:text-lg",
                          item.button.buttonClassName
                        )}
                        onClick={() =>
                          onButtonClick && onButtonClick(item.button!.label)
                        }
                      >
                        {item.button.label}
                      </DefaultButton>
                    )}
                  </div>
                </>
              ) : (
                <ReviewCard
                  StarRating={item.reviewData!.StarRating}
                  avatar={item.reviewData!.avatar}
                  avatarImage={item.reviewData!.avatarImage}
                  imageStyle={item.reviewData!.imageStyle}
                  rating={item.reviewData!.rating}
                  reviewText={item.reviewData!.reviewText}
                  reviewerName={item.reviewData!.reviewerName}
                  starStyle={item.reviewData!.starStyle}
                  textStyle={item.reviewData!.textStyle}
                  className={item.reviewData!.className}
                />
              )}
            </div>
          ))}
        </div>

        <SingleIconButton
          onClick={prevSlide}
          className={cn(
            "absolute top-1/2 transform -translate-y-1/2 text-white opacity-60 ml-2 sm:ml-4 md:ml-6 border rounded-full px-1.5 sm:px-2 md:px-2.5 sm:py-2 md:py-2 py-1 bg-[#FFFFFF]",
            {
              "left-0": arrowPosition === ArrowPosition.Inside,
              "left-2 sm:left-4 md:left-6":
                arrowPosition === ArrowPosition.Outside,
            }
          )}
        >
          <img src={FindIconUrl("KeyboardArrowLeft.svg")} />
        </SingleIconButton>
        <SingleIconButton
          onClick={nextSlide}
          className={cn(
            "absolute top-1/2 transform -translate-y-1/2 text-white opacity-60 mr-2 sm:mr-4 md:mr-6 border rounded-full px-1.5 sm:px-2 md:px-2.5 sm:py-2 md:py-2 py-1 bg-[#FFFFFF]",
            {
              "right-0": arrowPosition === ArrowPosition.Inside,
              "right-2 sm:right-4 md:right-6":
                arrowPosition === ArrowPosition.Outside,
            }
          )}
        >
          <img src={FindIconUrl("KeyboardArrowRight.svg")} />
        </SingleIconButton>

        {indicatorType === IndicatorType.Dots && (
          <div className="absolute bottom-2 sm:bottom-4 w-full flex justify-center">
            {items.map((_, index) => (
              <SingleIconButton
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 p-0 rounded-full mx-0.5 sm:mx-1 ${
                  currentIndex === index ? "bg-[#4e2f24]" : "bg-[#C9CDD2]"
                }`}
              ></SingleIconButton>
            ))}
          </div>
        )}
      </div>
    );
  }
);
