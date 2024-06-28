import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { BorderRadius } from './type';

declare const roundedCornerStyles: (props?: ({
    borderRadius?: BorderRadius | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type RoundedCornersProps = ComponentProps<"div"> & VariantProps<typeof roundedCornerStyles> & {
    borderRadius?: BorderRadius;
};
export declare const RoundedCorners: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<RoundedCornersProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
