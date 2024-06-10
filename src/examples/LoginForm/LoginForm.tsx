import { Box, Button, IconButton, Input, Stack, Text } from "@/components";
import { ButtonDirection, ButtonVariant } from "@/components/Button/type";
import background from "../../images/backimage.png";
import apple from "../../images/apple.png";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";

export const LoginForm = () => {
  return (
    <Box className=" w-[100vw] flex items-center justify-between">
      <Box className="w-[50vw] flex justify-center flex-col items-center">
      <Text as="label" weight={"black"}  className="absolute left-7 top-5 text-2xl"> 
            Logo
          </Text>
        <Box className="w-fit">
          
          <Stack className="relative">
            <Text as="h2" weight={"bold"} size={"3xl"} className="mb-9" >
              Login
            </Text>

            <Text
              as="label"
              htmlFor="username"
              size={"sm"}
              weight={"medium"}
              className="mb-1.5"
            >
              Username
            </Text>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              className="mb-4"
              style={webstyle.inputBoxDesign}
            />

<Box>

            <Text
              as="label"
              htmlFor="password"
              size={"sm"}
              weight={"medium"}
              className="mb-1.5"
            >
              Password
            </Text>
            <Input
              id="password"
              type="password"
              placeholder={"Password"}
              style={webstyle.inputBoxDesign}
            />
            <Text
              as="label"
              htmlFor="password"
              size={"sm"}
              weight={"bold"}
              className="mb-1.5 w-full  text-end block text-[#7D5D4F]"

            >
              Forgot Password
            </Text>
</Box>

            <Button
              type="submit"
              variant={ButtonVariant.DefaultPrimary}
              className="my-10"
              style={webstyle.loginButton}
            >
              Login
            </Button>

            <Box className="flex w-[100%] justify-center ">
              <IconButton
                iconUrl={google}
                backgroundColor="transparent"
                direction={ButtonDirection.Row}
              />
              <IconButton
                iconUrl={apple}
                backgroundColor="transparent"
                direction={ButtonDirection.Row}
              />
              <IconButton
                iconUrl={facebook}
                backgroundColor="transparent"
                direction={ButtonDirection.Row}
              />
            </Box>

            <Text as="span" emphasis={"low"} size={"sm"} align={"center"}>
              Already have an account?
              <Text as="label" weight={"medium"}
              className="text-black ml-2"
      >
                Register
              </Text>
            </Text>
          </Stack>
        </Box>
      </Box>
      <Box className="relative">
        <img src={background} alt=""  className=""/>
        <Text className="absolute bottom-28 left-56 w-96 text-center text-white text-3xl"  weight={"bold"}>
        Serve yourself some delicious cuisine
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
  registertext: {
    color: "black",
    marginLeft: "0.5rem",
  },
};
