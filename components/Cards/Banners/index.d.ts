import { Box } from '../..';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';

declare const productCardStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
type ProductCardProps = ComponentProps<typeof Box> & VariantProps<typeof productCardStyles> & {
    imageSrc: string;
    title?: string;
    price?: string;
    children?: string;
    description?: string;
    boxStyle?: string;
    buttonText?: string;
    titleClass?: string;
    descriptionClass?: string;
    buttonClass?: string;
    iconUrl?: string;
};
declare const Banner: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<ProductCardProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Banner;
