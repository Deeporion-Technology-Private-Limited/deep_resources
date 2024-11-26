import { Box, DefaultButton, Headings, PopupModal, Text } from "@/components";
import {
  ButtonIconPosition,
  ButtonSize,
  ButtonVariant,
} from "@/components/types";
import { PopupButtons, PopupItem } from "./data";
import { forwardRef } from "react";

const SocialMediaPopup = forwardRef<HTMLDivElement, PopupItem>(
  ({ item }, ref) => {
    const icons = (
      iconUrl: string | undefined,
      buttonText: string | undefined,
      platform: string | undefined,
      clickEvent: (() => void) | undefined
    ) => {
      return (
        <Box className="pl-5 pr-5">
          <Box className="flex h-fit border-b-2 justify-between items-center pb-5 pt-5 flex-wrap">
            <Box>
              <Text
                as="h1"
                className="text-[20px] font-medium leading-[21px] capitalize"
              >
                {platform}
              </Text>
            </Box>
            <Box>
              <DefaultButton
                hover
                className="text-[14px] font-medium leading-[21px] w-[183px] h-[41px] p-[8px,10px,8px,10px] rounded-lg font-sans capitalize"
                iconPosition={ButtonIconPosition.Left}
                iconUrl={iconUrl}
                size={ButtonSize.Large}
                variant={ButtonVariant.DefaultDarkBackground}
                onClick={clickEvent}
              >
                {buttonText}
              </DefaultButton>
            </Box>
          </Box>
        </Box>
      );
    };
    return (
      <Box ref={ref}>
        <PopupModal
          crossIcon
          header={
            <Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]">
              <Headings
                FontSize="text-xl"
                fontWeight="font-bold"
                text="Connect Social Media Accounts"
              />
            </Box>
          }
          modalbutton
          button02={false}
          button01={false}
          onClose={() => {}}
          openModal
          children={
            <Box>
              {item?.map((val: PopupButtons) =>
                icons(val.icon, val.buttonText, val.text, val.click)
              )}
            </Box>
          }
        />
      </Box>
    );
  }
);
export default SocialMediaPopup;
