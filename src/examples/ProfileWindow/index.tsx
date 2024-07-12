import { Box, IconButton, Profile, Text } from "@/components";
import { ProfileProps, plateforms } from "./data";
import { platformItem } from "./data";
import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import { forwardRef } from "react";
import Heading from "../Heading";
import { FindIconUrl } from "@/utils/Constant";

const ProfileWindowProps = cva("h-full flex flex-col gap-4");

const ProfileWindow = forwardRef<HTMLDivElement, ProfileProps>(
  ({ name, address, imgSrc, className }, ref) => {
    const socialIcons = (
      icon?: string,
      plateform?: string,
      detail?: string
    ) => {
      return (
        <Box className="border-b-2 flex justify-between p-5 flex-wrap">
          <Box>
            <Box className="flex gap-3">
              <Box>
                <IconButton
                  backgroundColor="transparent"
                  iconUrl={icon}
                  className="p-5 bg-[#E8EBED] rounded-[8px]"
                />
              </Box>
              <Box className="flex flex-col gap-1">
                <Text className="capitalize">{plateform}</Text>
                <Text className="capitalize">{detail}</Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <IconButton
              backgroundColor="transparent"
              iconUrl={FindIconUrl("right.svg")}
              iconStyle="size-8"
            />
          </Box>
        </Box>
      );
    };
    return (
      <Box className={(cn(ProfileWindowProps()), className)} ref={ref}>
        <Heading
          className="w-full"
          imageSrc={FindIconUrl("profileImage.png")}
          headingItem={
            <Text className="font-bold text-2xl capitalize"> profile</Text>
          }
        />
        <Box className="rounded-2xl  h-fit flex flex-col gap-1">
          <Box
            className="w-full  bg-black p-[30px, 42px, 30px, 42px] rounded-t-2xl p-5"
            style={{
              background: "linear-gradient(to right, #BFA59A, #3F271E)",
            }}
          >
            <Box className="flex items-center gap-3">
              <Box className="p-[2px] rounded-full bg-[#F0E5FF] border">
                <Profile
                  className="rounded-full"
                  iconStyle="size-6"
                  src={imgSrc}
                  textStyle="text-[1rem] text-[#ffffff]"
                />
              </Box>
              <Box className="flex flex-col gap-1 text-white">
                <Box className="flex gap-3">
                  <Box>
                    <Text className="font-medium text-2xl capitalize">
                      Name :
                    </Text>
                  </Box>
                  <Box>
                    <Text className="font-normal text-lg capitalize">
                      {name}
                    </Text>
                  </Box>
                </Box>
                <Box className="flex gap-3">
                  <Box>
                    <Text className="font-medium text-2xl capitalize leading-8 w-full">
                      address :
                    </Text>
                  </Box>
                  <Box>
                    <Text className="font-normal text-lg capitalize leading-5">
                      {address}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="p-5">
            <Box>
              <Text className="font-bold text-2xl">BIO</Text>
            </Box>
            <Box className="font-bold text-lg text-[#72787F]">
              Lorem ipsum dolor sit amet
            </Box>
          </Box>
        </Box>
        <Box className="shadow-2xl  w-full">
          {plateforms?.map((item: platformItem) =>
            socialIcons(item?.icon, item?.plateform, item?.detail)
          )}
        </Box>
      </Box>
    );
  }
);
export default ProfileWindow;
