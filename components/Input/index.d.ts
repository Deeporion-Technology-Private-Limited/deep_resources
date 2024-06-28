import { default as React } from '../../../node_modules/react';
import { InputType, InputVariant } from '../Input/type';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    search?: React.ReactNode;
    eyeOpen?: React.ReactNode;
    eye?: React.ReactNode;
    prefix?: string;
    type: InputType;
    variant: InputVariant;
    value: string;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
