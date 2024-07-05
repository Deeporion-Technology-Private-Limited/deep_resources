import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Logo,
  LogoImg,
  MenuItem,
  Text,
} from "@/components";
import close from "../Header/navbarIcons/Vector.svg";
import { MenuItemSize } from "../MenuItem/MenuitemTypes";
import { DownArrow } from "../MenuItem/Icon/icon";
import {SidbarProps } from "./sidebarConst";
import { NavItems } from "../Header/SideNavbar";

const navBarStyles = cva([
  "w-[320px] bg-[#D7C7C1] p-[30px_12px] min-h-screen flex flex-col gap-[30px] scrollbar-white",
]);

interface Prop
  extends SidbarProps,
    ComponentProps<typeof Box>,
    VariantProps<typeof navBarStyles> {}

export const Sidebar = forwardRef<HTMLDivElement, Prop>(
  (
    {
      className,
      children,
      title,
      LogoIcon = "",
      navItem,
      profileItem,
      isLogin = false,
      handleClose,
      handleLogin,
      userLogedIn = false,
      ...props
    },
    ref
  ) => {
    const [showSubMenuNavItem, setShowSubMenuNavItem] = useState<NavItems[]>(
      []
    );

    const handleClick = (item: NavItems) => {
      const close = handleFind(item);
      if (close) {
        const closeList = showSubMenuNavItem.filter(
          (sub) => sub.menus !== item.menus
        );
        setShowSubMenuNavItem(closeList);
        return;
      }
      if (item.path) {
        window.location.href = item.path;
      } else if (
        item.navComponent ||
        (item.submenu && item.submenu.length > 0)
      ) {
        setShowSubMenuNavItem([...showSubMenuNavItem, item]);
      } else {
        item.onClick ? item.onClick(): alert("We can't do anything");
      }
    };

    const handleFind = (item: NavItems) => {
      return !!showSubMenuNavItem.find((val) => val.menus === item.menus);
    };

    const commonCode = (item: NavItems) => {
      return (
        <>
          <MenuItem
            leftIcon={item.menuLeftIcon}
            rightIcon={(item.navComponent || item.submenu) && <DownArrow />}
            size={MenuItemSize.Medium}
            label={item.menus}
            labelStyle={`${handleFind(item) && "font-[600]"}`}
            className={`${item.menuLeftIcon ? "p-0" : "p-[12px]"} bg-transparent justify-between ${showSubMenuNavItem.some((val) => val.menus === item.menus) ? "bg-[#EBE3E0]" : ""} shadow-none w-full hover:bg-[#EBE3E0] active:bg-[#EBE3E0]`}
            onClick={() => handleClick(item)}
            iconLeftStyle={`${item.menuLeftIcon ? "p-[10px_12px]" : ""} `}
            wannaChangRightIcon={true}
          />
          {handleFind(item) &&
            (item.navComponent ? (
              <Box className="w-full flex items-center justify-center flex-col my-[4px]">
                {item.navComponent}
              </Box>
            ) : (
              item.submenu && renderSubMenu(item)
            ))}
        </>
      );
    };

    const renderSubMenu = (Obj: NavItems) => {
      return (
        <Box className="w-full mt-[4px]">
          {Obj.submenu &&
            Obj.submenu?.map((item) => (
              <Box
                className="w-full pl-4 flex items-center justify-center flex-col mb-[4px] gap-[4px]"
                key={item.menus}
              >
                {commonCode(item)}
              </Box>
            ))}
        </Box>
      );
    };
    return (
      <Box ref={ref} className={cn(navBarStyles(), className)} {...props}>
        <Box className="flex justify-between px-2">
          <IconButton iconUrl={close} className="p-0" onClick={handleClose} />
          {LogoIcon !== "" ? (
            <LogoImg logo={LogoIcon} />
          ) : (
            title && <Logo>{title}</Logo>
          )}
        </Box>
        {!userLogedIn && (
          <Box className="p-[10px_12px] bg-[#EBE3E0] flex items-center rounded-[8px]">
            <Text as="p" className="text-[14px] font-[500]">
              Hey, Let’s Get Started
            </Text>
            <Button className="bg-[#3F271E] w-[85px]" onClick={handleLogin}>Login</Button>
          </Box>
        )}
        <Box className={`w-full block`}>
          <Box>
            {navItem &&
              navItem?.map((item) => (
                <Box
                  className="w-full flex items-center justify-center flex-col mb-[4px] gap-[4px]"
                  key={item.menus}
                >
                  {commonCode(item)}
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    );
  }
);
