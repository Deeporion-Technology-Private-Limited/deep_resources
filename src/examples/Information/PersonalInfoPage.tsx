import { useState } from "react";
import { BreadCrumb, Input } from "@/components";
import Photo from "../../images/Photo.png";
import ImagePopup from "./ImagePopup";
import { personalInfoData } from "@/components/Data/Information";
import { InputType, InputVariant } from "@/components/types";
import infoLogo from "../../images/Avatar3.svg";
import { AdminSidebar } from "../AdminSidebar";
import {
  Agents,
  Barchart,
  Catalogue,
  Gift,
  Orders,
  Seller,
  WareHouse,
} from "../AdminSidebar/adminbarConst";

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

  const bell = "https://deepresources.s3.ap-south-1.amazonaws.com/images/NotificationsNone.svg";
  const camera = "https://deepresources.s3.ap-south-1.amazonaws.com/images/CameraAlt.svg";

  return (
    <div className="flex">
      <AdminSidebar
        Data={[
          { menuLeftIcon: <Barchart />, menus: "Dashboard" },
          { menuLeftIcon: <Catalogue />, menus: "Catalogue" },
          { menuLeftIcon: <Seller />, menus: "Seller" },
          { menuLeftIcon: <WareHouse />, menus: "Warehouse" },
          { menuLeftIcon: <Agents />, menus: "Agents" },
          { menuLeftIcon: <Orders />, menus: "Orders" },
          { menuLeftIcon: <Gift />, menus: "Offers & Gift Cards" },
        ]}
        logo="/src/examples/AdminSidebar/icon/Logo.svg"
      />
      <div className="flex-1">
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
          <div className="w-full bg-white shadow-md rounded-lg">
            <div
              className="py-2 px-4 md:px-10 rounded-lg flex justify-start items-center gap-2"
              style={{
                background: "linear-gradient(to right, #BFA59A, #3F271E)",
              }}
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
                    <img
                      src={camera}
                      alt="Profile"
                      className="w-8 h-6 cursor-pointer filter invert grayscale"
                    />
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
      </div>
    </div>
  );
};

export default PersonalInfo;
