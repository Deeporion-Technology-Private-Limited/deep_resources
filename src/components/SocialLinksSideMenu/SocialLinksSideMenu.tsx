import React, { FC, ReactNode } from "react";
import { Box, SocialLinksSideMenuPosition } from "../Layout";
import { cn } from "@/utils";

interface ILinkItems {
  href: string;
  label: string;
  icon: ReactNode;
  color?: string;
  background?: string;
  hoverColor?: string;
}

interface ISocialLinksSideMenuProps {
  className?: string;
  position: SocialLinksSideMenuPosition;
  linkItems: ILinkItems[];
  verticalTextItem?: { label: string; href: string };
}

export const SocialLinksSideMenu: FC<ISocialLinksSideMenuProps> = ({
  linkItems,
  className = "",
  position = "left",
  verticalTextItem = { label: "Follow Us", href: "/" },
}): React.JSX.Element => {
  const positionStyles =
    position === "left"
      ? "left-0 rounded-br-xl rounded-tr-xl"
      : "right-0 rounded-bl-xl rounded-tl-lg";

  return (
    <Box
      className={cn(
        "fixed top-[40%] z-[9999] bg-[#3F271E] bg-opacity-70 text-white backdrop-blur-[2rem] shadow-xl",
        positionStyles,
        className
      )}
    >
      {linkItems.map((linkItem) => (
        <Box key={linkItem.href}>
          <a href={linkItem.href} target="_blank" rel="noopener noreferrer">
            <Box
              className={cn(
                "group mx-3 my-4 flex items-center gap-2 text-xl hover:text-[dodgerblue] rounded-md p-1",
                linkItem.color,
                linkItem.hoverColor
                  ? `group-hover:text-[${linkItem.hoverColor}]`
                  : ""
              )}
              style={{
                color: linkItem.color,
                background: linkItem.background,
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = linkItem.hoverColor || "white")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = linkItem.color || "white")
              }
            >
              {linkItem.icon}
            </Box>
          </a>
        </Box>
      ))}

      {verticalTextItem && (
        <p className="mx-auto mb-4 rotate-180 border-b-2 pb-2 text-center text-xl font-bold uppercase tracking-wide [writing-mode:vertical-lr]">
          <a href={verticalTextItem.href}>{verticalTextItem.label}</a>
        </p>
      )}
    </Box>
  );
};
