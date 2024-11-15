import React, { forwardRef, useState } from "react";
import { Box, SidebarItemProps, sidebarProps } from "../Layout";
import { Text } from "../Text";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";

const menuStyle = cva([
  "bg-[#0A1942]",
  "w-20",
  "h-screen",
  "flex",
  "flex-col",
  "py-8",
  "relative",
  "text-white",
]);
const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  link,
  onClick,
  active,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      window.location.href = link;
    }
  };

  return (
    <Box
      className={`flex items-center w-full my-4 cursor-pointer px-4 py-2 rounded-md justify-between}
        ${active ? "bg-white/10  border-l-2 border-[#FF7914]" : "bg-transparent"}
        ${isHovered ? "bg-white/10 hover:scale-105" : "text-[#B0C7E5]"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <Box className="flex w-full items-center justify-center relative">
        <img src={icon} className="text-white" />
        {isHovered && (
          <Box className="absolute bg-[#031b59] left-16 p-2 mt-3 shadow-xl capitalize rounded-lg">
            <Text>{label}</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export const Sidebar = forwardRef<HTMLDivElement, sidebarProps>(
  ({ item, className, ...props }, ref) => {
    const [activeItem, setActiveItem] = useState<string>("Dashboard");

    return (
      <Box className={cn(menuStyle({ className }))} ref={ref} {...props}>
        <Box className="flex flex-col items-start space-y-4 px-2 mt-32">
          {item?.map((item) => (
            <SidebarItem
              icon={item?.icon}
              label={item?.label}
              active={activeItem === item?.label}
              onClick={() => setActiveItem(item?.label)}
            />
          ))}
        </Box>
      </Box>
    );
  }
);
