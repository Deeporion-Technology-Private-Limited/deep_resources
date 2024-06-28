import { default as React } from '../../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { Box } from '../..';
import { ButtonSize } from '../../Button/type';
import { Shape, Variants } from '../type';

declare const paginationStyles: (props?: ({
    size?: ButtonSize | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const buttonStyles: (props?: ({
    disabled?: boolean | null | undefined;
    variant?: Variants | null | undefined;
    shape?: Shape | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface PaginationProps extends React.ComponentProps<typeof Box>, VariantProps<typeof paginationStyles>, VariantProps<typeof buttonStyles> {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    customButtonSize?: string;
    iconStyle?: string;
    onPageChange: (page: number) => void;
}
declare const Paginations: React.ForwardRefExoticComponent<Omit<PaginationProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Paginations;
