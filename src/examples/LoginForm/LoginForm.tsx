import { Box, Button, Input,IconButton, Stack, Text } from "@/components";
import { ButtonVariant } from "@/components/types";
import background from "@/images/backimage.png"
import google from "../../images/Google.png";
import phone from "../../images/phone.png";
import { Alignment, TextSize, TextWeight } from "@/utils/style";
import { Login } from "./type";
import { InputType, InputVariant, Placeholder } from "@/components/types";
import { useState } from "react";
import CloseEye from "@/images/InputIcons/CloseEye";
import OpenEye from "@/images/InputIcons/OpenEye";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasUsernameError, setHasUsernameError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const [error, setError] = useState("");

  const handleUsernameChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setUsername(value);
    setHasUsernameError(value.length === 0);
  };

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setPassword(value);
    setHasPasswordError(value.length === 0);
  };

  const handleLogin = () => {
    const isUsernameValid = username.length > 0;
    const isPasswordValid = password.length > 0;

    setHasUsernameError(!isUsernameValid);
    setHasPasswordError(!isPasswordValid);

    if (isUsernameValid && isPasswordValid) {
      // proceed with login
      setError("Login Successfully");
    } else {
      setError("Something went wrong");
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
        <Box className="container  flex flex-col gap-6"></Box>
        <Box className="w-fit">
          <Stack className="relative">
            <Box className="flex flex-col gap-6">
              <Box>
                <Text as="h2" weight={TextWeight.Bold} size={TextSize.XXl}>
                  {Login.Login}
                </Text>
              </Box>
              <Box>
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5 text-black"
                >
                  {Login.Username}
                </Text>
                <Input
                  type={InputType.Text}
                  id="username"
                  placeholder={Placeholder.UserName}
                  className="mb-4 focus:outline-transparent "
                  variant={InputVariant.Outlined}
                  value={""}
                  style={{
                    ...webstyle.inputBoxDesign,
                    ...(hasUsernameError && webstyle.errorBorder),
                  }}
                  onChange={handleUsernameChange}
                  data-testid="UserNameInput"
                />

                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5"
                >
                  {Login.Password}
                </Text>
                <Input
                  id="password"
                  eye={<CloseEye />}
                  eyeOpen={<OpenEye />}
                  type={InputType.Password}
                  placeholder={Placeholder.Password}
                  className="focus:outline-transparent"
                  variant={InputVariant.Outlined}
                  value={""}
                  style={{
                    ...webstyle.inputBoxDesign,
                    ...(hasPasswordError && webstyle.errorBorder),
                  }}
                  onChange={handlePasswordChange}
                  data-testid="OpenEyeClick"
                />
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Bold}
                  className=" w-full mt-2 text-end block text-[#7D5D4F]"
                >
                  {Login.ForgotPassword}
                </Text>
              </Box>
              {error && (
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className={`font-bold mb-1.5 ${error === "Login Successfully" ? "text-green-500 " : "text-red-500"}`}
                  align={Alignment.Center}
                >
                  {error}
                </Text>
              )}

              <Box className="flex flex-col gap-6">
                <Button
                  variant={ButtonVariant.DefaultPrimary}
                  style={webstyle.loginButton}
                  onClick={handleLogin}
                  data-testid="LoginButton"
                >
                  {Login.Login}
                </Button>
                <Text
                  emphasis={"low"}
                  size={TextSize.Small}
                  align={Alignment.Center}
                >
                  {Login.OtherPlatform}
                </Text>
                <Box className="flex flex-col gap-[0.94rem]">
                  <Box className="flex items-center justify-center border rounded-lg border-[#72787F]">
                    <IconButton iconUrl={google} className="w-fit" />
                    <Text
                      className="w-fit text-[#72787F]"
                      align={Alignment.Center}
                      weight={TextWeight.Bold}
                    >
                      {Login.Google}
                    </Text>
                  </Box>
                  <Box className="flex items-center justify-center border rounded-lg border-[#72787F]">
                    <IconButton iconUrl={phone} className="w-fit" />
                    <Text
                      className="w-fit text-[#72787F] text-base"
                      align={Alignment.Center}
                      weight={TextWeight.Bold}
                    >
                      {Login.PhoneNumber}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box className="text-center">
                <Text
                  emphasis={"low"}
                  size={TextSize.Small}
                  align={Alignment.Center}
                >
                  {Login.AlreadyAccount}
                  <Text
                    weight={TextWeight.Medium}
                    size={TextSize.Small}
                    className="text-black ml-2"
                  >
                    {Login.Register}
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

  errorBorder: {
    borderColor: "red",
  },
};
