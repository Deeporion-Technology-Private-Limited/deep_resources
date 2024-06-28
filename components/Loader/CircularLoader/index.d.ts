import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';

declare const circularLoadertyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
type CircularLoaderProps = ComponentProps<"div"> & VariantProps<typeof circularLoadertyles> & {
    border?: string;
    borderTop?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
    animation?: string;
};
declare const CircularLoader: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<CircularLoaderProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export { CircularLoader };
