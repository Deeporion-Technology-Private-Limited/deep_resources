import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';

declare const tableStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | "custom" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorscheme?: "primary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type TableProps = ComponentProps<"thead"> & VariantProps<typeof tableStyles> & {
    data: Array<{
        [key: string]: string | React.ReactNode;
    }> | [];
    tableStyle?: string;
    tHeadStyle?: string;
    tDataStyle?: string;
};
export declare const Table: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<TableProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLTableSectionElement>>;
export {};
