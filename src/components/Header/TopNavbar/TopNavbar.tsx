import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { cn } from "../../../utils";
import { FindIconUrl } from "../../../utils/Constant";
import { GroupIconButton, SingleIconButton } from "../../Button";
import { Box, InputType, InputVariant } from "../../Layout";
import { LogoImg } from "../../LogImg/LogoImg";
import { NavbarDirection, TopNavbarProps } from "../../types";
import { Anchor } from "../Anchor";
import { AnchorList } from "../AnchorList";
import { Logo } from "../Logo";
import SearchImage from "../../../images/InputIcons/SearchImage";
import { Input } from "../../Input";

const navBarStyles = cva(
  ["w-full", "border", "flex", "justify-center", "items-center"],
  {
    variants: {
      direction: {
        [NavbarDirection.Row]: "py-[16px]",
        [NavbarDirection.Column]: "flex flex-col px-[10px] h-[100vh]",
      },
    },
    defaultVariants: {
      direction: NavbarDirection.Row,
    },
  }
);

type TopNavProp = TopNavbarProps &
  ComponentProps<typeof Box> &
  VariantProps<typeof navBarStyles>;

export const TopNavbar = forwardRef<HTMLDivElement, TopNavProp>(
  (
    {
      className,
      children,
      title,
      LogoIcon = "",
      direction = NavbarDirection.Row,
      navItem,
      navBarIcons = [],
      profilePicture,
      isLogin = false,
      isSearch = false,
      hemburgerClick,
      ...props
    },
    ref
  ) => {
    const [isHoverComponent, setIsHoverComponent] = useState<any>(null);
    const [hoverX, setHoverX] = useState<number | null>(null);
    const [hoverY, setHoverY] = useState<number | null>(null);

    const handleEnter = (
      item: any,
      event: React.MouseEvent<HTMLAnchorElement>
    ) => {
      // Store the coordinates of the hovered item
      const rect = event.currentTarget.getBoundingClientRect();
      setHoverX(rect.left);
      setHoverY(rect.top);
      setIsHoverComponent(item.component);
    };

    const handleMouseOut = () => {
      setIsHoverComponent(null);
    };
    return (
      <Box className="relative w-full">
        <Box
          ref={ref}
          className={cn(navBarStyles({ direction }), className, {
            "py-[20px]": direction === "column",
            "px-[40px]": direction === "row",
          })}
          {...props}
        >
          <Box
            className={` w-full flex justify-between items-center ${
              direction === "column" ? "flex-col h-full" : ""
            } mobile`}
          >
            {LogoIcon !== "" ? (
              <LogoImg logo={LogoIcon} className="w-[45px]" />
            ) : (
              <Logo className="mobile1">{title}</Logo>
            )}
            {navItem && navItem?.length > 0 && (
              <AnchorList className="flex-wrap show relative">
                {navItem?.map((item) => (
                  <Anchor
                    key={item.text}
                    href={item.href}
                    onMouseEnter={(e) => handleEnter(item, e)}
                  >
                    {item.text}
                  </Anchor>
                ))}
              </AnchorList>
            )}
            <Box className={"gap-[28px] flex show"}>
              {isSearch && (
                <Input
                  value=""
                  variant={InputVariant.Standard}
                  type={InputType.SearchIcon}
                  search={<SearchImage />}
                  placeholder="Search here ..."
                  className="outline-none rounded-full"
                />
              )}
              {navBarIcons?.length > 0 && (
                <GroupIconButton className="gap-[0px] flex-wrap">
                  {!isLogin ? (
                    <SingleIconButton
                      iconUrl={FindIconUrl("person.svg")}
                      text="Logo"
                      className="font-bold"
                    />
                  ) : (
                    <img
                      className="w-[38px] h-[38px] rounded-full"
                      src={profilePicture}
                      alt="profile"
                    />
                  )}
                  {navBarIcons?.map((item) => (
                    <>
                      <SingleIconButton
                        iconUrl={FindIconUrl(`${item.icon}`)}
                        key={item.icon}
                        onClick={item.onClick}
                      />
                    </>
                  ))}
                </GroupIconButton>
              )}
            </Box>
            {
              <Box className="hide mobile1">
                <SingleIconButton
                  iconUrl={FindIconUrl("hemburger.png")}
                  onClick={hemburgerClick}
                />
              </Box>
            }
          </Box>
        </Box>
        {isHoverComponent && hoverX !== null && hoverY !== null && (
          <div
            className="hovered-component absolute z-20 top-[110%]"
            style={{ left: hoverX - 10 }}
            onMouseLeave={handleMouseOut}
          >
            {isHoverComponent}
          </div>
        )}
      </Box>
    );
  }
);
