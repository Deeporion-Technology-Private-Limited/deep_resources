import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';

declare const breadCrumbStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
type BreadCrumbItem = {
    text: string;
    iconUrl?: string;
    separatorIconUrl?: string;
    href?: string;
};
type BreadCrumbProps = ComponentProps<"div"> & VariantProps<typeof breadCrumbStyles> & {
    breadCrumbItems?: BreadCrumbItem[];
    defaultSeparatorIconUrl?: string;
};
export declare const BreadCrumb: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<BreadCrumbProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
