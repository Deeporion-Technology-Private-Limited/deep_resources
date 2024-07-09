import { Box, Stack, Input, Button, Text } from "@/components";
import { ButtonVariant } from "@/components/Button/type";
import { InputType, InputVariant } from "@/components/Input/type";
import { TextWeight, TextSize, Alignment } from "@/utils/style";
import { Login } from "./type";
import background from "../../images/backimage.png";

const PhoneLogin = () => {
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
              <Box className="flex flex-col gap-10">
                <Text as="h2" weight={TextWeight.Bold} size={TextSize.XXl}>
                  {Login.Login}
                </Text>

                <Text
                  emphasis={"low"}
                  size={TextSize.Small}
                  align={Alignment.Left}
                  className="w-[22rem] block"
                >
                  {Login.VerificationCode}
                </Text>
              </Box>
              <Box>
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5"
                >
                  {Login.PhoneNum}
                </Text>
                <Input
                  prefix="+91"
                  className="focus:outline-transparent  "
                  type={InputType.Prefix}
                  style={webstyle.inputBoxDesign}
                  variant={InputVariant.Outlined}
                  value={""}
                />
              </Box>

              <Box className="flex flex-col gap-6">
                <Button
                  variant={ButtonVariant.DefaultPrimary}
                  style={webstyle.loginButton}
                  data-testid="LoginBtn"
                >
                  {Login.Login}
                </Button>
              </Box>

              <Box className="text-center">
                <Text
                  emphasis={"low"}
                  size={TextSize.Small}
                  align={Alignment.Center}
                >
                  {Login.NoAccount}
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

export default PhoneLogin;
