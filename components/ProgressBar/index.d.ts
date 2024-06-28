import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';

declare const progressBarStyles: (props?: ({
    variant?: "linear" | "circular" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ProgressBarProps = ComponentProps<"div"> & VariantProps<typeof progressBarStyles> & {
    progress: number;
    variant?: string;
    size?: number;
    strokeWidth?: number;
    bgColor: string;
    textFont?: string;
    textColor?: string;
    rotate?: string;
    middleText?: boolean;
};
declare const ProgressBar: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<ProgressBarProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default ProgressBar;
