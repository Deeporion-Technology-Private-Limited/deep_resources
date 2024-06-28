import { VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from '../../../node_modules/react';

declare const modalStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ModalPropss {
    onClose: () => void;
    children?: ReactNode;
    header: ReactNode;
    button02: boolean;
    button01: boolean;
    modalbutton: boolean;
    openModal: boolean;
    crossIcon?: boolean;
    handleClose?: () => void;
}
type ModalProps = ComponentProps<"div"> & VariantProps<typeof modalStyles>;
export declare const Modal: import('../../../node_modules/react').ForwardRefExoticComponent<ModalPropss & import('../../../node_modules/react').RefAttributes<ModalProps>>;
export {};
