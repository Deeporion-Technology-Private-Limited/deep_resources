import { default as React, ComponentProps } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { ButtonSize } from '../Button/type';

declare const inputStyles: (props?: ({
    variant?: "Basic" | "Disable" | null | undefined;
    size?: ButtonSize | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type InputProps = Omit<ComponentProps<"input">, "size"> & VariantProps<typeof inputStyles> & {
    type?: "checkbox" | "radio" | "toggle";
    label?: string;
    checked?: boolean;
    className?: string;
    labelClassname?: string;
    containerClassName?: string;
    inputClassName?: string;
    checkedClassName?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    labelPosition?: "before" | "after";
    value: string;
    fillColor?: string;
};
export declare const Checkbox: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
