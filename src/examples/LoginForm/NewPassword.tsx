import { Box, Stack, Input, Text, DefaultButton } from "@/components";
import { ButtonVariant } from "@/components/types";
import { InputType, InputVariant, Placeholder } from "@/components/types";
import { TextWeight, TextSize } from "@/utils/style";
import { Login } from "./type";
import background from "../../images/backimage.png";
import { useState } from "react";
import CloseEye from "@/images/InputIcons/CloseEye";
import OpenEye from "@/images/InputIcons/OpenEye";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePasswords = () => {
    if (password.length < 5 || confirmPassword.length < 5) {
      setError("Passwords must be at least 5 characters long.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    setError("Change Successfully");
    return true;
  };

  const handleSubmit = () => {
    if (validatePasswords()) {
      // Proceed with setting the new password
      console.log("Passwords are valid");
      setPassword("");
      setConfirmPassword("");
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
                  variant={InputVariant.Outlined}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5"
                >
                  {Login.ConfirmNew}
                </Text>
                <Input
                  id="confirmPassword"
                  eye={<CloseEye />}
                  eyeOpen={<OpenEye />}
                  type={InputType.Password}
                  placeholder={Placeholder.ConfirmNew}
                  style={webstyle.inputBoxDesign}
                  variant={InputVariant.Outlined}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="focus:outline-transparent"
                />
                {error && (
                  <Text
                    size={TextSize.Small}
                    weight={TextWeight.Medium}
                    className={`mb-1.5 ${error === "Change Successfully" ? "text-green-500" : "text-red-500"}`}
                  >
                    {error}
                  </Text>
                )}
                <Box className="flex flex-col gap-6 mt-4">
                  <Box className="flex flex-col gap-2">
                    <Text>{Login.MustContain}</Text>

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
                  <DefaultButton
                    variant={ButtonVariant.DefaultPrimary}
                    style={webstyle.loginButton}
                    onClick={handleSubmit}
                  >
                    {Login.SetNew}
                  </DefaultButton>
                </Box>
              </Box>
              <Box className="text-center">
                <DefaultButton className="w-fit bg-transparent p-0 text-[#72787F] font-normal ">
                  {Login.BackTo}{" "}
                  <Text weight={TextWeight.Semibold} className="text-[#7D5D4F]">
                    {Login.Login}
                  </Text>
                </DefaultButton>
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
