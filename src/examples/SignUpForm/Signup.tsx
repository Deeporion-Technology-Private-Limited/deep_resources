import {
  Box,
  Checkbox,
  DefaultButton,
  Input,
  PopupModal,
  Stack,
  Text,
} from "@/components";
import { InputType, InputVariant, Placeholder } from "@/components/types";
import { Alignment, TextSize, TextWeight } from "@/utils/style";
import { useState } from "react";
import { ButtonVariant } from "@/components/types";
import background from "../../images/backimage.png";
import { SignUp } from "./type";
import CloseEye from "@/images/InputIcons/CloseEye";
import OpenEye from "@/images/InputIcons/OpenEye";
import { FindIconUrl } from "@/utils/Constant";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
                  variant={InputVariant.Outlined}
                  value={""}
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
                  variant={InputVariant.Outlined}
                  value={""}
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
                  variant={InputVariant.Outlined}
                  value={""}
                />
              </Box>
              <Box className="flex gap-2">
                <Checkbox
                  type={InputType.Checkbox}
                  className="w-6"
                  value={""}
                  checked={false}
                />
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
                  <Text
                    weight={TextWeight.Semibold}
                    className="text-[#BFA59A]"
                    onClick={handleToggle}
                  >
                    {SignUp.Terms}
                  </Text>
                  <PopupModal
                    onClose={handleToggle}
                    header={undefined}
                    button02={false}
                    button01={false}
                    modalbutton={false}
                    openModal={isOpen}
                  >
                    <Box>
                      <Box className="flex justify-center items-center pb-4">
                        <Text
                          weight={TextWeight.Bold}
                          className="text-[#26282B]
                          "
                        >
                          {SignUp.Terms}
                        </Text>
                        <DefaultButton
                          className="bg-none w-fit"
                          onClick={() => setIsOpen(false)}
                        >
                          {FindIconUrl("Close.svg")}
                        </DefaultButton>
                      </Box>
                      <Box className="border-t border-[#E8EBED]">
                        <Text className="w-[32.3rem] block pb-9 pt-5">
                          {SignUp.TermsDetail}
                        </Text>
                      </Box>

                      <Box className="pb-9 border-b border-[#E8EBED]">
                        <Box className="flex gap-2">
                          <Checkbox value={""} checked={false} />
                          <Text>
                            I have read and agree to these Terms and Conditions
                          </Text>
                        </Box>
                      </Box>

                      <Box
                        className="flex justify-end
                      gap-4 pt-3"
                      >
                        <DefaultButton className="w-fit bg-[#E2E8F0] text-[#72787F]">
                          {SignUp.Cancel}
                        </DefaultButton>
                        <DefaultButton className="w-fit">
                          {SignUp.AgreeBtn}
                        </DefaultButton>
                      </Box>
                    </Box>
                  </PopupModal>
                </Text>
              </Box>

              <Box className="flex flex-col gap-6">
                <DefaultButton
                  variant={ButtonVariant.DefaultPrimary}
                  style={webstyle.loginButton}
                >
                  {SignUp.Signup}
                </DefaultButton>
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
