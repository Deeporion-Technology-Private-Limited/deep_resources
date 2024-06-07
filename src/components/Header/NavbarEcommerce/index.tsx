import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import {
  Logo,
  AnchorList,
  Anchor,
  Toolbar,
  IconsList,
  Input,
  Box,
  LogoImg,
} from "@/components";

import setting from "../navbarIcons/settings.svg";
import person from "../navbarIcons/person.svg";
import notification from "../navbarIcons/notification.svg";
import fav from "../navbarIcons/favorite.svg";
import cart from "../navbarIcons/shoping_cart.svg";
import profile from "../navbarIcons/image.png";
import log from "../navbarIcons/logo.svg";
import SearchImage from "@/components/Input/Icons/SearchImage";
import { IconButton, GroupIconButton} from "@/components";
import { ButtonDirection } from "@/components/Button/type";

const navBarStyles = cva(
  ["w-full", "border", "h-[76px]", "flex", "justify-center", "items-center"],
  {
    variants: {
      variant: {
        row: "flex flex-row w-full h-[76px]",
        column: "flex flex-col px-[10px] h-[100vh]",
      },
    },
    defaultVariants: {
      variant: "row",
    },
  }
);

type Variant = "row" | "column";
type LogoImageProps = {
  children: React.ReactNode;
  className?: string;
  isLogin: boolean;
  variant?: Variant;
} & ComponentProps<"div"> &
  VariantProps<typeof navBarStyles>;

export const NavbarEcommerce = forwardRef<HTMLDivElement, LogoImageProps>(
  ({ className, children, variant, isLogin = false, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(navBarStyles({ className, variant }), {
          "py-[20px]": variant === "column",
          "px-[40px]": variant === "row",
        })}
        {...props}
      >
        <Box
          className={`flex justify-between items-center gap-16 ${variant ? "flex-col h-full" : ""}`}
        >
          {children}
        </Box>
      </Box>
    );
  }
);
export const ComponentWithLogin = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <>
      <Logo>LOGO</Logo>
      <AnchorList>
        <Anchor href="https://example.com">Menu</Anchor>
        <Anchor href="https://example.com">Item</Anchor>
        <Anchor href="https://example.com">Menu</Anchor>
        <Anchor href="https://example.com">Item</Anchor>
      </AnchorList>
      <Toolbar className={"gap-[28px]"}>
        <Input
          type="search icon"
          search={<SearchImage />}
          placeholder="Search here ..."
          className="outline-none rounded-full"
        />
        <IconsList>
          {!isLogin ? (
            <IconButton iconUrl={person} text="Logo" className="font-bold" />
          ) : (
            <img
              className="w-[38px] h-[38px] rounded-full"
              src={profile}
              alt="profile"
            />
          )}
          <IconButton iconUrl={notification} />
          <IconButton iconUrl={fav} />
          <IconButton iconUrl={cart} />
          <IconButton iconUrl={setting} />
        </IconsList>
      </Toolbar>
    </>
  );
};

export const HorizontalNavBar = ({
  isLogin,
  variant,
}: {
  isLogin: boolean;
  variant?: Variant;
}) => {
  const direction = variant === "column" ? "flex-col" : "";
  return (
    <>
      <LogoImg logo={log} />
      {console.log(variant)}
      <Toolbar className={`gap-[28px] pl-[0px] ${direction}`}>
        <GroupIconButton direction={ButtonDirection.Column}>
          <IconButton
            iconUrl={notification}
            text="menu"
            direction={ButtonDirection.Column}
            className="text-[12px]"
          />
          <IconButton
            iconUrl={fav}
            text="contact"
            className="text-[12px]"
            direction={ButtonDirection.Column}
          />
          <IconButton
            iconUrl={cart}
            text="item"
            className="text-[12px]"
            direction={ButtonDirection.Column}
          />
          <IconButton
            iconUrl={setting}
            text="menu"
            className="text-[12px]"
            direction={ButtonDirection.Column}
          />
        </GroupIconButton>
      </Toolbar>
      <Toolbar className={`gap-[28px] pl-[0px] ${direction}`}>
        {variant === "row" && (
          <Input
            type="search icon"
            search={<SearchImage />}
            placeholder="Search here ..."
            className="outline-none rounded-full"
          />
        )}
        <IconsList className={`${direction}`}>
          {!isLogin ? (
            <IconButton iconUrl={person} text="Logo" className="font-bold" />
          ) : (
            <img
              className="w-[38px] h-[38px] rounded-full"
              src={profile}
              alt="profile"
            />
          )}

          {variant === "row" && (
            <>
              <IconButton
                iconUrl={notification}
                onClick={() => console.log("working")}
              />
              <IconButton iconUrl={fav} />
              <IconButton iconUrl={cart} />
              <IconButton iconUrl={setting} />
            </>
          )}
        </IconsList>
      </Toolbar>
    </>
  );
};
