import { Box } from '../..';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';

declare const productCardStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
    hoverEffect?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ProductCardProps = ComponentProps<typeof Box> & VariantProps<typeof productCardStyles> & {
    imageSrc: string;
    title?: string;
    price?: string;
    sizes?: string[];
    additionalImages?: string[];
    isBestseller?: string;
    deliveryInfo?: string;
    imageClass?: string;
    desMenu?: boolean;
    favorite?: boolean;
};
declare const ProductCard: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<ProductCardProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default ProductCard;
