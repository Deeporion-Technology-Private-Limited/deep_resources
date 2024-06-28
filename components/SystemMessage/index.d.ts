import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { systemMessageTypes } from './systemMessageTypes';

declare const systemMessageStyle: (props?: ({
    variant?: systemMessageTypes | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorscheme?: "primary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type SystemMessageProps = ComponentProps<"div"> & VariantProps<typeof systemMessageStyle> & {
    addRightIcon?: boolean;
    handleClose: () => void;
};
export declare const SystemMessage: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<SystemMessageProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
