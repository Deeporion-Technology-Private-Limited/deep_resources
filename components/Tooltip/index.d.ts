import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const tooltipStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
interface TooltipProps extends VariantProps<typeof tooltipStyles> {
    content: string;
    children: React.ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    arrow?: boolean;
    trigger: "click" | "hover";
    className?: string;
}
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export default Tooltip;
