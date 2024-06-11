import { Box, Button, IconButton, Input, Stack, Text } from "@/components";
import { ButtonVariant } from "@/components/Button/type";
import background from "../../images/backimage.png";
import google from "../../images/Google.png";
import phone from "../../images/phone.png";
import { Alignment, TextSize, TextWeight } from "@/utils/style";
import { Login } from "./type";
import { InputType, Placeholder } from "@/components/Input/type";

export const LoginForm = () => {
  return (
    <Box className=" w-[100vw] flex items-center justify-between">
      <Box className="w-[50vw] flex justify-center flex-col items-center">
        <Text
          weight={TextWeight.Bold}
          className="absolute left-7 top-5 text-2xl"
        >
          Logo
        </Text>
        <Box className="container  flex flex-col gap-6"></Box>
        <Box className="w-fit">
          <Stack className="relative">
            <Box className="flex flex-col gap-6">
              <Box>
                <Text as="h2" weight={TextWeight.Bold} size={TextSize.Larger}>
                  {Login.Login}
                </Text>
              </Box>
              <Box>
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5"
                >
                  {Login.Username}
                </Text>
                <Input
                  type={InputType.Text}
                  id="username"
                  placeholder={Placeholder.UserName}
                  className="mb-4"
                  style={webstyle.inputBoxDesign}
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
                  type={InputType.Password}
                  placeholder={Placeholder.Password}
                  style={webstyle.inputBoxDesign}
                />
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Bold}
                  className=" w-full mt-2 text-end block text-[#7D5D4F]"
                >
                  {Login.ForgotPassword}
                </Text>
              </Box>

              <Box className="flex flex-col gap-6">
                <Button
                  type="submit"
                  variant={ButtonVariant.DefaultPrimary}
                  style={webstyle.loginButton}
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
                    <IconButton iconUrl={google} className="w-fit"></IconButton>
                    <Text
                      className="w-fit text-[#72787F]"
                      align={Alignment.Center}
                      weight={TextWeight.Bold}
                    >
                      {Login.Google}
                    </Text>
                  </Box>

                  <Box className="flex items-center justify-center border rounded-lg border-[#72787F]">
                    <IconButton iconUrl={phone} className="w-fit"></IconButton>
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
    color: "white",
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
    fontFamily: "poppins",
    color: "#FFFFFF",
    lineHeight: "24px",
    align: "center",
  },
};
