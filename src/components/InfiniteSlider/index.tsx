import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, forwardRef, useEffect, useRef } from 'react';
import { cn } from "@/utils"; 
import { SlideVariant } from '../Button/type';

const slideStyles = cva(
  ["flex-shrink-0", "w-48", "text-center"],
  {
    variants: {
      variant: {
        [SlideVariant.Default]: "",
      },
    },
    defaultVariants: {
      variant: SlideVariant.Default,
    },
  }
);

type SlideProps = ComponentProps<"div"> & VariantProps<typeof slideStyles> & {
  items: Array<{ id: number; name: string; logoUrl?: string }>;
  variant?: SlideVariant;
};

const AutoCarousel = forwardRef<HTMLDivElement, SlideProps>(
  ({ items, className, variant = SlideVariant.Default, ...props }, ref) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const element = carouselRef.current;

      if (element) {
        const totalWidth = element.scrollWidth / 2;
        const animationDuration = totalWidth / 50;

        element.style.setProperty('--carousel-width', `${totalWidth}px`);
        element.style.setProperty('--animation-duration', `${animationDuration}s`);
        element.style.setProperty('--scroll-start', '0');
        element.style.setProperty('--scroll-end', `calc(-100% - var(--gap))`);

        element.classList.add('animate-autoScroll');
      }
    }, [items]);

    const duplicatedItems = [...items, ...items];

    return (
      <div className="carousel-container overflow-hidden relative">
        <div
          ref={ref ?? carouselRef}
          className={cn("carousel flex space-x-4 marquee", className)}
          {...props}
        >
          <div className="marquee__group">
            {duplicatedItems.map((item, index) => (
              <div
                key={index}
                className={cn(slideStyles({ variant }), className)}
              >
                {item.logoUrl ? (
                  <img src={item.logoUrl} alt={item.name} className="w-full h-auto" />
                ) : (
                  <p className="text-lg font-semibold">{item.name}</p>
                )}
              </div>
            ))}
          </div>
          <div className="marquee__group" aria-hidden="true">
            {duplicatedItems.map((item, index) => (
              <div
                key={index}
                className={cn(slideStyles({ variant }), className)}
              >
                {item.logoUrl ? (
                  <img src={item.logoUrl} alt={item.name} className="w-full h-auto" />
                ) : (
                  <p className="text-lg font-semibold">{item.name}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default AutoCarousel;
