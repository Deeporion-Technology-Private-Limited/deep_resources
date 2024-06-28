import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { ChipsTypes } from './chipsTypes';

declare const chipsStyle: (props?: ({
    variant?: ChipsTypes | "addRightIcon" | "addLeftIcon" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorscheme?: "primary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ChipsProps = ComponentProps<"div"> & VariantProps<typeof chipsStyle> & {
    addRightIcon?: boolean;
    addLeftIcon?: boolean;
    variant: ChipsTypes;
    children?: string;
    handleClick?: () => void;
};
export declare const Chips: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<ChipsProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Chips;
