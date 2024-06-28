import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';
import { ButtonIconPosition, ButtonSize, ButtonVariant } from '../type';

declare const buttonStyles: (props?: ({
    variant?: ButtonVariant | null | undefined;
    size?: ButtonSize | null | undefined;
    iconPosition?: ButtonIconPosition | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    hover?: boolean;
    iconUrl?: string;
    iconPosition?: ButtonIconPosition;
};
export declare const Button: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export {};
