import { Box, Button, Input, Text } from "@/components";
import React, { useRef } from "react";
import { Login } from "./type";
import { Alignment, TextSize, TextWeight } from "@/utils/style";
import { InputType, InputVariant } from "@/components/Input/type";

const PhoneVerify = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInput = (
    index: number,
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const value = event.currentTarget.value;
    if (value.length >= 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otp = inputRefs.current.map((input) => input?.value).join("");
    console.log("otp:-", otp);
  };

  const inputs = Array(6)
    .fill(null)
    .map((_, index) => (
      <Input
        key={index}
        type={InputType.Otp}
        ref={(el) => (inputRefs.current[index] = el)}
        onInput={(e) => handleInput(index, e)}
        variant={InputVariant.Outlined}
        value={""}
      />
    ));

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
              <Button hover onClick={handleVerify}>
                {Login.Verify}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PhoneVerify;
