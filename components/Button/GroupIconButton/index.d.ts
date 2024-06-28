import { ComponentProps } from '../../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { ButtonDirection } from '../type';

declare const GroupButtonStyles: (props?: ({
    direction?: ButtonDirection | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type GroupButtonProps = ComponentProps<"div"> & VariantProps<typeof GroupButtonStyles> & {
    iconUrl?: string;
    className?: string;
    direction?: ButtonDirection;
    children?: React.ReactNode;
};
export declare const GroupIconButton: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<GroupButtonProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
