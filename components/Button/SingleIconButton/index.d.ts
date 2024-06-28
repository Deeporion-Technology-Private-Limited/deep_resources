import { ComponentProps } from '../../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { ButtonDirection } from '../type';

declare const IconButtonStyles: (props?: ({
    direction?: ButtonDirection | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type IconButtonProps = ComponentProps<"button"> & VariantProps<typeof IconButtonStyles> & {
    iconUrl?: string;
    text?: string;
    backgroundColor?: string;
    className?: string;
    direction?: ButtonDirection;
    children?: React.ReactNode;
};
export declare const IconButton: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<IconButtonProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export {};
