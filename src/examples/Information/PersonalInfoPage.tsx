import { useState } from "react";
import { BreadCrumb, Input } from "@/components";
import Photo from "../../images/Photo.png";
import ImagePopup from "./ImagePopup";
import { personalInfoData } from "./PersonalInfoData";
import { InputType, InputVariant } from "@/components/Input/type";
import infoLogo from "../../images/Avatar3.svg"
import bell from "../../images/bellicon.png"

const PersonalInfo = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleUploadImage = () => {
    setShowPopup(false);
  };

  const handleRemoveImage = () => {
    setShowPopup(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between gap-2 py-4">
        <BreadCrumb
          breadCrumbItems={[
            { href: "/profile", text: "Profile" },
            { href: "/personlInfo", text: "Personal Information" },
          ]}
          defaultSeparatorIconUrl="/src/components/BreadCrumb/icon/RightArrow.svg"
        />
        <div className="flex gap-2">
          <img src={infoLogo} alt="Icon 1" className="w-11 h-11" />
          <img src={bell} alt="Icon 2" className="w-11 h-11" />
        </div>
      </div>
      <div className="w-full mx-auto bg-white shadow-md rounded-lg">
        <div
          className="flex-1 py-2 px-4 md:px-10 rounded-lg flex justify-start items-center gap-2"
          style={{ background: "linear-gradient(to right, #BFA59A, #3F271E)" }}
        >
          <div className="relative">
            <div className="inline-block relative">
              <img
                src={Photo}
                alt="Profile"
                className="rounded-full w-24 h-24 border-4 border-white cursor-pointer"
                onClick={handleOpenPopup}
              />
              {showPopup && (
                <ImagePopup
                  onClose={handleClosePopup}
                  onUpload={handleUploadImage}
                  onRemove={handleRemoveImage}
                />
              )}
              <button
                className="absolute inset-0 flex flex-col items-center justify-center text-white bg-transparent border-none outline-none cursor-pointer"
                onClick={handleOpenPopup}
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM18 16H2V4H6.05L7.88 2H12.12L13.95 4H18V16ZM10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 13C8.35 13 7 11.65 7 10C7 8.35 8.35 7 10 7C11.65 7 13 8.35 13 10C13 11.65 11.65 13 10 13Z"
                    fill="white"
                  />
                </svg>
                <p className="text-xs font-bold">Edit picture</p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto flex flex-col items-start gap-8 px-2 py-4">
          <div className="border rounded-lg p-2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-[#72787F] font-poppins">
                  {personalInfoData.personalInfo}
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#26282B]">
                    {personalInfoData.fullname}
                  </label>
                  <Input
                    placeholder="Insert text here"
                    type={InputType.Text}
                    variant={InputVariant.Outlined}
                    value={""}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#26282B]">
                    {personalInfoData.address}
                  </label>
                  <Input
                    placeholder="Insert text here"
                    type={InputType.Text}
                    variant={InputVariant.Outlined}
                    value={""}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#26282B]">
                    {personalInfoData.bio}
                  </label>
                  <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#26282B]">
                    {personalInfoData.email}
                  </label>
                  <Input
                    placeholder="Insert text here"
                    type={InputType.Text}
                    variant={InputVariant.Outlined}
                    value={""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-[#72787F] font-poppins">
                  {personalInfoData.socialLink}
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#26282B]">
                    {personalInfoData.facebook}
                  </label>
                  <Input
                    placeholder="Insert text here"
                    type={InputType.Text}
                    variant={InputVariant.Outlined}
                    value={""}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#26282B]">
                    {personalInfoData.linkedin}
                  </label>
                  <Input
                    placeholder="Insert text here"
                    type={InputType.Text}
                    variant={InputVariant.Outlined}
                    value={""}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#26282B]">
                    {personalInfoData.twitter}
                  </label>
                  <Input
                    placeholder="Insert text here"
                    type={InputType.Text}
                    variant={InputVariant.Outlined}
                    value={""}
                  />
                </div>
                <div className="flex justify-end mt-6">
                  <button className="bg-gray-300 text-gray-800 rounded-md py-2 px-4 mr-3">
                    Cancel
                  </button>
                  <button className="bg-gradient-to-r from-[#BFA59A] to-[#3F271E] text-white rounded-md py-2 px-4">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
