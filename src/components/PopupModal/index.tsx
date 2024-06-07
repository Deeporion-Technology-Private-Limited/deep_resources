import { VariantProps, cva } from "class-variance-authority";
import { useState, forwardRef, ComponentProps, ReactNode } from "react";

import { ButtonVariant, ButtonSize } from "@/components/Button/type";
import CloseIcon from "./Icons/CloseIcon";
import { PrimaryButton } from "../PrimaryButton";
import { Headings } from "./Headings";

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
  saveButton: boolean;
  cancelButton: boolean;
  contentSize: string;
}

type ModalProps = ComponentProps<"div"> & VariantProps<typeof modalStyles>;
export const Modal = forwardRef<ModalProps, ModalPropss>(
  ({ onClose, title, contentSize, contents, saveButton, cancelButton }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
          >
            <div
              className="bg-white p-8 rounded shadow-md w-6/12 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                onClick={toggleMenu}
                className="w-full flex justify-end items-end"
              >
                <CloseIcon />{" "}
              </div>
              <div className="mb-3">
                <Headings
                  FontSize="text-2xl"
                  fontWeight="font-bold"
                  text={title}
                />{" "}
              </div>
              <p>
                <Headings
                  className="font-normal"
                  FontSize={contentSize}
                  fontWeight="font-normal"
                  text={contents}
                ></Headings>
              </p>
              <div
                className={`flex ${cancelButton && saveButton ? "justify-between" : "justify-end"}  border-t border-[rgba(255, 255, 255, 1)] pt-6 mt-6`}
              >
                {saveButton && (
                  <PrimaryButton
                    type="button"
                    hover
                    variant={ButtonVariant.DefaultPrimary}
                    size={ButtonSize.Small}
                    className="w-1/4"
                  >
                    Save
                  </PrimaryButton>
                )}

                {cancelButton && (
                  <PrimaryButton
                    type="button"
                    hover
                    size={ButtonSize.Small}
                    className="w-1/4"
                    variant={ButtonVariant.DefaultPrimary}
                    onClick={toggleMenu}
                  >
                    Cancel
                  </PrimaryButton>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);
