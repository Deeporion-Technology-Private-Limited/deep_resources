import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import {
  useState,
  forwardRef,
  ReactNode,
  useEffect,
  
} from "react";
import { ButtonVariant, ButtonSize } from "../types";
import { Box, DefaultButton } from "..";
import {Close} from "../Icons"
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

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> ,VariantProps<typeof modalStyles> {
  onClose: () => void;
  children?: ReactNode;
  header: ReactNode;
  button02: boolean;
  button01: boolean;
  modalbutton: boolean;
  openModal: boolean;
  crossIcon?: boolean;
  handleClose?: () => void;
  buttonText1:string;
  buttonText2:string;
  buttonModel:string;
}

   
export const PopupModal = forwardRef<HTMLDivElement, ModalProps>((props,ref) => {
const { button02,
  button01,
  children,
  header,
  openModal,
  modalbutton,
  crossIcon,
  handleClose,
  buttonText1,
buttonText2,
buttonModel
} = props

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    useEffect(() => {
      setIsOpen(openModal);
    }, [openModal]);
    return (
      <div>
        {modalbutton && (
          <DefaultButton
            type="button"
            hover
            variant={ButtonVariant.DefaultPrimary}
            size={ButtonSize.Small}
            onClick={toggleMenu}
            test-id="ToggleBtn"
          >
            {buttonModel}
          </DefaultButton>
        )}

        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 overflow-y-auto z-[9999]"
            onClick={toggleMenu}
            ref={ref}
          >
            <div
              className="bg-white  p-8 rounded overflow-auto my-auto  rounded-br-3xl shadow-md min-w-max md:max-w-7xl w-6/12 flex flex-col"
              data-testid="Open-toggle"
              onClick={(e) => e.stopPropagation()}
            >
              <Box className="flex justify-between">
                {header}
                {crossIcon && (
                  <div
                    onClick={() => {
                      toggleMenu();
                      handleClose ? handleClose() : null;
                    }}
                    data-testid="close-icon"
                    className="cursor-pointer"
                  >
                     <Close />
                  </div>
                )}
              </Box>

              {children}
              <div className={`flex justify-end pt-6`}>
                {button01 && (
                  <DefaultButton
                    hover
                    size={ButtonSize.Small}
                    className="w-1/4 mr-2 ml-2"
                    variant={ButtonVariant.DefaultPrimary}
                    onClick={toggleMenu}
                    data-testid="button01"
                  >
                    {buttonText1}
                  </DefaultButton>
                )}
                {button02 && (
                  <DefaultButton
                    hover
                    variant={ButtonVariant.DefaultPrimary}
                    size={ButtonSize.Small}
                    className="w-1/4 mr-2 ml-2"
                    onClick={toggleMenu}
                    data-testid="button02"
                  >
                    {buttonText2}
                  </DefaultButton>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);
