import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';

declare const dashboardStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
type DashboardProps = ComponentProps<"div"> & VariantProps<typeof dashboardStyles> & {
    children?: React.ReactNode;
};
export declare const Dashboard: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<DashboardProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
