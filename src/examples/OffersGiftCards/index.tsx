import { AutoComplete, Box, BreadCrumb, Button, Input } from "@/components";
import { cn } from "@/utils";
import {
  ChangeEvent,
  ComponentProps,
  DragEventHandler,
  forwardRef,
  useRef,
  useState,
} from "react";
import { ILabels } from "../GiftCards/data";
import { InputType, InputVariant } from "@/components/Input/type";
import infoLogo from "../../images/Avatar3.svg";
import { AdminSidebar } from "../AdminSidebar";
import {
  Barchart,
  Catalogue,
  Seller,
  WareHouse,
  Gift,
  Agents,
  Orders,
} from "../AdminSidebar/adminbarConst";
import Checklist from "./Checklist";
import { newOfferData } from "./OfferData";

type AddNewGiftCardProps = ComponentProps<typeof Box> & {
  labelsArray: ILabels[];
  categoriesArray: ILabels[];
  className?: string;
  handleCancelBtn: () => void;
  handleSaveBtn: () => void;
};

const OffersGiftCards = forwardRef<HTMLDivElement, AddNewGiftCardProps>(
  ({ className, handleCancelBtn, handleSaveBtn, ...props }, ref) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileUpload = (files: any) => {
      const file = files[0];
      if (file && file.type.startsWith("image/")) {
        setSelectedFile(file);
      } else {
        alert("Please select an image file.");
      }
    };

    const handleDrag: DragEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleDrop = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileUpload(e.dataTransfer.files);
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        handleFileUpload(e.target.files);
      }
    };

    const onButtonClick = () => {
      inputRef.current?.click();
    };

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      setSelectedFile(null);
    };
    
    const bell = "https://deepresources.s3.ap-south-1.amazonaws.com/images/NotificationsNone.svg";
    return (
      <div className="flex">
        <div className="flex-none w-64 bg-white">
          <AdminSidebar
            Data={[
              {
                menuLeftIcon: <Barchart />,
                menus: "Dashboard",
              },
              {
                menuLeftIcon: <Catalogue />,
                menus: "Catalogue",
              },
              {
                menuLeftIcon: <Seller />,
                menus: "Seller",
              },
              {
                menuLeftIcon: <WareHouse />,
                menus: "Warehouse",
              },
              {
                menuLeftIcon: <Agents />,
                menus: "Agents",
              },
              {
                menuLeftIcon: <Orders />,
                menus: "Orders",
              },
              {
                menuLeftIcon: <Gift />,
                menus: "Offers & Gift Cards",
              },
              
            ]}
            logo="/src/examples/AdminSidebar/icon/Logo.svg"
          />
        </div>
        <div className="flex-1">
          <Box
            ref={ref}
            className={cn("w-full h-full flex flex-col gap-6", className)}
            {...props}
          >
            <Box className="w-full h-full px-10">
              <div>
                <div className="flex items-center justify-between gap-2 py-1">
                  <BreadCrumb
                    breadCrumbItems={[
                      { href: "/offer", text: "Offers & Gifts Cards" },
                      { href: "/new offer", text: "Add New Offers" },
                    ]}
                    defaultSeparatorIconUrl="/src/components/BreadCrumb/icon/RightArrow.svg"
                  />
                  <div className="flex gap-2">
                    <img src={infoLogo} alt="Icon 1" className="w-11 h-11" />
                    <img src={bell} alt="Icon 2" className="w-11 h-11" />
                  </div>
                </div>
              </div>
            </Box>
            <Box className="w-full h-full px-10">
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 px-10 bg-white pt-4 pb-4">
                <div className="w-full md:w-2/3">
                  <form
                    id="form-file-upload"
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className="border-2 rounded-lg border-dashed border-[#C9CDD2] bg-white flex items-center justify-center mb-4"
                  >
                    <input
                      ref={inputRef}
                      type="file"
                      id="input-file-upload"
                      multiple={false}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <label
                      id="label-file-upload"
                      htmlFor="input-file-upload"
                      className={`w-full h-64 text-center relative rounded-lg ${dragActive ? "bg-white" : "bg-gray-100"} flex items-center justify-center cursor-pointer`}
                    >
                      {selectedFile ? (
                        <>
                          {selectedFile?.type.startsWith("image/") ? (
                            <div className="relative group">
                              <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Preview"
                                className="h-60 w-48"
                              />
                              <button
                                className="absolute top-2 right-2 text-white bg-transparent rounded-md p-1 group-hover:bg-gray-300"
                                onClick={(e) => handleCancel(e)}
                              >
                                X
                              </button>
                            </div>
                          ) : (
                            <p className="text-[#26282B] font-bold">
                              {selectedFile?.name}
                            </p>
                          )}
                        </>
                      ) : (
                        <Box className="flex flex-col items-center justify-center gap-4 py-8">
                          <img
                            src="src/images/upload.svg"
                            alt=""
                            className="max-h-20"
                          />
                          <p className="text-[#26282B] font-bold">
                            Upload your files here
                          </p>
                          <p className="text-[#72787F] text-[14px]">
                            Drag and drop the files here
                          </p>
                          <Button
                            iconUrl="/src/components/Button/ButtonImage/AddItem.svg"
                            className="bg-transparent text-[#3F271E] w-fit"
                            onClick={onButtonClick}
                          >
                            Browse
                          </Button>
                        </Box>
                      )}
                    </label>
                    {dragActive && (
                      <div
                        id="drag-file-element"
                        className="absolute inset-0 rounded-lg border-2 border-gray-300"
                      ></div>
                    )}
                  </form>
                  <div className="flex flex-col w-full">
                    <div className="flex w-full flex-wrap">
                      <div className="grid grid-cols-1 w-full gap-6 rounded-lg">
                        <div>
                          <label className="block mb-1 text-sm font-semibold text-gray-800">
                            {newOfferData.codeName}
                          </label>
                          <Input
                            value=""
                            placeholder=""
                            type={InputType.Text}
                            variant={InputVariant.Outlined}
                          />
                        </div>

                        <div>
                          <label className="block mb-1 text-sm font-semibold text-gray-800">
                            {newOfferData.promoCode}
                          </label>
                          <Input
                            value=""
                            placeholder=""
                            type={InputType.Text}
                            variant={InputVariant.Outlined}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full pt-4">
                      <div className="flex w-full flex-wrap">
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 rounded-lg">
                          <div>
                            <label className="block mb-1 text-sm font-semibold text-gray-800">
                              {newOfferData.startDate}
                            </label>
                            <Input
                              value=""
                              placeholder=""
                              type={InputType.Date}
                              variant={InputVariant.Outlined}
                            />
                          </div>
                          <div>
                            <label className="block mb-1 text-sm font-semibold text-gray-800">
                              {newOfferData.endDate}
                            </label>
                            <AutoComplete
                              placeholder="Insert text here"
                              suggestions={["Discount on amount", "Never"]}
                              type="text"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 text-sm font-semibold text-gray-800">
                              {newOfferData.client}
                            </label>
                            <Input
                              value=""
                              placeholder=""
                              type={InputType.Text}
                              variant={InputVariant.Outlined}
                            />
                          </div>
                          <div>
                            <label className="block mb-1 text-sm font-semibold text-gray-800">
                              {newOfferData.promo}
                            </label>
                            <Input
                              value=""
                              placeholder=""
                              type={InputType.Text}
                              variant={InputVariant.Outlined}
                            />
                          </div>
                        </div>
                        <div className="flex w-full flex-wrap pt-4">
                          <div className="grid grid-cols-1 w-full gap-6 rounded-lg">
                            <div>
                              <label className="block mb-1 text-sm font-semibold text-gray-800">
                                {newOfferData.promoType}
                              </label>
                              <AutoComplete
                                placeholder="Insert text here"
                                suggestions={["Discount on amount", "none"]}
                                type="text"
                              />
                            </div>

                            <div>
                              <label className="block mb-1 text-sm font-semibold text-gray-800">
                                {newOfferData.amountOff}
                              </label>
                              <Input
                                value=""
                                placeholder=""
                                type={InputType.Text}
                                variant={InputVariant.Outlined}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <Checklist />
                </div>
              </div>
              <Box className="flex justify-end gap-4 py-6 px-10 bg-white">
                <Button
                  className="w-fit bg-[#E8EBED] text-[#72787F]"
                  onClick={handleCancelBtn}
                >
                  Cancel
                </Button>
                <Button className="w-fit" onClick={handleSaveBtn}>
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    );
  }
);

export default OffersGiftCards;
