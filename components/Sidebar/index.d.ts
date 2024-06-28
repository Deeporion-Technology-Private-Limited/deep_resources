import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { Box } from '..';
import { SidbarProps } from './sidebarConst';

declare const navBarStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
interface Prop extends SidbarProps, ComponentProps<typeof Box>, VariantProps<typeof navBarStyles> {
}
export declare const Sidebar: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<Prop, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
