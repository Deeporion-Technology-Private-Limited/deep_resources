import { ComponentProps } from '../../../node_modules/react';
import { IData, breadCrumbsType } from './data';

interface SortingProps extends ComponentProps<"div"> {
    children?: React.ReactNode;
    title: string;
    data: IData[];
    onClick: (data: any) => void;
    images: string[];
    labels: string[];
    options: string[];
    breadCrumbs: breadCrumbsType[];
    chips: string[];
    breadCrumbIcon: string;
    sortHandler?: Function;
    className?: string;
}
declare const SortingCard: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<SortingProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default SortingCard;
