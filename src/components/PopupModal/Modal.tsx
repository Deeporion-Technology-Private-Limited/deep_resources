import { VariantProps, cva } from "class-variance-authority";
import { useState, forwardRef, ComponentProps, ReactNode } from "react";
import { Button } from "../Button";
import { ButtonVariant } from "@/components/Button/type";
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
          "bg-opacity-50"
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
  SaveChanges:()=>void;
  children?: ReactNode;
  title: string;
  contents: ReactNode;
  saveButton:boolean,
  cancelButton:boolean,
}

type ModalProps = ComponentProps<"div"> & VariantProps<typeof modalStyles>;
export const Modal = forwardRef<ModalProps, ModalPropss>(({ onClose, title, contents,saveButton,cancelButton}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {isOpen &&
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          
          onClick={onClose}
        >
          <div className="bg-white p-8 rounded shadow-md w-6/12 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div onClick={toggleMenu} className="w-full flex justify-end items-end"><CloseIcon /> </div>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p>
              {contents}
            </p>
            <div className={`flex ${cancelButton && saveButton  ?'justify-between':"justify-end"}  border-t border-[rgba(255, 255, 255, 1)] pt-6 mt-6`}>
              {saveButton &&   <Button
                type="button"
                variant={ButtonVariant.DefaultPrimary}
                
                style={webstyle.loginButton}
              >
                Save
              </Button> }
          
              {cancelButton &&  <Button
                type="button"
                variant={ButtonVariant.DefaultPrimary}
               
                style={webstyle.loginButton}
                onClick={toggleMenu}
              >
                Cancel
              </Button> }
             

            </div>

          </div>
        </div>
      }

    </div>

  );
});

const webstyle = {
  inputBoxDesign: {
    width: "360px",
    height: "56px",
    border: "1px solid #C9CDD2",
    borderRadius: "8px",
    color: "white",
    padding: "10px 8px",
  },
  loginButton: {
    width: "30%",
    height: "auto",
    borderRadius: "8px",
    padding: "16px",
    background: "linear-gradient(to right, #BFA59A, #3F271E)",
    fontWeight: 600,
    fontSize: "16px",
    fontFamily: "poppins",
    color: "#FFFFFF",
    lineHeight: "24px",
    align: "center",
  },
};


