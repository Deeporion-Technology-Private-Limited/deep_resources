import { default as React, ComponentProps } from '../../../../node_modules/react';
import { Box } from '../../Layout';
import { VariantProps } from 'class-variance-authority';

type CardProps = ComponentProps<typeof Box> & VariantProps<typeof cardStyles> & {
    imageSrc?: string;
    brand?: string;
    name?: string;
    price?: number;
    children?: React.ReactNode;
    imageStyle?: string;
    sizeOptions?: string[];
    quantityOptions?: number[];
    returnPolicy?: string;
    deliveryText?: string;
    handleClose?: () => void;
    checked?: boolean;
    iconStyle?: string;
    handleChange?: (name: any) => void;
    isReturn?: boolean;
    isQuantity?: boolean;
};
declare const cardStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
declare const QuantityCard: React.ForwardRefExoticComponent<Omit<CardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default QuantityCard;
