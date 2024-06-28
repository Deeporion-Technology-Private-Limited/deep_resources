import { AlertType, AlertVariant } from '../type';

type IconProps = {
    type: AlertType;
    variant: AlertVariant;
};
export declare const Warning: ({ variant }: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const Success: ({ variant }: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const Error: ({ variant }: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const Info: ({ variant }: IconProps) => import("react/jsx-runtime").JSX.Element;
export {};
