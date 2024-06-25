import { ComponentProps, forwardRef, useState } from "react";
import { Box } from "@/components";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";
import { Topnavbar } from "@/components/Header/TopNavbar";
import { NavbarDirection } from "@/components/Header/type";
import { navIconArray, navItemArry } from "./hemburgerConst";
import profile from "../../components/Header/navbarIcons/image.png";
import { Sidebar } from "@/components/Sidebar";
import { navItemSideBar } from "@/components/Sidebar/sidebarConst";

const hemburgerStyle = cva(["w-full"]);

interface HemBurgerProps {}
interface HemProps
  extends HemBurgerProps,
    ComponentProps<typeof Box>,
    VariantProps<typeof hemburgerStyle> {}

export const Hamburger = forwardRef<HTMLDivElement, HemProps>(
  ({ className, ...props }, ref) => {
    const [show, setShow] = useState<boolean>(false);

    const handleOpen = () => {
      setShow(true);
    };
    const handleClose = () => {
      setShow(false);
    };

    return (
      <Box ref={ref} className={cn(hemburgerStyle(), className)} {...props}>
        {!show && (
          <Topnavbar
            title="Logo"
            direction={NavbarDirection.Row}
            navItem={navItemArry}
            navBarIcons={navIconArray}
            profilePicture={profile}
            isSearch={true}
            isLogin={true}
            hemburgerClick={handleOpen}
          ></Topnavbar>
        )}

        {show && (
          <Box className="absolute top-0 w-full min-h-[100vh] overflow-y-scroll bg-black/50 flex items-center scrollbar-white hamburger">
            <Sidebar
              className="anime"
              title="Logo"
              navItem={navItemSideBar}
              handleClose={handleClose}
            />
          </Box>
        )}
      </Box>
    );
  }
);
