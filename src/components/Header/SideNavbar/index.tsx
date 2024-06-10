import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import {
  Logo,
  Toolbar,
  IconsList,
  Box,
  LogoImg,
  GroupIconButton,
} from "@/components";
import { IconButton } from "@/components";
import { ButtonDirection } from "@/components/Button/type";
import { NavbarDirection } from "../type";

const navBarStyles = cva(
  [
    "w-full",
    "border",
    "h-fit",
    "flex",
    "justify-center",
    "items-center","p-[20px]",
  ],
  {
    variants: {
      direction: {
        [NavbarDirection.Row]: "flex flex-row w-full h-[76px]",
        [NavbarDirection.Column]: "flex flex-col px-[10px] h-[100vh]",
      },
    },
    defaultVariants: {
      direction: NavbarDirection.Row,
    },
  }
);

type NavItems = {
  manus?: string;
  manuIcon?: string;
};

type navBarIcons = {
  icon?: string;
  iconName?: string;
};

type LogoImageProps = {
  children?: React.ReactNode;
  className?: string;
  isLogin?: boolean;
  direction?: NavbarDirection;
  title?: string;
  LogoIcon?: string;
  navItem?: NavItems[];
  navBarIcons: navBarIcons[];
  profilePicture?: string;
} & ComponentProps<"div"> &
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
      navBarIcons,
      profilePicture,
      isLogin = false,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(navBarStyles({ direction }), className)}
        {...props}
      >
        <Box
          className={`flex justify-between items-center gap-16 flex-col h-full`}
        >
          {LogoIcon !== "" ? <LogoImg logo={LogoIcon} /> : <Logo>{title}</Logo>}

          <Toolbar className={`gap-[28px] pl-[0px] flex-col`}>
            <GroupIconButton direction={ButtonDirection.Column}>
              {navItem &&
                navItem?.map((item) => (
                  <IconButton
                    iconUrl={item.manuIcon}
                    text={item.manus}
                    direction={ButtonDirection.Column}
                    className="text-[12px]"
                  />
                ))}
              
            </GroupIconButton>
          </Toolbar>
          <Toolbar className={`gap-[28px] pl-[0px] flex-col`}>
            <IconsList className="flex-col">
              {navBarIcons?.map((item, index) => (
                <>
                  {index === 0 ? (
                    !isLogin ? (
                      <IconButton
                        iconUrl={item.icon}
                        text={item.iconName}
                        className="font-bold"
                        direction={ButtonDirection.Column}
                      />
                    ) : (
                      <img
                        className="w-[38px] h-[38px] rounded-full"
                        src={profilePicture}
                        alt="profile"
                      />
                    )
                  ) : (
                    <IconButton
                      iconUrl={item.icon}
                      text={item.iconName}
                      direction={ButtonDirection.Column}
                    />
                  )}
                </>
              ))}
            </IconsList>
          </Toolbar>
        </Box>
      </Box>
    );
  }
);
