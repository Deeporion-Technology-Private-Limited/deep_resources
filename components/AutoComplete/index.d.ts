import { default as React, ComponentProps } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const inputStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
type AutoCompleteProps = {
    suggestions: string[];
    type?: "text" | "multivalues" | "country" | "multivaluesline";
} & ComponentProps<"input"> & VariantProps<typeof inputStyles>;
export declare const AutoComplete: React.ForwardRefExoticComponent<Omit<AutoCompleteProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default AutoComplete;
