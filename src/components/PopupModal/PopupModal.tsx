import { DefaultButton } from "@/components/Button";
import { Box } from "@/components/Layout";
import { Text } from "@/components/Text";
import { color } from "@/utils/colorThemes";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ButtonSize, ButtonVariant } from ".";

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

interface IModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalStyles> {
  onClose: () => void;
  children?: ReactNode;
  description?: string;
  header: ReactNode;
  button02: boolean;
  button01: boolean;
  modalbutton: boolean;
  openModal: boolean;
  crossIcon?: boolean;
  handleClose?: () => void;
  onButton01Click?: () => void;
  onButton02Click?: () => void;
  headerStyle?: string;
  descriptionStyles?: string;
  button01Styles?: string;
  button02Styles?: string;
  mobileClasses?: boolean;
  modalTriggerButtonText?: string;
  button1Text?: string;
  button2Text?: string;
}

export const PopupModal = forwardRef<HTMLDivElement, IModalProps>(
  (props, ref) => {
    const {
      button02,
      button01,
      children,
      description,
      header,
      openModal,
      modalbutton,
      crossIcon,
      handleClose,
      onButton01Click,
      onButton02Click,
      headerStyle,
      descriptionStyles,
      button01Styles,
      button02Styles,
      modalTriggerButtonText,
      button1Text,
      button2Text,
    } = props;

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    useEffect(() => {
      setIsOpen(openModal);
    }, [openModal]);
    return (
      <>
        {isOpen && (
          <div
            className="fixed left-0 top-0 z-[2] bg-black w-full h-full opacity-50"
            onClick={toggleMenu}
          />
        )}
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
              {modalTriggerButtonText}
            </DefaultButton>
          )}

          {isOpen && (
            <div
              className={`fixed left-0 top-0 z-[3] flex h-full w-full overflow-y-auto ${props.mobileClasses ? "items:end justify:end md:items-center md:justify-center justify-center" : "items-center justify-center"}`}
              onClick={toggleMenu}
              ref={ref}
            >
              <div
                className={`flex flex-col relative overflow-auto rounded rounded-br-3xl bg-[${color.plainWhite}] p-4 shadow-md md:max-w-7xl ${props.mobileClasses ? "mt-[30vh] w-[100%] overflow-hidden rounded-br-none rounded-tr-3xl md:my-auto md:w-[50%] md:rounded md:rounded-br-3xl md:rounded-tr lg:w-[45%]" : "my-auto w-[35%]"}`}
                data-testid="Open-toggle"
                onClick={(e) => e.stopPropagation()}
              >
                <Box
                  className={`flex font-bold text-2xl justify-between pb-3 ${headerStyle}`}
                >
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
                      <IoMdClose
                        className="text-gray-500 absolute top-2 right-2"
                        size={26}
                      />
                    </div>
                  )}
                </Box>

                <Text
                  className={`text-left text-sm font-semibold leading-[21px] text-[${color.lightGray}] ${descriptionStyles}`}
                >
                  {description}
                </Text>

                {children}
                <div className={`flex justify-end pt-6`}>
                  {button01 && (
                    <DefaultButton
                      hover
                      size={ButtonSize.Small}
                      className={`ml-2 mr-2 w-1/4 ${button01Styles}`}
                      variant={ButtonVariant.DefaultPrimary}
                      onClick={onButton01Click}
                      data-testid="button01"
                    >
                      {button1Text}
                    </DefaultButton>
                  )}
                  {button02 && (
                    <DefaultButton
                      hover
                      variant={ButtonVariant.DefaultPrimary}
                      size={ButtonSize.Small}
                      className={`ml-2 mr-2 w-1/4 ${button02Styles}`}
                      onClick={onButton02Click}
                      data-testid="button02"
                    >
                      {button2Text}
                    </DefaultButton>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
);
