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
  Box
} from "@/components";

import setting from "../navbarIcons/settings.svg";
import person from "../navbarIcons/person.svg";
import notification from "../navbarIcons/notification.svg";
import fav from "../navbarIcons/favorite.svg";
import cart from "../navbarIcons/shoping_cart.svg";
import profile from "../navbarIcons/image.png";
import SearchImage from "@/components/Input/Icons/SearchImage";
import { IconButton } from "@/components";

const navBarStyles = cva([
  "w-full",
  "border",
  "h-[76px]",
  "flex",
  "justify-center",
  "items-center",
  "px-[40px]",
]);

type LogoImageProps = {
  children: React.ReactNode;
  className?: string;
  isLogin: boolean;
} & ComponentProps<"div"> &
  VariantProps<typeof navBarStyles>;

export const NavbarEcommerce = forwardRef<HTMLDivElement, LogoImageProps>(
  ({ className, children, isLogin = false, ...props }, ref) => {
    return (
      <Box ref={ref} className={cn(navBarStyles({ className }))} {...props}>
        <Box className="flex justify-between items-center gap-16">
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
            <IconButton iconUrl={person} text="Logo" className="font-bold"/>
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
