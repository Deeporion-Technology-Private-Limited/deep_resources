import { ButtonSize, ButtonVariant, DefaultButton } from "@/components/Button";
import { Close } from "@/components/Icons";
import { Box } from "@/components/Layout";
import { color } from "@/utils/colorThemes";
import { VariantProps, cva } from "class-variance-authority";
import { useState, forwardRef, ReactNode, useEffect } from "react";

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
  },
);

interface IModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalStyles> {
  onClose: () => void;
  children?: ReactNode;
  header: ReactNode;
  button02: boolean;
  button01: boolean;
  modalbutton: boolean;
  openModal: boolean;
  crossIcon?: boolean;
  handleClose?: () => void;
  headerStyle?: string;
  mobileClasses?: boolean;
}

export const EModal = forwardRef<HTMLDivElement, IModalProps>((props, ref) => {
  const {
    button02,
    button01,
    children,
    header,
    openModal,
    modalbutton,
    crossIcon,
    handleClose,
    headerStyle,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const isButtons = button01 || button02;
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
          Open Modal
        </DefaultButton>
      )}

      {isOpen && (
        <div
          className={`fixed left-0 top-0 z-[9999] flex h-full w-full overflow-y-auto bg-[${color.black}] bg-opacity-40 ${props.mobileClasses ? "items:end justify:end md:items-center md:justify-center" : "items-center justify-center"}`}
          onClick={toggleMenu}
          ref={ref}
        >
          <div
            className={`flex flex-col overflow-auto rounded-[0.65rem] rounded-br-[2rem] bg-[${color.plainWhite}] p-4 shadow-md md:max-w-7xl ${props.mobileClasses ? "mt-[30vh] w-[100%] overflow-hidden rounded-br-none rounded-tr-3xl md:my-auto md:w-[50%] md:rounded md:rounded-br-3xl md:rounded-tr lg:w-[45%]" : "my-auto w-[35%]"}`}
            data-testid="Open-toggle"
            onClick={(e) => e.stopPropagation()}
          >
            <Box className={`flex justify-between ${headerStyle}`}>
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
            {isButtons && (
              <div className={`flex justify-end pt-6`}>
                {button01 && (
                  <DefaultButton
                    hover
                    size={ButtonSize.Small}
                    className="ml-2 mr-2 w-1/4"
                    variant={ButtonVariant.DefaultPrimary}
                    onClick={toggleMenu}
                    data-testid="button01"
                  >
                    button
                  </DefaultButton>
                )}
                {button02 && (
                  <DefaultButton
                    hover
                    variant={ButtonVariant.DefaultPrimary}
                    size={ButtonSize.Small}
                    className="ml-2 mr-2 w-1/4"
                    onClick={toggleMenu}
                    data-testid="button02"
                  >
                    button
                  </DefaultButton>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});
