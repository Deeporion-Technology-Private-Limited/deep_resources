import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Logo, AnchorList, Anchor, Input, Box, LogoImg, GroupIconButton } from "@/components";
import SearchImage from "@/components/Input/Icons/SearchImage";
import { IconButton } from "@/components";
import { NavbarDirection } from "../type";
import { InputType } from "@/components/Input/type";

const navBarStyles = cva(
  ["w-full", "border", "h-[76px]", "flex", "justify-center", "items-center"],
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
  text: string;
  href: string;
};

type navBarIcons = {
  icon?: string;
  iconName?: string;
};

type LogoImageProps = {
  children?: React.ReactNode;
  className?: string;
  isLogin?: boolean;
  isSearch?: boolean;
  direction?: NavbarDirection;
  title?: string;
  LogoIcon?: string;
  navItem?: NavItems[];
  navBarIcons?: navBarIcons[];
  profilePicture?: string;
} & ComponentProps<"div"> &
  VariantProps<typeof navBarStyles>;

export const Topnavbar = forwardRef<HTMLDivElement, LogoImageProps>(
  (
    {
      className,
      children,
      title,
      LogoIcon = "",
      direction = NavbarDirection.Row,
      navItem,
      navBarIcons =[],
      profilePicture,
      isLogin = false,
      isSearch = false,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(navBarStyles({ direction }), className, {
          "py-[20px]": direction === "column",
          "px-[40px]": direction === "row",
        })}
        {...props}
      >
        <Box
          className={` w-full flex justify-between items-center gap-16 ${
            direction === "column" ? "flex-col h-full" : ""
          }`}
        >
          {LogoIcon !== "" ? <LogoImg logo={LogoIcon} /> : <Logo>{title}</Logo>}
          {navItem && navItem?.length > 0 && (
            <AnchorList>
              {navItem?.map((item) => (
                <Anchor key={item.href} href={item.href}>
                  {item.text}
                </Anchor>
              ))}
            </AnchorList>
          )}
          <Box className={"gap-[28px] flex"}>
            {isSearch && (
              <Input
                type={InputType.SearchIcon}
                search={<SearchImage />}
                placeholder="Search here ..."
                className="outline-none rounded-full"
              />
            )}
            {navBarIcons?.length > 0 && (
              <GroupIconButton className="gap-[0px]">
                {navBarIcons?.map((item, index) => (
                  <>
                    {index === 0 ? (
                      !isLogin ? (
                        <IconButton
                          iconUrl={item.icon}
                          text={item.iconName}
                          className="font-bold"
                        />
                      ) : (
                        <img
                          className="w-[38px] h-[38px] rounded-full"
                          src={profilePicture}
                          alt="profile"
                        />
                      )
                    ) : (
                      <IconButton iconUrl={item.icon} text={item.iconName} />
                    )}
                  </>
                ))}
              </GroupIconButton>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
);
