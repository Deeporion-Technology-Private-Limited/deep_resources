import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import person from "../navbarIcons/person.svg";
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
  profile: person,
};

type NavItems = {
  menus: string;
  menuIcon?: string;
  menuIconComponent?: React.ReactNode;
  path?: string;
  submenu?: NavItems[];
};

type profile = {
  profileName?: string;
  profilePicture?: string;
};

type LogoImageProps = {
  children?: React.ReactNode;
  className?: string;
  isLogin?: boolean;
  direction?: NavbarDirection;
  title?: string;
  LogoIcon?: string;
  navItem?: NavItems[];
  showNavItemName?: boolean;
  profileItem: profile;
  hover: boolean;
  largeSidebar?: boolean;
} & ComponentProps<typeof Box> &
  VariantProps<typeof navBarStyles>;

export const SideNavbar = forwardRef<HTMLDivElement, LogoImageProps>(
  (
    {
      className,
      children,
      title,
      LogoIcon = "",
      direction = NavbarDirection.Column,
      navItem,
      profileItem,
      hover,
      showNavItemName = false,
      isLogin = false,
      largeSidebar,
      ...props
    },
    ref
  ) => {
    const [showSubMenuNavItem, setShowSubMenuNavItem] = useState<NavItems[]>([]);

    const handleClick = (item: NavItems) => {
      const close = handleFind(item)
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
        alert("there is nothing we can do");
      }
    };

    const handleFind = (item: NavItems) => {
      return showSubMenuNavItem.find(val => val.menus === item.menus)
    }

    const renderProfileSection = () => {
      if (!isLogin) {
        return (
          <IconButton
            iconUrl={notLogin.profile}
            text={notLogin.profileName}
            className="font-bold"
            direction={ButtonDirection.Column}
          />
        );
      } else {
        return (
          <>
            <Box
              className={` group-hover:hidden ${largeSidebar ? "hidden" : "block"}`}
            >
              <img
                className="w-[38px] h-[38px] rounded-full"
                src={profileItem.profilePicture}
                alt="profile"
              />
            </Box>
            <Box
              className={`group-hover:block w-full ${largeSidebar ? "block" : "hidden"}`}
            >
              <Box className="flex items-center gap-2">
                <img
                  className="w-[38px] h-[38px] rounded-full"
                  src={profileItem.profilePicture}
                  alt="profile"
                />
                <Text as="h2" className="font-[600]">
                  {profileItem.profileName}
                </Text>
              </Box>
            </Box>
          </>
        );
      }
    };

    const renderSubMenu = (submenu: NavItems[]) => {
      return (
        <Box className="pl-4">
          {submenu &&
            submenu?.map((item) => (
              <Box
                className="w-full flex items-center justify-center flex-col"
                key={item.menus}
              >
                <MenuItem
                  leftIcon={item.menuIconComponent}
                  size={MenuItemSize.Medium}
                  label={item.menus}
                  className="shadow-none w-full pl-[10px]"
                  onClick={() => handleClick(item)}
                />
                {handleFind(item)  &&
                  item.submenu &&
                  renderSubMenu(item.submenu)}
              </Box>
            ))}
        </Box>
      );
    };

    return (
      <Box
        ref={ref}
        className={cn(
          navBarStyles({ direction }),
          className,
          "transition-width duration-300 flex flex-col items-center",
          largeSidebar && "w-52, items-start",
          hover && !largeSidebar && " group hover:w-52 hover:items-start"
        )}
        {...props}
      >
        <Box
          className={`w-full flex justify-between gap-16 flex-col h-full 
            group-hover:items-start px-[10px] ${largeSidebar ? "items-start" : "items-center"}`}
        >
          <Box
            className={`gap-[28px] w-full flex flex-col justify-center group-hover:items-start
              ${largeSidebar ? "items-start" : "items-center"}`}
          >
            {LogoIcon !== "" ? (
              <LogoImg logo={LogoIcon} />
            ) : (
              <Logo>{title}</Logo>
            )}
            <Box
              className={`${largeSidebar ? "hidden" : "block"} group-hover:hidden w-full`}
            >
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
              className={`group-hover:block w-full ${largeSidebar ? "block" : "hidden"}`}
            >
              <Box>
                {navItem &&
                  navItem?.map((item) => (
                    <Box
                      className="w-full flex items-center justify-center flex-col"
                      key={item.menus}
                    >
                      <MenuItem
                        leftIcon={item.menuIconComponent}
                        size={MenuItemSize.Medium}
                        label={item.menus}
                        className="shadow-none w-full pl-[10px]"
                        onClick={() => handleClick(item)}
                      />
                      {handleFind(item) &&
                        item.submenu &&
                        renderSubMenu(item.submenu)}
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>
          <Box className={`gap-[28px] pl-[0px] flex-col`}>
            <GroupIconButton direction={ButtonDirection.Column}>
              {renderProfileSection()}
            </GroupIconButton>
          </Box>
        </Box>
      </Box>
    );
  }
);
