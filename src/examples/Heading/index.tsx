import { Box, IconButton, ProfileAvatar } from "@/components";
import { forwardRef } from "react";
import { heading } from "./data";
import { FindIconUrl } from "@/utils/Constant";

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
      <Box className={`flex items-center justify-between w-full h-fit p-5 ${className}`} ref={ref}>
        <Box>{headingItem}</Box>
        <Box>
          <Box className="flex items-center">
            <ProfileAvatar
              className="rounded-full h-12 w-12"
              src={imageSrc} name={""}  />
            <IconButton
              iconUrl={FindIconUrl('OutlineNotifications.svg')}
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
