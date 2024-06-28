import { PolymorphicComponentPropsWithRef } from '../../utils/types';
import { VariantProps } from 'class-variance-authority';

declare const textStyles: (props?: ({
    emphasis?: "low" | null | undefined;
    size?: "sm" | "lg" | "base" | "xl" | "2xl" | "3xl" | null | undefined;
    weight?: "bold" | "thin" | "normal" | "medium" | "semibold" | "black" | null | undefined;
    align?: "left" | "right" | "center" | null | undefined;
    italic?: boolean | null | undefined;
    underline?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, VariantProps<typeof textStyles>>;
type TextComponent = <C extends React.ElementType = "span">(props: TextProps<C>) => React.ReactElement | null;
export declare const Text: TextComponent;
export {};
