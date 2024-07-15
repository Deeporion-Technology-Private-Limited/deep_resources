import { Box, Button, Input, Text } from "@/components";
import { cn } from "@/utils";
import { ChangeEvent, ComponentProps, DragEventHandler, forwardRef, useRef, useState } from "react";
import { ILabels } from "@/components/Data/GiftCards";
import { InputType, InputVariant } from "@/components/Input/type";
import SearchImage from "@/images/InputIcons/SearchImage";
import { FindIconUrl } from "@/utils/Constant";

type AddNewGiftCardProps = ComponentProps<typeof Box> & {
    labelsArray: ILabels[];
    categoriesArray: ILabels[];
    className?: string;
    handleCancelBtn: () => void;
    handleSaveBtn: () => void;


}

const labelArray = [
    {
        id: 1,
        value: "₹ 500",
    },
    {
        id: 2,
        value: "₹ 1,000",
    },
    {
        id: 3,
        value: "₹ 1,500",
    },
    {
        id: 4,
        value: "₹ 2,000",
    },
]


const categories = [
    {
        id: 1,
        value: "Wedding"
    },
    {
        id: 2,
        value: "birthday"
    },
    {
        id: 3,
        value: "congrats"
    },
    {
        id: 4,
        value: "Ramadan"
    },
    {
        id: 5,
        value: "Pongal"
    },
    {
        id: 6,
        value: "best wishes"
    },
    {
        id: 7,
        value: "anniversary"
    },
    {
        id: 8,
        value: "graduation"
    },
    {
        id: 9,
        value: "farewell"
    },
    {
        id: 10,
        value: "Christmas"
    },
    {
        id: 11,
        value: "New Year"
    },
    {
        id: 12,
        value: "Easter"
    },
    {
        id: 13,
        value: "Halloween"
    },
    {
        id: 14,
        value: "Thanksgiving"
    },
    {
        id: 15,
        value: "Valentine's Day"
    },
    {
        id: 16,
        value: "Mother's Day"
    },
    {
        id: 17,
        value: "Father's Day"
    },
    {
        id: 18,
        value: "Independence Day"
    },
    {
        id: 19,
        value: "Diwali"
    },
    {
        id: 20,
        value: "Hanukkah"
    },
]



const AddNewGiftCards = forwardRef<HTMLDivElement, AddNewGiftCardProps>(
    (
        {
            labelsArray = labelArray,
            categoriesArray = categories,
            className,
            handleCancelBtn,
            handleSaveBtn,
            ...props
        }, ref) => {

        const [selectedFile, setSelectedFile] = useState<File | null>(null);
        const [activeLabel, setActiveLabel] = useState<string | null>(null);
        const [activeCategory, setActiveCategory] = useState<string | null>(null);
        const [dragActive, setDragActive] = useState(false);
        const inputRef = useRef<HTMLInputElement | null>(null);



        const handleFileUpload = (files: any) => {
            const file = files[0];
            if (file && file.type.startsWith("image/")) {
                // Process the image file
                setSelectedFile(file);
            } else {
                // Handle non-image file types
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
            e.stopPropagation();  // Stop event propagation to parent elements
            setSelectedFile(null);
        };


        const handleCategories = (label: any) => {
            setActiveCategory(label.value);

        }

        const handleLabelClick = (label: ILabels) => {
            setActiveLabel(label.value);
        };

        const outlineFileUpload = FindIconUrl("OutlineFileUpload.svg");
        const addCircle = FindIconUrl("AddCircle.svg");

        return (
            <Box ref={ref} className={cn("w-full h-full flex flex-col gap-6", className)} {...props}>
                <Box className="w-full h-full px-10 ">
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
                            multiple={false} // Allow only one file to be selected
                            onChange={handleChange}
                            className="hidden"
                        />
                        <label
                            id="label-file-upload"
                            htmlFor="input-file-upload"
                            className={`w-full h-64 text-center relative rounded-lg ${dragActive ? "bg-white" : "bg-gray-100"
                                } flex items-center justify-center cursor-pointer`}
                        >
                            {selectedFile ? (
                                // Render preview of selected file
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
                                // Default upload UI
                                <Box className="flex flex-col items-center justify-center gap-4 py-8">
                                    <img
                                        src={outlineFileUpload}
                                        alt=""
                                        className="max-h-20"
                                    />
                                    <p className="text-[#26282B] font-bold">
                                        Upload your files here
                                    </p>
                                    <p className="text-[#72787F] font-[14px]">
                                        Drag and drop the files here
                                    </p>
                                    <Button
                                        iconUrl={addCircle}
                                        className="bg-transparent text-[#3F271E] w-fit"
                                        onClick={() => onButtonClick()}
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
                </Box>
                <Box className="flex flex-col gap-5 px-4 pt-4 pb-5">
                    <Text className="font-bold">Choose an amount</Text>
                    <Box className="flex gap-2 flex-wrap">
                        {labelsArray?.map((label) => (
                            <Button
                                key={label?.id}
                                className={cn("rounded-lg w-fit border capitalize bg-[##E8EBED] text-[##26282B]", {
                                    "bg-[#EBE3E0] border-[#BFA59A] text-zinc-800": activeCategory === label.value,
                                })}
                                onClick={() => handleCategories(label)}
                            >
                                {label?.value}
                            </Button>
                        ))}
                    </Box>
                </Box>
                <Box className="flex flex-col gap-5 p-[16px_16px_52px_16px]">
                    <Box className="flex flex-col gap-5">
                        <Text className="font-bold">Add Categories</Text>
                        <Input
                            value={""}
                            placeholder="Add category"
                            search={<SearchImage />}
                            type={InputType.SearchIcon}
                            variant={InputVariant.Outlined}
                        />
                    </Box>
                    <Box className="flex flex-col gap-5">
                        <Box className="flex gap-5 items-center w-full p-1 flex-wrap">
                            {categories?.map((label) => (
                                <Button
                                    key={label?.id}
                                    className={cn("rounded-3xl w-fit capitalize bg-[#E8EBED] text-[#72787F]", {
                                        "bg-[#3F271E] text-white": activeLabel === label.value,
                                    })}
                                    onClick={() => handleLabelClick(label)}
                                >
                                    {label?.value}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box className="flex justify-end gap-4 py-6 px-6">
                    <Button className="w-fit bg-[#E8EBED] text-[#72787F]" onClick={handleCancelBtn}>Cancel</Button>
                    <Button className="w-fit" onClick={handleSaveBtn}>Save</Button>
                </Box>
            </Box>
        );
    }
);

export default AddNewGiftCards;
