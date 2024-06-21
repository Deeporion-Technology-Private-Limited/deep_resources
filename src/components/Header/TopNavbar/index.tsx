import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import {
  Logo,
  AnchorList,
  Anchor,
  Input,
  Box,
  LogoImg,
  GroupIconButton,
} from "@/components";
import SearchImage from "@/components/Input/Icons/SearchImage";
import { IconButton } from "@/components";
import { NavbarDirection } from "../type";
import { InputType, InputVariant } from "@/components/Input/type";
import hemburgerImg from "../navbarIcons/hamburger.png";
import person from "../navbarIcons/person.svg";

const navBarStyles = cva(
  ["w-[100vw]", "border", "flex", "justify-center", "items-center"],
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

type NavItems = {
  text: string;
  href: string;
  component?: React.ReactNode;
};

type navBarIcons = {
  icon?: string;
  iconName?: string;
};

type HemburgerProps = {
  hemburgerClick?: () => void;
  isHemburger: boolean;
};

interface LogoImageProps
  extends ComponentProps<typeof Box>,
    VariantProps<typeof navBarStyles> {
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
  hemburger?: HemburgerProps;
}
// { icon: person, iconName: "Logo" },

export const Topnavbar = forwardRef<HTMLDivElement, LogoImageProps>(
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
      hemburger = {},
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
      <Box className="relative">
        <Box
          ref={ref}
          className={cn(navBarStyles({ direction }), className, {
            "py-[20px]": direction === "column",
            "px-[40px]": direction === "row",
          })}
          {...props}
        >
          <Box
            className={` w-full flex justify-between items-center topgap ${
              direction === "column" ? "flex-col h-full" : ""
            }`}
          >
            {LogoIcon !== "" ? (
              <LogoImg logo={LogoIcon} className="w-[45px]" />
            ) : (
              <Logo>{title}</Logo>
            )}
            {navItem && navItem?.length > 0 && (
              <AnchorList className="flex-wrap show relative">
                {navItem?.map((item) => (
                  <Anchor
                    key={item.href}
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
                    <IconButton
                      iconUrl={person}
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
                      <IconButton iconUrl={item.icon} key={item.icon} />
                    </>
                  ))}
                </GroupIconButton>
              )}
            </Box>
            {
              <Box className="hide">
                <IconButton
                  iconUrl={hemburgerImg}
                  onClick={hemburger.hemburgerClick}
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
