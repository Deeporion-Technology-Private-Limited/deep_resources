import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';

declare const logoImageStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
type LogoImageProps = {
    logo: string;
} & ComponentProps<"img"> & VariantProps<typeof logoImageStyles>;
export declare const LogoImg: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<LogoImageProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLImageElement>>;
export {};
