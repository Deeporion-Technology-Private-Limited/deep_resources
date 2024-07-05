import React, { useState, forwardRef, useRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils';
import { PositionType } from './type';

const tooltipStyles = cva(
    [
        "w-full",
        "h-fit",
        "rounded",
        "p-2",
        "text-center",
        "bg-slate-300",
        "text-black",
        "shadow-lg",
        "absolute",
        "z-10",
    ],
    {
        variants: {
            type: {
                [PositionType.Top]: "",
                [PositionType.Bottom]: "",
                [PositionType.Left]: "",
                [PositionType.Right]: "",
            },
        },
        defaultVariants: {
            type: PositionType.Top,
        },
        compoundVariants: [
            {
                type: PositionType.Top,
                className: "transform -translate-x-1/2 left-1/2 bottom-full mb-2",
            },
            {
                type: PositionType.Bottom,
                className: "transform -translate-x-1/2 left-1/2 top-full mt-2",
            },
            {
                type: PositionType.Left,
                className: "transform -translate-y-1/2 top-1/2 right-full mr-2",
            },
            {
                type: PositionType.Right,
                className: "transform -translate-y-1/2 top-1/2 left-full ml-2",
            },
        ],
    }
);

const arrowClasses = (placement?: PositionType) => {
    const baseArrowClasses = "absolute w-0 h-0 border-8";
    switch (placement) {
        case PositionType.Top:
            return `${baseArrowClasses} border-t-slate-300 border-transparent border-b-0 bottom-[-8px] left-1/2 transform -translate-x-1/2`;
        case PositionType.Bottom:
            return `${baseArrowClasses} border-b-slate-300 border-transparent border-t-0 top-[-8px] left-1/2 transform -translate-x-1/2`;
        case PositionType.Left:
            return `${baseArrowClasses} border-l-slate-300 border-transparent border-r-0 right-[-8px] top-1/2 transform -translate-y-1/2`;
        case PositionType.Right:
            return `${baseArrowClasses} border-r-slate-300 border-transparent border-l-0 left-[-8px] top-1/2 transform -translate-y-1/2`;
        default:
            return `${baseArrowClasses} border-b-slate-300 border-transparent border-t-0 top-[-8px] left-1/2 transform -translate-x-1/2`; // default to bottom
    }
};

interface TooltipProps extends VariantProps<typeof tooltipStyles> {
    content: string;
    children: React.ReactNode;
    placement?: PositionType;
    arrow?: boolean;
    trigger: "click" | "hover";
    className?: string;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
    ({ children, content = "tooltip", placement = PositionType.Top, arrow = false, trigger, className, ...props }, ref) => {
        const [visible, setVisible] = useState(false);
        const timeoutRef = useRef<number | null>(null);

        const showTooltip = () => {
            if (trigger === 'hover') {
                timeoutRef.current = window.setTimeout(() => {
                    setVisible(true);
                }, 100);
            } else if (trigger === 'click') {
                setVisible(true);
            }
        };

        const hideTooltip = () => {
            if (trigger === 'hover') {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                }
                setVisible(false);
            } else if (trigger === 'click') {
                setVisible(false);
            }
        };

        const toggleTooltip = () => {
            setVisible(!visible);
        };

        return (
            <div className="relative" onMouseLeave={trigger === 'hover' ? hideTooltip : undefined}>
                <div
                    onMouseEnter={trigger === 'hover' ? showTooltip : undefined}
                    onClick={trigger === 'click' ? toggleTooltip : undefined}
                    className="inline-flex cursor-pointer"
                >
                    {children}
                </div>

                {visible && (
                    <div>
                        <div
                            ref={ref}
                            className={cn(tooltipStyles({ type: placement }), className)}
                            {...props}
                        >
                            {content}
                            {arrow && <div className={arrowClasses(placement)} />}
                        </div>
                    </div>
                )}
            </div>
        );
    }
);

export default Tooltip;
