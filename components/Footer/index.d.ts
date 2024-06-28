import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { Box } from '..';
import { CoreCustomerProps } from './footerInterface';

declare const navBarStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
interface CustomerProps extends CoreCustomerProps, ComponentProps<typeof Box>, VariantProps<typeof navBarStyles> {
}
export declare const Footer: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<CustomerProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
