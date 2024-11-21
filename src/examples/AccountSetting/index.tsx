import {
  Headings,
  Box,
  Input,
  ProfileAvatar,
  AutoComplete,
  DefaultButton,
} from "@/components";
import { ButtonIconPosition, ButtonVariant } from "@/components/types";
import { InputType, InputVariant } from "@/components/types";
import React, { useRef, useState } from "react";
import LogoutIcon from "../../images/LogoutBtn.svg";
import DeleteIcon from "../../images/Delete.svg";
export const AccountSetting: React.FC = () => {
  const [profileImage, setProfileImage] = useState<any>();

  const imgReference = useRef<HTMLInputElement>(null);
  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImage(url);
    }
  };
  const handleUpdateClick = () => {
    imgReference.current?.click();
  };
  const HandleDeleteImg = () => {
    setProfileImage(null);
  };

  const HandleLogout = () => {
    alert("User Logged Out");
  };
  const HandleDeleteAccount = () => {
    alert("User Account Deleted");
  };

  const HandleEdit = () => {
    alert("Edit button Clicked");
  };
  return (
    <Box>
      <Headings fontWeight={"font-bold"} text="Account Setting" />
      <Box className="w-[800px] shadow-lg px-8 py-4 my-2 box box-border border rounded-md flex ">
        <Box className="w-[60%] flex flex-wrap justify-between">
          <Headings
            style={{ width: "50%", color: "#72787F" }}
            fontWeight={"font-bold"}
            text="payment"
          />
          <Box className="w-6/12">
            <Headings
              style={{ color: "#72787F" }}
              fontWeight={"font-bold"}
              text="card details"
            />
            <Headings fontWeight={"font-normal"} text="Visa Card ending" />
          </Box>
          <Box className="w-full">
            <label>currency</label>
            <AutoComplete
              placeholder="Insert text here"
              suggestions={["US Dollar", "Indain Rupee"]}
              type="text"
            />
          </Box>
        </Box>
        <Box className="w-[40%] ">
          <DefaultButton
            className="flex justify-end"
            style={{ border: "none" }}
            variant={ButtonVariant.DefaultDarkBackground}
            onClick={HandleEdit}
          >
            {" "}
            Edit{" "}
          </DefaultButton>
        </Box>
      </Box>

      <Box className="w-[800px] shadow-lg px-8 py-4 my-2  box box-border border rounded-md flex justify-between">
        <Headings
          style={{ width: "50%", color: "#72787F" }}
          fontWeight={"font-bold"}
          text="Photo"
        />
        <ProfileAvatar
          className="rounded-full"
          name="Karan"
          src={profileImage}
        />
        <input
          type="file"
          style={{ display: "none" }}
          ref={imgReference}
          onChange={handleImage}
        ></input>
        <Box className="flex items-start ">
          <DefaultButton
            className="flex"
            style={{ border: "none" }}
            variant={ButtonVariant.DefaultDarkBackground}
            onClick={HandleDeleteImg}
          >
            Delete
          </DefaultButton>
          <DefaultButton
            className="flex"
            style={{ border: "none" }}
            variant={ButtonVariant.DefaultDarkBackground}
            onClick={handleUpdateClick}
          >
            {" "}
            Update{" "}
          </DefaultButton>
        </Box>
      </Box>
      <Box className="w-[800px] shadow-lg px-8 py-4 my-2  box box-border border rounded-md flex ">
        <Box>
          <Headings
            style={{ color: "#72787F" }}
            fontWeight={"font-bold"}
            text="Personal details"
          />
        </Box>

        <Box className="ml-[15%] w-[60%]">
          <Box>
            <label>Full name</label>
            <Input
              placeholder="Full name"
              type={InputType.Text}
              variant={InputVariant.Outlined}
              value={""}
            />
          </Box>
          <Box>
            <label>Email</label>
            <Input
              placeholder="Email"
              type={InputType.Email}
              variant={InputVariant.Outlined}
              value={""}
            />
          </Box>
          <Box>
            <label>Address</label>
            <Input
              placeholder="Address"
              type={InputType.Text}
              variant={InputVariant.Outlined}
              value={""}
            />
          </Box>
          <Box>
            <label>Password</label>
            <Input
              placeholder="Password"
              type={InputType.Password}
              variant={InputVariant.Outlined}
              value={""}
            />
          </Box>
        </Box>
      </Box>

      <Box className="w-[800px] shadow-lg px-8 py-4 my-2  box box-border border rounded-md flex justify-between">
        <Headings
          style={{ color: "#72787F" }}
          fontWeight={"font-bold"}
          text="Account actions"
        />
        <Box>
          <DefaultButton
            className="flex justify-end"
            style={{ border: "none" }}
            iconPosition={ButtonIconPosition.Left}
            variant={ButtonVariant.DefaultDarkBackground}
            iconUrl={LogoutIcon}
            onClick={HandleLogout}
          >
            Log out
          </DefaultButton>
          <DefaultButton
            className="flex"
            style={{ border: "none" }}
            variant={ButtonVariant.DefaultDarkBackground}
            iconPosition={ButtonIconPosition.Left}
            iconUrl={DeleteIcon}
            onClick={HandleDeleteAccount}
          >
            {" "}
            Delete Account{" "}
          </DefaultButton>
        </Box>
      </Box>
    </Box>
  );
};
