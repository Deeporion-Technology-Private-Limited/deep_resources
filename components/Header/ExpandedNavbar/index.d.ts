import { Box } from '../..';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';
import { CoreCustomerProps } from '../../Footer/footerInterface';

declare const topHoverStyle: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
interface TopHoverMenuCardProps extends ComponentProps<typeof Box>, VariantProps<typeof topHoverStyle> {
    TopHoverMenuItem: CoreCustomerProps[];
    title?: string;
    headingStyle?: string;
    listStyle?: string;
}
export declare const TopHoverMenuCard: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<TopHoverMenuCardProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
