import { VariantProps, cva } from "class-variance-authority";
import { useState, forwardRef, ComponentProps, ReactNode, useEffect } from "react";

import { ButtonVariant, ButtonSize } from "@/components/Button/type";
import { Box, Button,Headings } from "..";
import CloseIcon from "./Icons/CloseIcon";

const modalStyles = cva(
  [
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "flex",
    "items-center",
    "justify-center",
    "bg-black",
    "bg-opacity-50",
  ],
  {
    variants: {
      size: {
        small: "max-w-sm",
        medium: "max-w-md",
        large: "max-w-lg",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

interface ModalPropss {
  onClose: () => void;
  children?: ReactNode;
  header: ReactNode;
  button02: boolean;
  button01: boolean;
 modalbutton:boolean;
 openModal:boolean;
//  closeModal:boolean;
}

type ModalProps = ComponentProps<"div"> & VariantProps<typeof modalStyles>;
export const Modal = forwardRef<ModalProps, ModalPropss>(
  ({
    button02,
    button01,
    children,
    header,
    openModal,
    modalbutton,
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen)
    };
    useEffect(()=>{
      toggleMenu()
    },[])
    return (
      <div>{
        modalbutton && 
        <Button
          type="button"
          hover
          variant={ButtonVariant.DefaultPrimary}
          size={ButtonSize.Small}
          onClick={toggleMenu}
        >
          Open Modal
        </Button>
        }
        
        {(isOpen) && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 py-4 overflow-y-auto"
            onClick={toggleMenu}
          >
            <div
              className="bg-white mt-4 p-8 rounded overflow-auto my-auto  rounded-br-3xl shadow-md min-w-max md:max-w-7xl w-6/12 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
             <Box className="flex justify-between">
             {header}
              <div  onClick={toggleMenu}>
              <CloseIcon /> 
              </div>
             </Box>
             
              {children}
              <div className={`flex justify-end pt-6`}>
                {button01 && (
                  <Button
                    hover
                    size={ButtonSize.Small}
                    className="w-1/4 mr-2 ml-2"
                    variant={ButtonVariant.DefaultPrimary}
                    onClick={toggleMenu}
                  >
                    button
                  </Button>
                )}
                {button02 && (
                  <Button
                    hover
                    variant={ButtonVariant.DefaultPrimary}
                    size={ButtonSize.Small}
                    className="w-1/4 mr-2 ml-2"
                    onClick={toggleMenu}
                  >
                    button
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);
