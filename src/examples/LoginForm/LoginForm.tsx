import { Box, Button, Input, Stack, Text } from "@/components";
import { ButtonVariant } from "@/components/Button/type";

export const LoginForm = () => {
  return (
    <Box className="px-8 py-12 border border-gray-300 rounded-xl">
      <Stack>
        <Text
          as="h2"
          weight={"bold"}
          align={"center"}
          size={"3xl"}
          className="mb-2"
        >
          Login
        </Text>

        <Text
          as="span"
          emphasis={"low"}
          size={"sm"}
          align={"center"}
          className="mb-8"
        >
          Please enter your credentials to login
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

        <Button
          type="submit"
          variant={ButtonVariant.DefaultPrimary}
          className="mt-10"
          style={webstyle.loginButton}
        >
          Login
        </Button>
      </Stack>
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
