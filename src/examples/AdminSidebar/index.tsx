import { NavItems, SideNavbar } from "@/components/Header/SideNavbar";
import { NavbarDirection } from "@/components/Header/type";
import { cn } from "@/utils";

import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Box } from "@/components";

const userSideStyle = cva(["flex", "item-start"]);
interface usersideProps
  extends ComponentProps<typeof Box>,
    VariantProps<typeof userSideStyle> {
      Data : NavItems[];
      logo ?:string;
    }

export const AdminSidebar = forwardRef<HTMLDivElement, usersideProps>(
  ({ Data, logo="", className, children, ...props }, ref) => {
    return (
      <Box ref={ref} className={cn(userSideStyle(), className)} {...props}>
        <SideNavbar
          className="w-[260px]"
          direction={NavbarDirection.Column}
          navItem={Data}
          LogoIcon={logo}
          logoStyle="w-[216px]"
          showNavItemName={true}
          largeSidebar={true}
          showProfile={false}
        />
      </Box>
    );
  }
);
