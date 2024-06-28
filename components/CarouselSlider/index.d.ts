import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { ArrowPosition, IndicatorType } from '../Button/type';
import { SlideItem } from './interfaces';

declare const carouselStyles: (props?: ({
    arrowPosition?: ArrowPosition | null | undefined;
    indicatorType?: IndicatorType | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
};
type CarouselProps = ComponentProps<"div"> & VariantProps<typeof carouselStyles> & {
    items: SlideItem[];
    className?: string;
    slideInterval?: number;
    variant?: "default" | "review";
};
declare const Carousel: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<CarouselProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Carousel;
