import { Box, Button, Text } from "@/components";
import { TextSize, TextWeight } from "@/utils/style";
import React from "react";
import { Login } from "./type";
import background from "../../images/backimage.png";

const PasswordRecovery = () => {
  return (
    <Box className=" w-[100vw] flex items-center justify-between">
      <Box className="w-[50vw] flex justify-center flex-col items-center">
        <Text
          weight={TextWeight.Bold}
          className="absolute left-7 top-5 text-2xl"
        >
          {Login.Logo}
        </Text>
        <Box className="flex flex-col gap-10">
          <Text weight={TextWeight.Bold} size={TextSize.XXl}>
            {Login.PasswordRecovery}
          </Text>

          <Box className="flex flex-col">
            <Text weight={TextWeight.Bold} size={TextSize.Large}>
              {Login.CheckMail}
            </Text>
            <Text emphasis={"low"} size={TextSize.Small} className="w-64">
              {Login.SentLink}
            </Text>
          </Box>

          <Box className="flex justify-between">
            <Button className="w-fit bg-transparent p-0 text-[#72787F] font-bold text-base ">
              {Login.ResendEmail}
            </Button>
            <Button className="w-fit bg-transparent p-0 text-[#72787F] font-normal ">
              {Login.BackTo}{" "}
              <Text weight={TextWeight.Semibold} className="text-[#7D5D4F]">
                {Login.Login}
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="relative">
        <img src={background} alt="img" />
        <Text
          className="absolute bottom-28 left-56 w-96 text-center text-white text-3xl"
          weight={TextWeight.Bold}
        >
          {Login.NewShopping}
        </Text>
      </Box>
    </Box>
  );
};

export default PasswordRecovery;
