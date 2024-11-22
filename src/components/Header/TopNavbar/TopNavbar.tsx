import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { NavbarDirection } from "../../types";
import { cn } from "../../../utils";
import { GroupIconButton } from "../../Button/GroupIconButton";
import { SingleIconButton } from "../../Button/SingleIconButton";
import { FindIconUrl } from "../../../utils/Constant";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AnchorList, Box, Logo, LogoImg, ProfileAvatar } from "../..";
import { ITopNavbarProps } from "./TopNavConst";
import ToastServices from "@/ToastServices";
import { SearchVariant } from "@/components/Search/SearchVariant";

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
  },
);

interface INavItems {
  href: string;
  text: string;
  component?: React.ReactNode;
}

type TopNavProp = ITopNavbarProps &
  ComponentProps<typeof Box> &
  VariantProps<typeof navBarStyles>;

export const Topnavbar = forwardRef<HTMLDivElement, TopNavProp>(
  (
    {
      data,
      className,
      children,
      title,
      LogoIcon = "",
      direction = NavbarDirection.Row,
      navItem = [],
      navBarIcons = [],
      profilePicture,
      isLogin = false,
      isSearch = false,
      hemburgerClick,
      handleLogin,
      handleProfile,
      searchItem = "",
      setSearchItem,
      handleNavigate,
      name,
      ...props
    },
    ref,
  ) => {
    const [isHoverComponent, setIsHoverComponent] = useState<any>(null);
    const [hoverX, setHoverX] = useState<number | null>(null);
    const [hoverY, setHoverY] = useState<number | null>(null);
    const [colourText, setText] = useState("");

    const handleEnter = (
      item: INavItems,
      event: React.MouseEvent<HTMLAnchorElement>,
    ) => {
      // Store the coordinates of the hovered item
      const rect = event.currentTarget.getBoundingClientRect();
      setHoverX(rect.left);
      setHoverY(rect.top);
      setIsHoverComponent(item.component);
      setText(item.text);
    };

    const handleMouseOut = () => {
      setIsHoverComponent(null);
      setText("");
    };
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const handleMouseEnter = () => {
      setShowDropdown(true);
    };

    const handleMouseLeave = () => {
      setTimeout(() => {
        setShowDropdown(false);
      }, 5000);
      // setShowDropdown(false);
    };

    const handleLogout = () => {
      localStorage.removeItem("userToken");
      ToastServices.showToast({
        message: "User LogOut SuccessFull !",
        autoClose: 3000,
        type: "warning",
      });
      window.location.reload();
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
            className={`flex w-full items-center justify-between ${
              direction === "column" ? "h-full flex-col" : ""
            } mobile`}
          >
            {LogoIcon !== "" ? (
              <LogoImg
                logo={LogoIcon}
                className="w-[45px] cursor-pointer"
                onClick={handleNavigate}
              />
            ) : (
              <Logo className="mobile1 cursor-pointer" onClick={handleNavigate}>
                {title}
              </Logo>
            )}

            {navItem && navItem?.length > 0 && (
              <AnchorList className="show relative box-border flex bg-transparent pl-2">
                {navItem?.map((item) => (
                  <Link
                    key={item.text}
                    to={item.href}
                    state={{ id: item?.id }}
                    onMouseEnter={(e) => handleEnter(item, e)}
                    className={`${item.text === colourText ? "rounded-md border-b-4 border-r-2 border-[#5E463B]" : ""} box-border px-6 py-2`}
                  >
                    {item.text}
                  </Link>
                ))}
              </AnchorList>
            )}
            <Box className={"show flex gap-[28px]"}>
              {isSearch && data && (
                <SearchVariant
                  searchItem={searchItem}
                  setSearchItem={setSearchItem}
                  data={data}
                />
              )}
              {navBarIcons?.length > 0 && (
                <GroupIconButton className="gap-[10px]">
                  {!isLogin ? (
                    <SingleIconButton
                      iconUrl={FindIconUrl("person.svg")}
                      text="Log in"
                      className="p-[0.5rem] font-bold"
                      onClick={handleLogin}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  ) : (
                    <ProfileAvatar
                      className="h-[2.6rem] w-[2.6rem] text-[1rem] font-semibold"
                      src={profilePicture}
                      name={name || ""}
                      handleNav={handleProfile}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  )}
                  {navBarIcons?.map((item) => {
                    return item?.iconName === "Location" ||
                      item?.iconName === "Setting" ? (
                      isLogin && (
                        <SingleIconButton
                          iconUrl={item.icon}
                          key={item.icon}
                          onClick={item.onClick}
                          className=""
                        />
                      )
                    ) : (
                      <Box>
                        <SingleIconButton
                          iconUrl={item.icon}
                          key={item.icon}
                          onClick={item.onClick}
                          className=" "
                        />
                        {(item?.count ? item?.count : 0) > 0 && (
                          <p className="absolute top-4 flex w-6 items-center justify-center rounded-full bg-red-500 text-sm text-white">
                            {item?.count}
                          </p>
                        )}
                      </Box>
                    );
                  })}
                </GroupIconButton>
              )}
            </Box>
            {
              <Box className="hide mobile1">
                <SingleIconButton iconUrl={<TfiMenu />} onClick={hemburgerClick} />
              </Box>
            }
          </Box>
        </Box>
        {isHoverComponent && hoverX !== null && hoverY !== null && (
          <div
            className="hovered-component absolute top-[110%] z-20"
            style={{ left: hoverX - 10 }}
            onMouseLeave={handleMouseOut}
          >
            {isHoverComponent}
          </div>
        )}
        {/* Dropdown Menu */}
        {showDropdown && (
          <div
            className={`absolute ${isLogin ? `right-[16%]` : `right-[10%]`} top-[3.8rem] w-[14%] rounded-lg bg-white p-4 shadow-lg`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isLogin ? (
              <ul className="space-y-2" onMouseEnter={handleMouseEnter}>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <Link to="/setting">Orders</Link>
                </li>
                <li>
                  <Link to="/">Saved VPA</Link>
                </li>
                <li>
                  <Link to="/contact_us">Contact Us</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            ) : (
              <ul
                className="space-y-4 text-left text-base font-normal"
                onMouseEnter={handleMouseEnter}
              >
                <li className="flex justify-between border-b border-[#D7C7C1] pb-4">
                  <span>New Customer ?</span>
                  <Link
                    to="/sign_up"
                    className="pl-1 text-base font-bold text-[#7D5D4F]"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <Link to="/setting">Orders</Link>
                </li>
                <li>
                  <Link to="/">Saved VPA</Link>
                </li>
                <li>
                  <Link to="/contact_us">Contact Us</Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </Box>
    );
  },
);
