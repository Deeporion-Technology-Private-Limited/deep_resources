import { VariantProps, cva } from "class-variance-authority";
import { useState, forwardRef, ComponentProps, ReactNode } from "react";

import { ButtonVariant, ButtonSize } from "@/components/Button/type";
import CloseIcon from "./Icons/CloseIcon";
import { Button,Headings } from "..";


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
  SaveChanges: () => void;
  children?: ReactNode;
  title: string;
  contents: string;
  button02: boolean;
  button01: boolean;
  buttontext1: string;
  buttontext2: string;
}

type ModalProps = ComponentProps<"div"> & VariantProps<typeof modalStyles>;
export const Modal = forwardRef<ModalProps, ModalPropss>(
  ({
    onClose,
    title,
    buttontext1,
    buttontext2,
    button02,
    button01,
    children,
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <Button
          type="button"
          hover
          variant={ButtonVariant.DefaultPrimary}
          size={ButtonSize.Small}
          onClick={toggleMenu}
        >
          Open Modal
        </Button>
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 overflow-y-auto"
            onClick={onClose}
          >
            <div
              className="bg-white p-8 rounded rounded-br-3xl shadow-md min-w-max md:max-w-7xl w-6/12 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex justify-between border-b border-[rgba(255, 255, 255, 1)]">
                <Headings
                  FontSize="text-xl"
                  fontWeight="font-bold"
                  text={title}
                />{" "}
                <div onClick={toggleMenu}>
                  <CloseIcon />
                </div>
              </div>

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
                    {buttontext1}
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
                    {buttontext2}
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
