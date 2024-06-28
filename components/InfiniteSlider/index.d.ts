import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { SlideVariant } from '../Button/type';

declare const slideStyles: (props?: ({
    variant?: SlideVariant.Default | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type SlideProps = ComponentProps<"div"> & VariantProps<typeof slideStyles> & {
    items: Array<{
        id: number;
        name: string;
        logoUrl?: string;
    }>;
    variant?: SlideVariant;
};
declare const AutoCarousel: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<SlideProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default AutoCarousel;
