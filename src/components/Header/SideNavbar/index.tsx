import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
// import person from "../navbarIcons/person.svg";
import {
  Logo,
  Box,
  LogoImg,
  GroupIconButton,
  MenuItem,
  Text,
} from "@/components";
import { IconButton } from "@/components";
import { ButtonDirection } from "@/components/Button/type";
import { NavbarDirection } from "../type";
import { MenuItemSize } from "@/components/MenuItem/MenuitemTypes";
import { DownArrow } from "@/components/MenuItem/Icon/icon";

const navBarStyles = cva(
  [
    "w-full",
    "border",
    "h-fit",
    "flex",
    "justify-center",
    "items-center",
    "py-[20px]",
  ],
  {
    variants: {
      direction: {
        [NavbarDirection.Row]: "flex flex-row w-full h-[76px]",
        [NavbarDirection.Column]: "flex flex-col h-[100vh]",
      },
    },
    defaultVariants: {
      direction: NavbarDirection.Row,
    },
  }
);

const notLogin = {
  profileName: "profile",
  // profile: person,
};

export type NavItems = {
  menus: string;
  menuIcon?: string;
  menuLeftIcon?: React.ReactNode;
  path?: string;
  submenu?: NavItems[];
  navComponent?: React.ReactNode;
  onClick?: () => void;
};

export type profile = {
  profileName?: string;
  profilePicture?: string;
};

interface LogoImageProps
  extends ComponentProps<typeof Box>,
    VariantProps<typeof navBarStyles> {
  children?: React.ReactNode;
  className?: string;
  isLogin?: boolean;
  direction?: NavbarDirection;
  title?: string;
  LogoIcon?: string;
  navItem?: NavItems[];
  showNavItemName?: boolean;
  showProfile?: boolean;
  profileItem?: profile;
  logoStyle?: string;
  hover?: boolean;
  largeSidebar?: boolean;
}

export const SideNavbar = forwardRef<HTMLDivElement, LogoImageProps>(
  (
    {
      className,
      children,
      title,
      LogoIcon = "",
      direction = NavbarDirection.Column,
      navItem,
      profileItem = {},
      hover = false,
      showNavItemName = false,
      isLogin = false,
      showProfile = false,
      largeSidebar,
      logoStyle = "",
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
      } else if (item.submenu && item.submenu.length > 0) {
        setShowSubMenuNavItem([...showSubMenuNavItem, item]);
      } else {
        item.onClick ? item.onClick : alert("there is nothing we can do");
      }
    };

    const handleFind = (item: NavItems) => {
      return showSubMenuNavItem.find((val) => val.menus === item.menus);
    };

    const renderProfileSection = () => {
      if (!isLogin) {
        return (
          <IconButton
            // iconUrl={notLogin.profile}
            text={notLogin.profileName}
            className="font-bold"
            direction={ButtonDirection.Column}
          />
        );
      } else {
        return (
          <>
            <Box
              className={` group-hover:hidden ${largeSidebar ? "hidden" : "block"}`}>
              <img
                className="w-[38px] h-[38px] rounded-full"
                src={profileItem.profilePicture}
                alt="profile"
                data-testid="profile"
              />
            </Box>
            <Box
              className={`group-hover:block w-full ${largeSidebar ? "block" : "hidden"}`}>
              <Box className="flex items-center gap-2">
                <img
                  className="w-[38px] h-[38px] rounded-full"
                  src={profileItem.profilePicture}
                  alt="profile"
                />
                <Text
                  as="h2"
                  className="font-[600]">
                  {profileItem.profileName}
                </Text>
              </Box>
            </Box>
          </>
        );
      }
    };

    const common = (item: NavItems) => {
      return (
        <Box
          className="w-full flex items-center justify-center flex-col"
          key={item.menus}>
          <MenuItem
            leftIcon={item.menuLeftIcon}
            rightIcon={(item.navComponent || item.submenu) && <DownArrow />}
            size={MenuItemSize.Medium}
            label={item.menus}
            labelStyle={`${handleFind(item) && "font-[600]"}`}
            className={`p-[10px_12px] ${item.menuLeftIcon && "p-0"} border-l-[4px]  border-transparent hover:border-[#3F271E] bg-transparent justify-between ${showSubMenuNavItem.some((val) => val.menus === item.menus) ? "bg-[#E8EBED] border-[#3F271E]" : ""} active:bg-[#E8EBED] shadow-none w-full rounded-none`}
            onClick={() => handleClick(item)}
            data-testid="Navbardata"
            iconLeftStyle={`${item.menuLeftIcon ? "p-[10px_12px]" : ""} `}
            wannaChangRightIcon={true}
          />
          {handleFind(item) && item.submenu && renderSubMenu(item.submenu)}
        </Box>
      );
    };

    const renderSubMenu = (submenu: NavItems[]) => {
      return (
        <Box className="w-full pl-4" data-testid="submenu">
          {submenu && submenu?.map((item) => common(item))}
        </Box>
      );
    };

    return (
      <Box
        ref={ref}
        className={cn(
          navBarStyles({ direction }),

          "transition-width duration-300 flex flex-col items-center",
          largeSidebar && "w-[260px] items-start",
          hover && !largeSidebar && " group hover:w-[260px] hover:items-start",
          className
          
        )}
         data-testid="side-navbar"
        {...props}>
        <Box
          className={`w-full flex justify-between gap-16 flex-col h-full 
            group-hover:items-start  ${largeSidebar ? "items-start px-[0px]" : "items-center px-[10px]"}`}>
          <Box
            className={`gap-[28px] w-full flex flex-col justify-center group-hover:items-start items-center`}>
            {LogoIcon !== "" ? (
              <LogoImg
                logo={LogoIcon}
                className={logoStyle}
              />
            ) : (
              <Logo>{title}</Logo>
            )}
            <Box
              className={`${largeSidebar ? "hidden" : "block"} group-hover:hidden w-full`}>
              <GroupIconButton direction={ButtonDirection.Column}>
                {navItem &&
                  navItem?.map((item) => (
                    <Box className="w-full flex items-center justify-center">
                      <IconButton
                        iconUrl={item.menuIcon}
                        text={`${showNavItemName ? item.menus : ""}`}
                        direction={ButtonDirection.Column}
                        className="text-[12px]"
                      />
                    </Box>
                  ))}
              </GroupIconButton>
            </Box>
            <Box
              className={`group-hover:block w-full ${largeSidebar ? "block" : "hidden"}`}>
              <Box className="flex flex-col gap-[8px]" >
                {navItem && navItem?.map((item) => common(item))}
              </Box>
            </Box>
          </Box>
          {showProfile && (
            <Box className={`gap-[28px] pl-[0px] flex-col`}>
              <GroupIconButton direction={ButtonDirection.Column}>
                {renderProfileSection()}
              </GroupIconButton>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
);
