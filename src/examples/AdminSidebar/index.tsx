import { SideNavbar } from "@/components/Header/SideNavbar";
import { NavbarDirection } from "@/components/Header/type";
import { cn } from "@/utils";
import log from "../../components/Header/navbarIcons/logo.svg";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Box } from "@/components";
import { navItemDetail } from "@/components/Header/SideNavbar/sidenavbarconst";

const userSideStyle = cva(["flex", "items-center"]);
interface usersideProps
  extends ComponentProps<typeof Box>,
    VariantProps<typeof userSideStyle> {}

export const AdminSidebar = forwardRef<HTMLDivElement, usersideProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Box ref={ref} className={cn(userSideStyle(), className)} {...props}>
        <SideNavbar
          className="w-[260px]"
          direction={NavbarDirection.Column}
          navItem={navItemDetail}
          LogoIcon={log}
          showNavItemName={true}
          largeSidebar={true}
          showProfile={false}
        />
      </Box>
    );
  }
);
