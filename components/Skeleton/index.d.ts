import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { ButtonSize, SkeletonVariant } from '../Button/type';

declare const skeletonStyles: (props?: ({
    variant?: SkeletonVariant | null | undefined;
    size?: ButtonSize | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof skeletonStyles>;
export declare const Skeleton: React.FC<SkeletonProps>;
export declare const SkeletonLayout: React.FC;
export declare const SkeletonShoppingCard: React.FC;
export declare const SkeletonLoginForm: React.FC;
export declare const SkeletonImage: React.FC;
export {};
