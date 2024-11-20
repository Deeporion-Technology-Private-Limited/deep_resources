import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { cn } from "../../../utils";
import { Box } from "../../Layout";
import { ButtonSize } from "../../types";

const profileStyles = cva(
  "flex items-center border border-white rounded-full justify-center",
  {
    variants: {
      size: {
        [ButtonSize.Small]: "h-[4rem] w-[4rem] text-[2rem]",
        [ButtonSize.Medium]: "h-[8rem] w-[8rem] text-[4rem]",
        [ButtonSize.Large]: "h-[10rem] w-[12rem] text-[6rem]",
      },
    },
    defaultVariants: {
      size: ButtonSize.Medium,
    },
  }
);

const profileName = (name: string): string | null => {
  const fullName = name
    ? name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : null;

  return fullName;
};

const getColorFromFullName = (name: string): string => {
  const hashCode = name
    ?.toUpperCase()
    ?.split("")
    ?.reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
  const color = `#${(hashCode & 0x00ffffff)
    .toString(16)
    .toUpperCase()
    .padStart(6, "0")}`;

  return color;
};

export interface ProfileAvatarProps
  extends ComponentProps<"div">,
    VariantProps<typeof profileStyles> {
  src?: string;
  name: string;
  bgImgColor?: string;
  className?: string;
  textColor?: string;
  handleNav?: () => void;
}

export const ProfileAvatar = React.forwardRef<
  HTMLDivElement,
  ProfileAvatarProps
>(
  (
    {
      src,
      name,
      bgImgColor = "",
      className = "",
      textColor = "white",
      size = ButtonSize.Medium,
      handleNav,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {src ? (
          <img
            className={cn(profileStyles({ size }), className)}
            src={src}
            onClick={handleNav}
            alt="Profile Avatar"
          />
        ) : (
          <Box
            ref={ref}
            className={cn(profileStyles({ size }), className)}
            {...props}
            onClick={handleNav}
            style={{
              backgroundColor: bgImgColor || getColorFromFullName(name),
              color: textColor,
            }}
            {...props}
            data-testid="size"
          >
            {profileName(name)}
          </Box>
        )}
      </>
    );
  }
);
