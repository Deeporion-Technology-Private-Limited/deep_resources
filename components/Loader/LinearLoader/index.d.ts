import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';

declare const linearLoaderStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
type LinearLoaderProps = ComponentProps<"div"> & VariantProps<typeof linearLoaderStyles> & {
    value: number;
    color?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
    animationDuration: string;
};
declare const LinearLoader: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<LinearLoaderProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export { LinearLoader };
