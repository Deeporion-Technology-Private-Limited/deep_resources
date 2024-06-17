import { Box, Button, Input, Text } from "@/components";
import { TextWeight, TextSize, Alignment } from "@/utils/style";
import React, { useRef } from "react";
import { Login } from "./type";
import background from "../../images/backimage.png";
import { InputType } from "@/components/Input/type";

const Authentication = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInput = (index: number, event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    if (value.length >= 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const inputs = Array(4).fill(null).map((_, index) => (
    <Input
      key={index}
      type={InputType.Otp}
      ref={(el) => (inputRefs.current[index] = el)}
      onInput={(e) => handleInput(index, e)}
    />
  ));


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
          <Text
            weight={TextWeight.Bold}
            size={TextSize.XXl}
            align={Alignment.Center}
          >
            {Login.VerifyOTP}
          </Text>

          <Box className="flex flex-col">
            <Text
              emphasis={"low"}
              size={TextSize.Base}
              align={Alignment.Center}
            >
              {Login.Code}
            </Text>
            <Text align={Alignment.Center}
              size={TextSize.Base}
              weight={TextWeight.Medium}
              className="text-[#7096D1]"
            >
                {Login.Email}
            </Text>
          </Box>
          <Box className="flex flex-col gap-4 ">
            <Box className="flex gap-6">{inputs}</Box>
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
          <Box className="flex flex-col gap-4  items-center">
            <Button className="font-bold text-base ">
              {Login.ResendEmail}
            </Button>
            <Button className="w-fit bg-transparent p-0 text-[#72787F] font-normal items-center text-sm ">
              {Login.GoBack}
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

export default Authentication;
