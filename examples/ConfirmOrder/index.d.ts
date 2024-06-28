import { ComponentProps } from '../../../node_modules/react';

type ConfirmOrderProps = ComponentProps<"div"> & {
    children?: React.ReactNode;
    title?: string;
    message?: string;
    description?: string;
    onClick?: () => void;
};
declare const ConfirmOrder: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<ConfirmOrderProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default ConfirmOrder;
