import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';

declare const menuStyle: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
interface MenuProps extends ComponentProps<"div">, VariantProps<typeof menuStyle> {
    children?: React.ReactNode;
    className?: string;
    label: string;
    activeColor?: string;
}
export declare const Menu: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<MenuProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
