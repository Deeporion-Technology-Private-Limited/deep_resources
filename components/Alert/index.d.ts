import { Box } from '..';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { AlertType, AlertVariant } from './type';

declare const productCardStyles: (props?: ({
    type?: AlertType | null | undefined;
    variant?: AlertVariant | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ProductCardProps = ComponentProps<typeof Box> & VariantProps<typeof productCardStyles> & {
    type?: AlertType;
    variant?: AlertVariant;
    showIcon?: boolean;
    message: string;
};
export declare const Alert: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<ProductCardProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Alert;
