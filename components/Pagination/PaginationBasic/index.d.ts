import { default as React } from '../../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { Box } from '../..';
import { ButtonSize } from '../../Button/type';
import { Color, Shape, Variants } from '../type';

declare const paginationContainerStyles: (props?: ({
    size?: ButtonSize | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const paginationButtonStyles: (props?: ({
    shape?: Shape | null | undefined;
    variant?: Variants | null | undefined;
    active?: boolean | null | undefined;
    activeColor?: Color | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface PaginationProps extends React.ComponentProps<typeof Box>, VariantProps<typeof paginationContainerStyles>, VariantProps<typeof paginationButtonStyles> {
    currentPage: number;
    onPageChange: (page: number) => void;
    customButtonSize?: string;
    totalPages: number;
    iconStyle?: string;
}
declare const Pagination: React.ForwardRefExoticComponent<Omit<PaginationProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Pagination;
