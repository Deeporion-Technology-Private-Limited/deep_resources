import { Box, IconButton, Text } from "@/components";
import { useState } from "react";
import edit from "./edit_24px.svg";
import deleteIcon from "./delete_outline_24px.svg";
import Vector from "./Vector (3).svg";

export const Action = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <Box className="z-20 w-[8rem]">
      <IconButton
        backgroundColor="transparent"
        iconUrl={Vector}
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
            <IconButton
              backgroundColor="transparent"
              iconUrl={deleteIcon}
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
            <IconButton
              backgroundColor="transparent"
              iconUrl={edit}
              onClick={() => {
                alert("Edited");
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
