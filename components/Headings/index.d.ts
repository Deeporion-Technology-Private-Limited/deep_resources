import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';

declare const textStyles: (props?: ({
    emphasis?: "low" | null | undefined;
    size?: "sm" | "lg" | "base" | "xl" | "2xl" | "3xl" | null | undefined;
    weight?: "bold" | "thin" | "normal" | "medium" | "semibold" | "black" | null | undefined;
    align?: "left" | "right" | "center" | null | undefined;
    italic?: boolean | null | undefined;
    underline?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface HeadingProps {
    text?: string;
    FontSize?: string;
    fontWeight: string;
}
type HProps = ComponentProps<"div"> & VariantProps<typeof textStyles> & HeadingProps;
export declare const Headings: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<HProps, "ref"> & import('../../../node_modules/react').RefAttributes<SVGSymbolElement>>;
export {};
