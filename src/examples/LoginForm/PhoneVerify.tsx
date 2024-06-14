import { Box, Button, Input, Text } from "@/components";
import React from "react";
import { Login } from "./type";
import { Alignment, TextSize, TextWeight } from "@/utils/style";
import { InputType } from "@/components/Input/type";

const PhoneVerify = () => {
  const inputs = Array(6)
    .fill(null)
    .map((_, index) => <Input key={index} quantity={6} type={InputType.Otp} />);

  return (
    <Box>
      <Text weight={TextWeight.Bold} className="absolute left-7 top-5 text-2xl">
        {Login.Logo}
      </Text>
      <Box className="flex justify-center items-center ">
        <Box className="border ">
          <Box className=" flex flex-col items-center gap-10 p-10">
            <Box>
              <Text
                align={Alignment.Center}
                weight={TextWeight.Bold}
                size={TextSize.XXl}
              >
                {Login.PhoneVerification}
              </Text>
            </Box>
            <Box>
              <Text emphasis={"low"} size={TextSize.Base}>
                {Login.EnterCode}
              </Text>
            </Box>

            <Box className="flex justify-center gap-6">{inputs}</Box>
            <Box className="text-center">
              <Text
                emphasis={"low"}
                align={Alignment.Center}
                size={TextSize.Small}
              >
                {Login.DidNotReceive}{" "}
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="text-[#3F271E]"
                >
                  {Login.Resend}
                </Text>
              </Text>
            </Box>
            <Box className="w-full">
              <Button hover>{Login.Verify}</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PhoneVerify;
