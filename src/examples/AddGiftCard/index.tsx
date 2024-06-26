import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { Box, Button, Elevation, Input, Text } from "@/components";
import ProductCard from "@/components/Cards/ProductCards";
import BirthdayGift from "../../images/BirthdayGift.svg"
import { ElevationShadow } from "@/components/Elevation/type";
import { ButtonSize, ButtonVariant } from "@/components/Button/type";
import { initialData, RateData } from "./data";
import { InputType, InputVariant } from "@/components/Input/type";

const addgiftStyles = cva(["w-full "]);

type AddGiftCardProps = ComponentProps<"div"> & VariantProps<typeof addgiftStyles> & {
  children?: React.ReactNode;
};

export const AddGiftCard = forwardRef<HTMLDivElement, AddGiftCardProps>(
  ({ className, children, ...props }, ref) => {

    const [selectedButton, setSelectedButton] = useState<number | null>(null);
    const [initialState, setInitialState] = useState<typeof initialData>(initialData);

    const handleButtonClick = (index: number) => {
      setSelectedButton(index);
      alert(`selected button ${index}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setInitialState(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <Box
        ref={ref}
        className={cn(addgiftStyles({}), className)}
        {...props}
      >
        <Box className="w-full flex">
          <ProductCard
            imageSrc={BirthdayGift}
          />
        </Box>
        <Box className="w-full mt-5">
          <Elevation
            shadow={ElevationShadow.Medium}
            className="w-full h-full flex justify-start items-start px-[8px] py-[40px]  border-none"
          >
            <Box className="w-full">
              <Text className="w-fit font-bold ">Choose an amount</Text>
              <Box className="w-full flex flex-wrap">
                {RateData.map((data, index) => (
                  <Button
                    key={index}
                    variant={ButtonVariant.DefaultDarkBackground}
                    children={`${data.value}`}
                    hover={true}
                    size={ButtonSize.Medium}
                    className=
                    {`w-[5rem] h-[3.3rem] mr-[9px] mt-[20px] text-[#26282B] font-normal text-sm"
                    ${selectedButton === index ? "bg-[#BFA59A] text-[#26282B]" : ""}`}
                    onClick={() => handleButtonClick(index)}
                  />
                ))}
              </Box>
            </Box>
          </Elevation>
        </Box>
        <Box className=" w-full h-full bg-[#EBE3E0] mt-5 flex items-center rounded-[4px]">
          <Text className="w-[81.25rem] py-[0.75rem] ml-5">Personalize your E- Gift Card</Text>
        </Box>
        <Box className="w-full mt-5">
          <Elevation className="w-full h-full flex justify-start items-start ">
            <Box className="w-full flex flex-wrap">
              <Box className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="recipient_name" className="font-medium">Recipient Name</label>
                <Input className="mt-[4px]" placeholder="Enter recipient name" value={initialState.recipient_name} type={InputType.Text} variant={InputVariant.Outlined} onChange={handleChange} />

              </Box>
              <Box className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="recipient_email_id" className="font-medium">Recipient Email ID</label>
                <Input className="mt-[4px]" placeholder="Enter recipient email" value={initialState.recipient_email_id} type={InputType.Email} variant={InputVariant.Standard} onChange={handleChange} />

              </Box>
              <Box className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="dob" className="font-medium">DOB</label>
                <Input className="mt-[4px]" value={initialState.dob} type={InputType.Date} variant={InputVariant.Outlined} onChange={handleChange} />

              </Box>
              <Box className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="sender_email" className="font-medium">Sender Email Id</label>
                <Input className="mt-[4px]" placeholder="Enter sender's email" value={initialState.sender_email} type={InputType.Email} variant={InputVariant.Standard} onChange={handleChange} />

              </Box>
              <Box className="w-full md:w-full px-2  mb-4">
                <label htmlFor="message" className="font-medium">Message</label>
                <Input className=" mt-[4px]" placeholder="Write Message" value={initialState.message} type={InputType.Text} variant={InputVariant.Outlined} onChange={handleChange} />
              </Box>
              <Box className="w-full flex justify-end gap-4 mb-6 mr-[10px]">
                <Button
                  className="w-fit mt-5 font-semibold text-base bg-[#E8EBED] text-[#72787F]"
                  variant={ButtonVariant.DefaultPrimary}
                  size={ButtonSize.Large}
                  children="Add to Cart"
                  onClick={() => alert("Add to Cart")}
                />
                <Button
                  className="w-fit font-semibold text-base mt-5"
                  variant={ButtonVariant.DefaultPrimary}
                  size={ButtonSize.Large}
                  children="Preview"
                  onClick={() => alert("Preview")}
                />
              </Box>
            </Box>
          </Elevation>
        </Box>
        {children}
      </Box>
    );
  }
);
