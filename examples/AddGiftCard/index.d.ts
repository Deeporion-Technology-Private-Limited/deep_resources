import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';

declare const addgiftStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
type AddGiftCardProps = ComponentProps<"div"> & VariantProps<typeof addgiftStyles> & {
    children?: React.ReactNode;
};
export declare const AddGiftCard: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<AddGiftCardProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
