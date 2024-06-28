import { ComponentProps } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const inputStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type SegmentControlProps = {
    suggestions: string[];
    onSegmentChange?: (segment: string) => void;
    size?: string;
    color?: string;
    type?: string;
} & ComponentProps<"div"> & VariantProps<typeof inputStyles>;
export declare const SegmentControl: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<SegmentControlProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default SegmentControl;
