import { Text } from "@/components/Text";
import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";

const menuStyle = cva([
  "flex",
  "flex-col",
  "w-full",
  "h-full",
  "cursor-pointer",
  "items-center",
  "justify-center",
  "bg-gray-100",
  "rounded-md",
  "p-3",
  "relative",
  "min-w-[182px]",
  "text-base",
  "text-black",
]);

interface MenuProps
  extends ComponentProps<"div">,
    VariantProps<typeof menuStyle> {
  children?: React.ReactNode;
  className?: string;
  label: string;
  activeColor?: string;
}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, label, className, activeColor, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
      setIsActive(!isActive);
    };

    return (
      <div className="relative" ref={ref}>
        <div
          data-testid="outside"
          className={cn(
            menuStyle({ className }),
            isActive ? activeColor : null
          )}
          onClick={toggleMenu}
          {...props}
        >
          <Text>{label}</Text>
        </div>
        {isOpen && (
          <div className="absolute top-[3.5rem] bg-white w-full flex flex-col gap-2 pt-2 ">
            {children}
          </div>
        )}
      </div>
    );
  }
);
