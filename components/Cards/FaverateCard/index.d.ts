import { default as React, ComponentProps } from '../../../../node_modules/react';
import { Box } from '../../Layout';
import { VariantProps } from 'class-variance-authority';

type CardProps = ComponentProps<typeof Box> & VariantProps<typeof cardStyles> & {
    imageSrc?: string;
    rating?: number;
    reviews?: number;
    brand?: string;
    description?: string;
    price?: number;
    favorite?: boolean;
    starRating?: boolean;
    children?: React.ReactNode;
    isnew?: string;
    imageStyle?: string;
    iconUrl?: string;
    isDescription?: boolean;
    onIconClick?: () => void;
    isChange?: () => void;
    handleCart?: () => void;
    buttonText?: string;
    handleNavigate?: () => void;
    isButton?: boolean;
    descriptionStyle?: string;
};
declare const cardStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
declare const FaverateCard: React.ForwardRefExoticComponent<Omit<CardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default FaverateCard;
