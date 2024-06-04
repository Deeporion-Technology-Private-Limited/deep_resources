import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";

const menuStyle = cva(
    [
        "flex",
        "flex-col",
        "w-full",
        "h-full",
        "cursor-pointer",
        "items-center",
        "justify-center",
        "bg-gray-100",
        "rounded-md",
        "p-2",
        "relative",
        "min-w-[182px]",
        "text-base",
        "text-black",
    ]
)

interface MenuProps extends ComponentProps<"div">, VariantProps<typeof menuStyle> {
    children: React.ReactNode;
    className?: string;
    label: string;
}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
    ({ children, label, className, ...props }, ref) => {
        const [isOpen, setIsOpen] = useState(false);
        const [isActive, setIsActive] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
            setIsActive(!isActive);
        }

        return (
            <>
                <div
                    ref={ref}
                    className={cn(menuStyle({ className }), isActive ? "bg-[#D0E3FF]" : null)}
                    onClick={toggleMenu}
                    {...props}
                >
                    <div>{label}</div>
                </div>
                {isOpen && <div className="absolute bg-white ">{children}</div>}
            </>
        );
    }
);