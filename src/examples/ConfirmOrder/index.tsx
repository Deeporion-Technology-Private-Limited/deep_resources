import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Box, Button } from "@/components";
import ConfirmOrders from "../../images/ConfirmOrders.svg";

const confirmOrderStyles = cva(
  [
    "max-w-[50rem]",
    "flex",
    "flex-col",
      "items-center",
      "justify-center",
  ]
);

type ConfirmOrderProps = ComponentProps<"div"> & {
  children?: React.ReactNode;
  title?: string;
  message?: string;
  description?: string;
  onClick?: () => void;
};

const ConfirmOrder = forwardRef<HTMLDivElement, ConfirmOrderProps>(
  ({ title, description, message, onClick, className, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(confirmOrderStyles(), className)}
        {...props}
      >
        <Box className="w-full h-[36rem] flex-col justify-start items-center gap-10 inline-flex">
          <Box className="max-w-[20rem] h-[14.25rem] pr-[0.48px] pb-[0.07px] justify-center items-center inline-flex">
            <Box className="">
              <img src={ConfirmOrders} alt="Confirm Order" className="w-fit h-full object-contain" />
            </Box>
          </Box>
          <Box className=" w-full flex-col justify-center items-center gap-1.5 flex">
            <Box className="py-1 rounded-md justify-start items-center gap-2.5 inline-flex">
              <Box className="text-[#26282B] text-[26px] font-normal font-['Poppins']">{title}</Box>
            </Box>
            <Box className=" w-full py-1 rounded-md items-center gap-2.5 inline-flex">
              <Box className="text-[#26282B] w-full text-center text-3xl font-bold font-['Poppins']">{message}</Box>
            </Box>
            <Box className="w-full rounded-md justify-start items-center gap-2.5 inline-flex">
              <Box className="grow shrink basis-0 px-20 text-center text-[#26282B] text-[26px] font-normal font-['Poppins']">
                {description}
              </Box>
            </Box>
          </Box> 
            <Box>
              <Button className="w-full p-[16px]" onClick={onClick}>{children} </Button>
            </Box>
        </Box>
       </Box>
    );
  }
);

export default ConfirmOrder;
