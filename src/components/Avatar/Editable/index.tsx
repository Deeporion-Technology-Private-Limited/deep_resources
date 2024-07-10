import { forwardRef } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { Box, Text } from "@/components";
import { ButtonSize } from "@/components/Button/type";
import Cam from "../icons/Camera.svg";
import { FindIconUrl } from "@/utils/Constant";
const profileStyles = cva(
  "flex items-center border border-white rounded-full justify-center relative",
  {
    variants: {
      size: {
        [ButtonSize.Small]: "h-[4rem] w-[4rem] text-[2rem]",
        [ButtonSize.Medium]: "h-[8rem] w-[8rem] text-[4rem]",
        [ButtonSize.Large]: "h-[12rem] w-[12rem] text-[6rem]",
      },
    },
    defaultVariants: {
      size: ButtonSize.Medium,
    },
  }
);

export interface ProfileAvatarProps
  extends ComponentProps<typeof Box>,
    VariantProps<typeof profileStyles> {
  src?: string;
  size?: ButtonSize;
  className?: string;
  textColor?: string;
  iconStyle?: string;
  textStyle?: string;
}

const Profile = forwardRef<HTMLDivElement, ProfileAvatarProps>(
  (
    {
      src,
      textStyle = "text-[#ffffff]",
      className = "",
      size = ButtonSize.Medium,
      iconStyle = "size-16",
      ...props
    },
    ref
  ) => {
    return (
      <Box
        className={cn(profileStyles({ size }), className)}
        ref={ref}
        {...props}>
        <img
          className="h-full w-full rounded-full"
          src={src}
          alt="Profile Avatar"
        />
        <Box
          className="absolute bg-[#000000BF] bg-opacity-60 h-full w-full flex
                               justify-center items-center rounded-full">
          <Box className="flex flex-col items-center justify-center ">
            <img
              src={FindIconUrl("OutlineCameraAlt.svg")}
              className={"text-white bg-white"}
              data-testid="icon"
            />
            <Text className={textStyle}>Edit Picture</Text>
          </Box>
        </Box>
      </Box>
    );
  }
);

export default Profile;
