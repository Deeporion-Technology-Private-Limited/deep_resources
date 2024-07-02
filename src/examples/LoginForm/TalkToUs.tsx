import { Box, Button, Input, Stack, Text } from "@/components";
import { ButtonVariant } from "@/components/Button/type";
import background from "../../images/backimage.png";
import { TextSize, TextWeight, Alignment } from "@/utils/style";
import { Login, FormDetail } from "./type";
import { InputType, InputVariant, Placeholder } from "@/components/Input/type";
import { useState } from "react";

export const TalkToUsForm = () => {
  const [formDetail, setFormDetail] = useState<FormDetail>({
    name: "",
    email: "",
    phoneNo: "",
    subject: "",
    details: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phoneNo: false,
    subject: false,
    details: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetail({
      ...formDetail,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: value.trim() === "",
    });
  };

  const validateForm = (form: FormDetail) => {
    const newErrors = {
      name: form.name.trim() === "",
      email: form.email.trim() === "",
      phoneNo: form.phoneNo.trim() === "",
      subject: form.subject.trim() === "",
      details: form.details.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = () => {
    if (validateForm(formDetail)) {
      setErrorMessage("Form submitted successfully!");
    } else {
      setErrorMessage("Please fill in all fields.");
    }
  };

  return (
    <Box className="w-[100vw] flex items-center justify-between">
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
                  {Login.TalkToUs}
                </Text>
                <Text
                  emphasis={"low"}
                  size={TextSize.Small}
                  align={Alignment.Left}
                  className="w-[22rem] block"
                >
                  {Login.TalkToUsHeadline}
                </Text>
              </Box>
              <Box>
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5 text-black"
                >
                  {Login.Name}
                </Text>
                <Input
                  type={InputType.Text}
                  name="name"
                  placeholder={Placeholder.Name}
                  className={`mb-4 focus:outline-transparent ${errors.name ? "border-red-500" : ""}`}
                  variant={InputVariant.Outlined}
                  value={formDetail.name}
                  onChange={handleInputChange}
                />

                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5 text-black"
                >
                  {Login.EmailAddress}
                </Text>
                <Input
                  type={InputType.Text}
                  name="email"
                  placeholder={Placeholder.Email}
                  className={`mb-4 focus:outline-transparent ${errors.email ? "border-red-500" : ""}`}
                  variant={InputVariant.Outlined}
                  value={formDetail.email}
                  onChange={handleInputChange}
                />
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
                    name="phoneNo"
                    className={`focus:outline-transparent ${errors.phoneNo ? "border-red-500" : ""}`}
                    type={InputType.Prefix}
                    placeholder={Placeholder.PhoneNumber}
                    variant={InputVariant.Outlined}
                    value={formDetail.phoneNo}
                    onChange={handleInputChange}
                  />
                </Box>
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5 text-black"
                >
                  {Login.Subject}
                </Text>
                <Input
                  type={InputType.Text}
                  name="subject"
                  placeholder={Placeholder.Subject}
                  className={`mb-4 focus:outline-transparent ${errors.subject ? "border-red-500" : ""}`}
                  variant={InputVariant.Outlined}
                  value={formDetail.subject}
                  onChange={handleInputChange}
                />

                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className="mb-1.5 text-black"
                >
                  {Login.Details}
                </Text>
                <Input
                  type={InputType.Text}
                  name="details"
                  placeholder={Placeholder.Details}
                  className={`mb-4 focus:outline-transparent ${errors.details ? "border-red-500" : ""}`}
                  variant={InputVariant.Outlined}
                  value={formDetail.details}
                  onChange={handleInputChange}
                />
              </Box>
              {errorMessage && (
                <Text
                  size={TextSize.Small}
                  weight={TextWeight.Medium}
                  className={`font-bold mb-1.5 ${errorMessage === "Form submitted successfully!" ? "text-green-500" : "text-red-500"}`}
                  align={Alignment.Center}
                >
                  {errorMessage}
                </Text>
              )}
              <Box className="flex flex-col gap-6">
                <Button
                  variant={ButtonVariant.DefaultPrimary}
                  style={webstyle.loginButton}
                  onClick={handleSubmit}
                >
                  {Login.SendMessage}
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
  errorBorder: {
    borderColor: "red",
  },
};
