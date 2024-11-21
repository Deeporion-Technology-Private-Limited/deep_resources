import { Box, BreadCrumb, DefaultButton, Input } from "@/components";
import { cn } from "@/utils";
import {
  ChangeEvent,
  ComponentProps,
  DragEventHandler,
  forwardRef,
  useRef,
  useState,
} from "react";
import { ILabels, InputType, InputVariant } from "@/components/types";
import SearchImage from "@/images/InputIcons/SearchImage";
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
import { catalogueData, specificationData } from "./CatalogueData";
import { Setting } from "@/components/MenuItem/Icon/icon";

type AddNewGiftCardProps = ComponentProps<typeof Box> & {
  labelsArray: ILabels[];
  categoriesArray: ILabels[];
  className?: string;
  handleCancelBtn: () => void;
  handleSaveBtn: () => void;
};

const CatalogueProducts = forwardRef<HTMLDivElement, AddNewGiftCardProps>(
  ({ className, handleCancelBtn, handleSaveBtn, ...props }, ref) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const boorBell = "https://deepresources.s3.ap-south-1.amazonaws.com/images/NotificationsNone.svg"

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

    return (
      <div className="flex">
        <div className="flex-none w-64">
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
              {
                menuLeftIcon: <Setting />,
                menus: "Settings",
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
            <Box className="w-full h-full px-10 ">
              <div>
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
                    <img src={boorBell} alt="Icon 2" className="w-11 h-11" />
                  </div>
                </div>
              </div>
              <form
                id="form-file-upload"
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                className="border-2 rounded-lg border-dashed border-[#C9CDD2] bg-white flex items-center justify-center"
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
                        <>
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
                        </>
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
                      <p className="text-[#72787F] font-[14px]">
                        Drag and drop the files here
                      </p>
                      <DefaultButton
                        iconUrl="/src/components/Button/ButtonImage/AddItem.svg"
                        className="bg-transparent text-[#3F271E] w-fit"
                        onClick={() => onButtonClick()}
                      >
                        Browse
                      </DefaultButton>
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
            </Box>
            <div className="flex flex-col w-full px-10">
              <div className="flex w-full flex-wrap">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 rounded-lg">
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.productName}</label>
                    <Input
                      value={""}
                      placeholder="Enter name of the product"
                      search={<SearchImage />}
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.productPrice}</label>
                    <Input
                      value={""}
                      placeholder="Enter price of the product"
                      search={<SearchImage />}
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.productDetail}</label>
                    <Input
                      value={""}
                      placeholder="Enter product detail"
                      search={<SearchImage />}
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.material}</label>
                    <Input
                      value={""}
                      placeholder="Enter material and care"
                      search={<SearchImage />}
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full px-10 flex-wrap">
              <div>
                <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.sizes}</label>
                <div className="flex p-1 overflow-x-auto">
                  {catalogueData.sizes.map((size) => (
                    <button
                      key={size}
                      className="flex justify-center items-center gap-2 flex-shrink-0 border rounded-lg px-3 py-2 m-1 hover:bg-gray-100 bg-white border-gray-200 text-gray-700"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full px-10">
              <h2 className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.title}</h2>
              <div className="flex w-full flex-wrap">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 rounded-lg">
                  <div>
                  <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.productName}</label>
                    <Input
                      value={""}
                      placeholder="Enter name of the product"
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.productPrice}</label>
                    <Input
                      value={""}
                      placeholder="Enter price of the product"
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.productName}</label>
                    <Input
                      value={""}
                      placeholder="Enter name of the product"
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.productPrice}</label>
                    <Input
                      value={""}
                      placeholder="Enter price of the product"
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.productName}</label>
                    <Input
                      value={""}
                      placeholder="Enter name of the product"
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.productPrice}</label>
                    <Input
                      value={""}
                      placeholder="Enter price of the product"
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.productName}</label>
                    <Input
                      value={""}
                      placeholder="Enter name of the product"
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-800">{specificationData.productPrice}</label>
                    <Input
                      value={""}
                      placeholder="Enter price of the product"
                      type={InputType.Text}
                      variant={InputVariant.Outlined}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Box className="flex justify-end gap-4 py-6 px-10">
              <DefaultButton
                className="w-fit bg-[#E8EBED] text-[#72787F]"
                onClick={handleCancelBtn}
              >
                Cancel
              </DefaultButton>
              <DefaultButton className="w-fit" onClick={handleSaveBtn}>
                Save
              </DefaultButton>
            </Box>
          </Box>
        </div>
      </div>
    );
  }
);

export default CatalogueProducts;
