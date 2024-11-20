import { Box, SingleIconButton, Text } from "@/components";
import { useState } from "react";
import { FindIconUrl } from "@/utils/Constant";

export const Action = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <Box className="z-20 w-[8rem]">
      <SingleIconButton
        backgroundColor="transparent"
        iconUrl={FindIconUrl("Dots.svg")}
        className="text-[4rem]"
        onClick={toggle}
      />
      {show && (
        <Box
          className="shadow-2xl bg-[#FFFFFF] absolute z-30 pl-3 pr-3 rounded-lg "
          onMouseLeave={() => {
            setShow(false);
          }}
        >
          <Box className="flex gap-2 w-full items-center">
            <Text as="h2" className="capitalize font-semibold ">
              Remove Seller
            </Text>
            <SingleIconButton
              backgroundColor="transparent"
              iconUrl={FindIconUrl("delete_outline_24px")}
              onClick={() => {
                alert("Removed");
                toggle();
              }}
              iconStyle="size-6"
            />
          </Box>
          <Box className="flex gap-2 items-center">
            <Text as="span" className="capitalize font-semibold">
              Edit Info
            </Text>
            <SingleIconButton
              backgroundColor="transparent"
              iconUrl={FindIconUrl("edit.svg")}
              onClick={() => {
                alert("edit_24px.svg");
                toggle();
              }}
              iconStyle="size-6 text-[#ffffff]"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};
