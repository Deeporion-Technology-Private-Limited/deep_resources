import { Box, Stack, Input, Button, IconButton, Text } from "@/components";
import { ButtonVariant } from "@/components/Button/type";
import CloseEye from "@/components/Input/Icons/CloseEye";
import OpenEye from "@/components/Input/Icons/OpenEye";
import { InputType, Placeholder } from "@/components/Input/type";
import { TextWeight, TextSize} from "@/utils/style";
import React from "react";
import { Login } from "./type";
import background from "../../images/backimage.png";

const NewPassword = () => {
  return (
    <Box className=" w-[100vw] flex items-center justify-between">
      <Box className="w-[50vw] flex justify-center flex-col items-center">
        <Text
          weight={TextWeight.Bold}
          className="absolute left-7 top-5 text-2xl"
        >
          {Login.Logo}
        </Text>
        <Box className="container  flex flex-col gap-6"></Box>
        <Box className="w-fit">
          <Stack className="relative">
            <Box className="flex flex-col gap-6">
              <Box>
                <Text as="h2" weight={TextWeight.Bold} size={TextSize.XXl}>
                  {Login.NewPassword}
                </Text>
              </Box>
              <Box>
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5"
                >
                  {Login.NewPassword}
                </Text>
                <Input
                  eye={<CloseEye />}
                  eyeOpen={<OpenEye />}
                  type={InputType.Password}
                  id="password"
                  placeholder={Placeholder.YourNewPassword}
                  className="mb-4 focus:outline-transparent flex"
                  style={webstyle.inputBoxDesign}
                />

                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5"
                >
                  {Login.ConfirmNew}
                </Text>
                <Input
                  id="password"
                  eye={<CloseEye />}
                  eyeOpen={<OpenEye />}
                  type={InputType.Password}
                  placeholder={Placeholder.ConfirmNew}
                  style={webstyle.inputBoxDesign}
                  className="focus:outline-transparent"
                />
              </Box>

              <Box className="flex flex-col gap-6">
                <Button
                  variant={ButtonVariant.DefaultPrimary}
                  style={webstyle.loginButton}
                >
                  {Login.SetNew}
                </Button>

                <Box className="flex flex-col">
                  <Text emphasis={"low"} size={TextSize.Small}>
                    {Login.CapitalLetter}
                  </Text>
                  <Text emphasis={"low"} size={TextSize.Small}>
                    {Login.LowerCaseLetter}
                  </Text>
                  <Text emphasis={"low"} size={TextSize.Small}>
                    {Login.OneNum}
                  </Text>
                  <Text emphasis={"low"} size={TextSize.Small}>
                    {Login.Minimumcharacter}
                  </Text>
                </Box>
              </Box>

              <Box className="text-center">
                <Button className="w-fit bg-transparent p-0 text-[#72787F] font-normal ">
                  {Login.BackTo}{" "}
                  <Text weight={TextWeight.Semibold} className="text-[#7D5D4F]">
                    {Login.Login}
                  </Text>
                </Button>
              </Box>
            </Box>
          </Stack>
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

const webstyle = {
  inputBoxDesign: {
    width: "360px",
    height: "56px",
    border: "1px solid #C9CDD2",
    borderRadius: "8px",
    padding: "10px 8px",
  },
  loginButton: {
    width: "360px",
    height: "56px",
    borderRadius: "8px",
    padding: "16px",
    background: "linear-gradient(to right, #BFA59A, #3F271E)",
    fontWeight: 600,
    fontSize: "16px",
    color: "#FFFFFF",
    lineHeight: "24px",
    align: "center",
  },
};

export default NewPassword;