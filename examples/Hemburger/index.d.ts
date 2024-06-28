import { ComponentProps } from '../../../node_modules/react';
import { Box } from '../../components';
import { VariantProps } from 'class-variance-authority';

declare const hemburgerStyle: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
interface HemBurgerProps {
}
interface HemProps extends HemBurgerProps, ComponentProps<typeof Box>, VariantProps<typeof hemburgerStyle> {
}
export declare const Hamburger: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<HemProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
