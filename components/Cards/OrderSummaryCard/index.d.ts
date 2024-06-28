import { ComponentProps } from '../../../../node_modules/react';
import { Box } from '../../Layout';
import { VariantProps } from 'class-variance-authority';

type CardProps = ComponentProps<typeof Box> & VariantProps<typeof cardStyles> & {
    imageSrc?: string;
    brand?: string;
    description?: string;
    subTotal?: string;
    taxes?: string;
    delivery?: string;
    total?: string;
    handleClick?: () => void;
    buttonText?: string;
};
declare const cardStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
declare const OrderSummary: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<CardProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default OrderSummary;
