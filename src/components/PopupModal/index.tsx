import { VariantProps, cva } from "class-variance-authority";
import {
  useState,
  forwardRef,
  ReactNode,
  useEffect,
  
} from "react";
import { ButtonVariant, ButtonSize } from "../Button/type";
import { Box, Button } from "..";
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
// interface ModalOwnProps {
//   onClose: () => void;
//   children?: ReactNode;
//   header: ReactNode;
//   button02: boolean;
//   button01: boolean;
//   modalbutton: boolean;
//   openModal: boolean;
//   crossIcon?: boolean;
//   handleClose?: () => void;
// }

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
}
// type ModalProps = ModalOwnProps &
//   AllHTMLAttributes<HTMLDivElement> &
//   VariantProps<typeof modalStyles>;
// type ModalProps = ModalPropss &
//   ComponentProps<"div"> &
   
export const Modal = forwardRef<HTMLDivElement, ModalProps>((props,ref) => {
const { button02,
  button01,
  children,
  header,
  openModal,
  modalbutton,
  crossIcon,
  handleClose,

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
          <Button
            type="button"
            hover
            variant={ButtonVariant.DefaultPrimary}
            size={ButtonSize.Small}
            onClick={toggleMenu}
            test-id="ToggleBtn"
          >
            Open Modal
          </Button>
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
                  <Button
                    hover
                    size={ButtonSize.Small}
                    className="w-1/4 mr-2 ml-2"
                    variant={ButtonVariant.DefaultPrimary}
                    onClick={toggleMenu}
                    data-testid="button01"
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
                    data-testid="button02"
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
