import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Input,
  Stack,
  Text,
} from "@/components";
import { InputType, Placeholder } from "@/components/Input/type";
import { Alignment, TextSize, TextWeight } from "@/utils/style";
import React from "react";
import { ButtonVariant } from "@/components/Button/type";
import background from "../../images/backimage.png";
import { SignUp } from "./type";
import CloseEye from "@/components/Input/Icons/CloseEye";
import OpenEye from "@/components/Input/Icons/OpenEye";

const Signup = () => {
  return (
    <Box className=" w-[100vw] flex items-center justify-between">
      <Box className="w-[50vw] flex justify-center flex-col items-center">
        <Text
          weight={TextWeight.Bold}
          className="absolute left-7 top-5 text-2xl"
        >
          {SignUp.Logo}
        </Text>
        <Box className="w-fit">
          <Stack className="relative">
            <Box className="flex flex-col gap-6">
              <Box>
                <Text as="h2" weight={TextWeight.Bold} size={TextSize.XXl}>
                  {SignUp.CreateAccount}
                </Text>
                <Text
                  emphasis={"low"}
                  size={TextSize.Small}
                  align={Alignment.Left}
                  className="w-[22rem] block"
                >
                  {SignUp.FillInfo}
                </Text>
              </Box>
              <Box>
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5"
                >
                  {SignUp.Name}
                </Text>
                <Input
                  type={InputType.Text}
                  id="username"
                  placeholder={Placeholder.YourName}
                  className="mb-4 focus:outline-transparent"
                  style={webstyle.inputBoxDesign}
                />

                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5"
                >
                  {SignUp.Email}
                </Text>
                <Input
                  type={InputType.Text}
                  id="username"
                  placeholder={Placeholder.YourEmail}
                  className="mb-4 focus:outline-transparent"
                  style={webstyle.inputBoxDesign}
                />

                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5"
                >
                  {SignUp.Password}
                </Text>
                <Input
                  id="password"
                  eye={<CloseEye />}
                  eyeOpen={<OpenEye />}
                  type={InputType.Password}
                  placeholder={Placeholder.YourPassword}
                  className="mb-4 focus:outline-transparent "
                  style={webstyle.inputBoxDesign}
                />
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Bold}
                  className=" w-full mt-2 text-end block text-[#7D5D4F]"
                >
                  {/* {SignUp.ForgotPassword} */}
                </Text>
              </Box>
              <Box className="flex gap-2">
                <Checkbox type={InputType.Checkbox} className="w-6" />
                <Text
                  emphasis={"low"}
                  size={TextSize.Base}
                  align={Alignment.Left}
                  className="w-72"
                >
                  {SignUp.Agree}
                  <Text weight={TextWeight.Semibold} className="text-[#BFA59A]">
                    {" "}
                    {SignUp.PrivacyPolicy}
                  </Text>{" "}
                  <Text>{SignUp.And}</Text>{" "}
                  <Text weight={TextWeight.Semibold} className="text-[#BFA59A]">
                    {SignUp.Terms}
                  </Text>
                </Text>
              </Box>

              <Box className="flex flex-col gap-6">
                <Button
                  variant={ButtonVariant.DefaultPrimary}
                  style={webstyle.loginButton}
                >
                  {SignUp.Signup}
                </Button>
              </Box>

              <Box className="text-center">
                <Text
                  emphasis={"low"}
                  size={TextSize.Small}
                  align={Alignment.Center}
                >
                  {SignUp.AlreadyAccount}
                  <Text
                    weight={TextWeight.Medium}
                    size={TextSize.Small}
                    className="text-black ml-2"
                  >
                    {SignUp.Login}
                  </Text>
                </Text>
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
          {SignUp.NewShopping}
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
    color: "black",
    padding: "10px 8px",
    display: "flex",
  },
  loginButton: {
    width: "360px",
    height: "56px",
    borderRadius: "8px",
    padding: "16px",
    background: "linear-gradient(to right, #BFA59A, #3F271E)",
    fontWeight: 600,
    fontSize: "16px",
    fontFamily: "poppins",
    color: "#FFFFFF",
    lineHeight: "24px",
    align: "center",
  },
};

export default Signup;
