import { Box, Headings, IconButton, Modal, Text } from "@/components";
import { IconValues, socialIcons } from "./data";

const ShareWindow = () => {
  const buttons = (
    iconurl: string | undefined,
    btext: string | undefined,
    click: any
  ) => {
    return (
      <Box className="flex flex-col justify-center items-center">
        <IconButton
          backgroundColor="transparent"
          className=" text-[#FFFFFF] rounded-full shadow-xl w-max"
          iconUrl={iconurl}
          onClick={click}
        />
        <Text as={"span"} className="w-max capitalize">
          {btext}
        </Text>
      </Box>
    );
  };
  return (
    <Modal
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
          {socialIcons?.map((value: IconValues) =>
            buttons(value.icon, value.text, value.Click)
          )}
        </Box>
      }
    />
  );
};
export default ShareWindow;
