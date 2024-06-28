import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { ElevationShadow } from './type';

declare const elevationStyles: (props?: ({
    shadow?: ElevationShadow | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ElevationProps = ComponentProps<"div"> & VariantProps<typeof elevationStyles> & {
    shadow?: ElevationShadow;
    children?: React.ReactNode;
    text?: String;
};
export declare const Elevation: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<ElevationProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
