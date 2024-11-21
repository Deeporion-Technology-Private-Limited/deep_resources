import { Box, DefaultButton, Input, Text } from "@/components";
import { TextWeight, TextSize, Alignment } from "@/utils/style";
import { useRef, useState } from "react";
import { Login } from "./type";
import background from "../../images/backimage.png";
import { InputType, InputVariant } from "@/components/types";

const Authentication = () => {
  const [error, setError] = useState("");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [values, setValues] = useState(Array(4).fill(""));
  // const inputRefs = useRef([]);

  const handleChange =
    (index: number) => (event: { target: { value: any } }) => {
      const value = event.target.value;
      if (/^\d*$/.test(value)) {
        // Only update if the value is a number
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
      }
    };

  const inputs = Array(4)
    .fill(null)
    .map((_, index) => (
      <Input
        key={index}
        type={InputType.Otp}
        ref={(el) => (inputRefs.current[index] = el)}
        variant={InputVariant.Outlined}
        value={values[index]}
        onChange={handleChange(index)}
        data-testid="InputValues"
      />
    ));

  const handleVerify = () => {
    // Verification logic here
    if (values.every((value) => value !== "" && /^\d+$/.test(value))) {
      setError("Verify Successfully");

      console.log("All inputs are valid:", values);
      // Perform further actions like API calls or state updates
    } else {
      setError("Some inputs are invalid or empty");

      console.log("Some inputs are invalid or empty");
      // Show error message or handle invalid inputs
    }
  };
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

            <Text
              align={Alignment.Center}
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
            {error && (
              <Text
                size={TextSize.Small}
                weight={TextWeight.Medium}
                className={`font-bold mb-1.5 ${error === "Verify Successfully" ? "text-green-500 " : "text-red-500"}`}
                align={Alignment.Center}
              >
                {error}
              </Text>
            )}
          </Box>
          <Box className="flex flex-col gap-4  items-center">
            <DefaultButton className="font-bold text-base " data-testid="VerifyBtn" onClick={handleVerify}>
              {Login.Verify}
            </DefaultButton>
            <DefaultButton className="w-fit bg-transparent p-0 text-[#72787F] font-normal items-center text-sm ">
              {Login.GoBack}
            </DefaultButton>
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
