import { Box, IconButton } from "@/components";
import ProfileAvatar from "@/components/Avatar/Basic";
import notification from "../../components/Header/navbarIcons/notification.svg";
import { forwardRef } from "react";
import { heading } from "./data";

const Heading = forwardRef<HTMLDivElement, heading>(
  (
    {
      headingItem,
      imageSrc,
      handleNotification,
      className,
    },
    ref
  ) => {
    return (
      <Box className={`flex items-center justify-between w-full h-full p-5 ${className}`} ref={ref}>
        <Box>{headingItem}</Box>
        <Box>
          <Box className="flex items-center">
            <ProfileAvatar
              className="rounded-full h-12 w-12"
              src={imageSrc} name={""}  />
            <IconButton
              iconUrl={notification}
              onClick={handleNotification}
              iconStyle="size-10"
            />
          </Box>
        </Box>
      </Box>
    );
  }
);
export default Heading;
