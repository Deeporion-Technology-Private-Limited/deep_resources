import { Footer } from '../../components/Footer';
import { VariantProps } from 'class-variance-authority';
import { default as React, ComponentProps } from '../../../node_modules/react';

declare const footerCartStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
interface footerCopyright {
    copyright?: string;
    copyrightBgStyle?: string;
    copyrightTextStyle?: string;
}
type FooterCartProps = ComponentProps<typeof Footer> & VariantProps<typeof footerCartStyles> & {
    children?: React.ReactNode;
    logoUrl?: string;
    footerCopyRights?: footerCopyright;
};
export declare const FooterCart: React.ForwardRefExoticComponent<Omit<FooterCartProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
