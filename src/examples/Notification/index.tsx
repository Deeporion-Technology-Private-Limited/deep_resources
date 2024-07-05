import { Box, IconButton, Text } from "@/components";
import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import right from "./notificationIcon/right.svg";
import dot from "./notificationIcon/threedot.svg";
import { NotificationProp, singleNotification } from "./notificationConst";

const notificationStyle = cva(["w-full px-[60px] max-[620px]:px-[0px] bg-[#F7F8F9]"]);

interface NotifyProps
  extends NotificationProp,
    ComponentProps<typeof Box>,
    VariantProps<typeof notificationStyle> {}

export const Notification = forwardRef<HTMLDivElement, NotifyProps>(
  ({ value=[], className, ...props }, ref) => {
    const [initailValue, setInitialValue] = useState<singleNotification[]>(value)

    const handleAllread = () => {
      const updatedValue = initailValue.map((item) => ({...item, isRead: true }));
      setInitialValue(updatedValue);
    };
    return (
      <Box ref={ref} className={cn(notificationStyle(), className)} {...props}>
        <Box className="py-[24px] max-[620px]:px-[10px]">
          <Text as="h1" className="font-bold text-[24px]">
            Notification
          </Text>
        </Box>
        <Box className="bg-[#fff] px-[24px] max-[620px]:px-[10px]">
          <Box className=" w-full p-[16px_8px] flex justify-end border-b-[1px] border-[#C9CDD2]">
            <Box className="flex gap-2 cursor-pointer" onClick={handleAllread}>
              <img src={right} />
              <Text className="text-[#334155] font-bold text-[14px]">
                Mark all as read
              </Text>
            </Box>
          </Box>
          <Box className="flex flex-col">
            {initailValue?.map((item) => (
              <Box
                className="p-[10px] flex gap-[16px] rounded-[8px] hover:bg-[#F5F1EF] border-b-[1px] border-[#E8EBED]"
                key={item.title}
              >
                <Box className="w-[44px] h-[44px]">
                  <img src={item.profile} className="rounded-full" />
                </Box>
                <Box className="flex flex-col w-full">
                  <Box className="flex items-center">
                    <Box className="w-full">
                      <Text as="h2" className="text-[14px] font-bold text-[#26282B] flex items-center gap-2">
                        {item.title}
                        {!item.isRead && (
                          <Box className="w-[10px] h-[10px] rounded-full bg-[#26282B]"></Box>
                        )}
                      </Text>
                    </Box>
                    <Box
                      className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
                      onClick={item?.onclick}
                    >
                      <IconButton iconUrl={dot} className="p-0" />
                    </Box>
                  </Box>
                  <Box className="flex items-center">
                    <Box className="w-full">
                      <Text as="p" className="text-[14px] text-[#72787F]">
                        {item.message}
                      </Text>
                    </Box>
                    <Box className="w-[24px] h-[24px] flex justify-center items-center">
                      <Text className="text-[14px] w-fit text-[#72787F]">
                        {item.arrivedtime}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
);
