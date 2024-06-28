import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';
import { Box } from '../..';
import { NavbarDirection } from '../type';
import { TopNavbarProps } from './topNavConst';

declare const navBarStyles: (props?: ({
    direction?: NavbarDirection | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type TopNavProp = TopNavbarProps & ComponentProps<typeof Box> & VariantProps<typeof navBarStyles>;
export declare const Topnavbar: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<TopNavProp, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
