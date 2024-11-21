import { Box, DefaultButton, Input, Text } from "@/components";
import { ButtonVariant } from "@/components/types";
import background from "../../images/backimage.png";
import { TextSize, TextWeight, Alignment } from "@/utils/style";
import { Login, FormDetail } from "./type";
import { InputType, InputVariant, Placeholder } from "@/components/types";
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
    <Box className="w-[100vw] h-[100vh] flex flex-col md:flex-row items-center justify-between">
      <Box className="w-full flex-[1] h-full flex justify-center flex-col items-center">
        <Box className="w-[70%] h-[83%] flex flex-col gap-6">
          <Box className="h-[14%] flex flex-col justify-between">
            <Text as="h2" weight={TextWeight.Bold} size={TextSize.XXl}>
              {Login.TalkToUs}
            </Text>
            <Text
              emphasis={"low"}
              size={TextSize.Small}
              align={Alignment.Left}
              className="w-full md:w-[22rem] block"
            >
              {Login.TalkToUsHeadline}
            </Text>
          </Box>
          <Box>
            <Box className="mb-4">
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
                className={`focus:outline-transparent ${errors.name ? "border-red-500 h-13" : "h-14"}`}
                variant={InputVariant.Outlined}
                value={formDetail.name}
                onChange={handleInputChange}
              />
            </Box>
            <Box className="mb-4">
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
                className={`focus:outline-transparent ${errors.email ? "border-red-500 h-13" : "h-14"}`}
                variant={InputVariant.Outlined}
                value={formDetail.email}
                onChange={handleInputChange}
              />
            </Box>
            <Box className="mb-4">
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
                className={`focus:outline-transparent ${errors.phoneNo ? "border-red-500 h-13" : "h-14"}`}
                type={InputType.Prefix}
                placeholder={Placeholder.PhoneNumber}
                variant={InputVariant.Outlined}
                value={formDetail.phoneNo}
                onChange={handleInputChange}
              />
            </Box>
            <Box className="mb-4">
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
                className={`flex justify-center focus:outline-transparent ${errors.subject ? "border-red-500 h-13" : "h-14"}`}
                variant={InputVariant.Outlined}
                value={formDetail.subject}
                onChange={handleInputChange}
              />
            </Box>
            <Box className="mb-4">
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
                className={`focus:outline-transparent ${errors.details ? "border-red-500 h-13" : "h-14"}`}
                variant={InputVariant.Outlined}
                value={formDetail.details}
                onChange={handleInputChange}
              />
            </Box>
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
            <DefaultButton
              variant={ButtonVariant.DefaultPrimary}
              style={webstyle.loginButton}
              onClick={handleSubmit}
              data-testid="SubmitBtn"
            >
              {Login.SendMessage}
            </DefaultButton>
          </Box>
        </Box>
      </Box>
      <Box className="relative flex-[1] w-full md:w-auto">
        <img src={background} alt="img" className="w-full md:w-auto" />
        <Box className="absolute left-1/2 bottom-[7rem] transform -translate-x-1/2 flex items-center justify-center w-full md:w-auto">
          <Text
            className="text-white text-3xl text-center"
            weight={TextWeight.Bold}
          >
            {Login.NewShopping}
          </Text>
        </Box>
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
    width: "100%",
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
