import {
  Box,
  Headings,
  PopupModal,
  SingleIconButton,
  Text,
} from "@/components";
import { IconValues, ShareItem } from "@/components/types";
import { FindIconUrl } from "@/utils/Constant";
import { forwardRef } from "react";

const ShareWindow = forwardRef<HTMLDivElement, ShareItem>(({ item }, ref) => {
  const buttons = (
    iconurl: string | undefined,
    btext: string | undefined,
    click: (() => void) | undefined
  ) => {
    return (
      <Box className="flex flex-col justify-center items-center">
        <SingleIconButton
          backgroundColor="transparent"
          className=" text-[#FFFFFF] rounded-full shadow-xl w-max"
          iconUrl={FindIconUrl(`${iconurl}`)}
          onClick={click}
        />
        <Text as={"span"} className="w-max capitalize">
          {btext}
        </Text>
      </Box>
    );
  };
  return (
    <Box ref={ref}>
      <PopupModal
        crossIcon
        header={
          <Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]">
            <Headings FontSize="text-xl" fontWeight="font-bold" text="Share" />
          </Box>
        }
        modalbutton
        button02={false}
        button01={false}
        onClose={() => {}}
        openModal
        children={
          <Box className="grid lg:grid-cols-4 w-full md:grid-cols-2  gap-1 p-2">
            {item?.map((value: IconValues) =>
              buttons(FindIconUrl(`${value.icon}`), value.text, value.Click)
            )}
          </Box>
        }
      />
    </Box>
  );
});
export default ShareWindow;
