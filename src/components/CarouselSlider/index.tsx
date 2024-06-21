import { useState, useEffect, ComponentProps, forwardRef } from 'react';
import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ArrowPosition, ButtonVariant, IndicatorType } from '../Button/type';
import { Left, Right } from '../Button/ButtonImage/icon';
import { Button, IconButton } from '..';
import ReviewCard from '../Cards/ReviewCard';

const carouselStyles = cva(
  ['relative', 'w-full', 'max-w-2xl', 'mx-auto', 'overflow-hidden'],
  {
    variants: {
      arrowPosition: {
        [ArrowPosition.Inside]: '',
        [ArrowPosition.Outside]: '',
      },
      indicatorType: {
        [IndicatorType.Dots]: '',
        [IndicatorType.Bars]: '', 
      },
    },
    defaultVariants: {
      arrowPosition: ArrowPosition.Inside,
      indicatorType: IndicatorType.Dots,
    },
  }
);

interface SlideItem {
  image: string;
  heading?: string;
  headingClassName?: string; 
  text?: string;
  textClassName?: string; 
  button?: {
    label: string;
    onClick: () => void;
    buttonClassName?: string;
  };
  reviewData?: ReviewDataType; 
}

type ReviewDataType = {
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
};

type CarouselProps = ComponentProps<'div'> & VariantProps<typeof carouselStyles> & {
  items: SlideItem[];
  className?: string;
  slideInterval?: number;
  variant?: 'default' | 'review';
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ items, arrowPosition = ArrowPosition.Inside, indicatorType = IndicatorType.Dots, className, variant = 'default', ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
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
      <div className={cn(carouselStyles({ arrowPosition, indicatorType }), className)} ref={ref} {...props}>
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 relative" style={{ flex: '0 0 100%' }}>
              {variant === 'default' ? (
                <>
                  <img src={item.image} alt={`Slide ${index}`} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center mt-6">
                    {item.heading && (
                      <div className={cn("text-center text-white rounded", item.headingClassName)}>
                        {item.heading}
                      </div>
                    )}
                    {item.text && (
                      <div className={cn("text-center text-white p-2 rounded", item.textClassName)}>
                        {item.text}
                      </div>
                    )}
                    {item.button && (
                      <Button
                        variant={ButtonVariant.DefaultPrimary}
                        hover={true}
                        className={cn("w-fit", item.button.buttonClassName)}
                        onClick={item.button.onClick}
                      >
                        {item.button.label}
                      </Button>
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

        <IconButton onClick={prevSlide} className={cn('absolute top-1/2 transform -translate-y-1/2 text-white opacity-60 ml-4 border rounded-full px-2 py-1.5 bg-[#FFFFFF]', {
          'left-0': arrowPosition === ArrowPosition.Inside,
          'left-4': arrowPosition === ArrowPosition.Outside,
        })}>
          <Left />
        </IconButton>
        <IconButton onClick={nextSlide} className={cn('absolute top-1/2 transform -translate-y-1/2 text-white opacity-60 mr-4 border rounded-full px-2 py-1.5 bg-[#FFFFFF]', {
          'right-0': arrowPosition === ArrowPosition.Inside,
          'right-4': arrowPosition === ArrowPosition.Outside,
        })}>
          <Right />
        </IconButton>

        <div className="absolute bottom-4 w-full flex justify-center">
          {items.map((_, index) => (
            <IconButton
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 p-0 rounded-full mx-1 ${
                currentIndex === index ? 'bg-[#4e2f24]' : 'bg-[#C9CDD2]'
              }`}
            ></IconButton>
          ))}
        </div>
      </div>
    );
  }
);

export default Carousel;
