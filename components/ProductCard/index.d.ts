import { Box } from '..';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { IProductDetails, IProductSpecifications } from './type';

declare const productCardStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
type ProductCardProps = ComponentProps<typeof Box> & VariantProps<typeof productCardStyles> & {
    productCode: string;
    productDetails: IProductDetails;
    productSpecifications: IProductSpecifications;
};
export declare const ProductCard: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<ProductCardProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
