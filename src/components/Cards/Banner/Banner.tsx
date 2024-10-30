import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { cn } from "../../../utils";
import { ButtonIconPosition, DefaultButton } from "../../Button";
import { Box } from "../../Layout";
import { Text } from "../../Text";
const productCardStyles = cva([
  "bg-white",
  "shadow-md",
  "overflow-hidden",
  "rounded-lg",
  "flex items-center justify-center",
  "h-[600px]",
  `w-[605px]`,
  "opacity-100",
]);

export type ProductCardProps = ComponentProps<typeof Box> &
  VariantProps<typeof productCardStyles> & {
    imageSrc: string;
    title?: string;
    price?: string;
    children?: string;
    description?: string;
    boxStyle?: string;
    buttonText?: string;
    titleClass?: string;
    descriptionClass?: string;
    buttonClass?: string;
    iconUrl?: string;
  };

export const Banner = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      imageSrc,
      children,
      buttonClass,
      className,
      iconUrl,
      title,
      descriptionClass,
      titleClass,
      description,
      boxStyle,
      buttonText,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(productCardStyles(), className)}
        {...props}
        style={{
          backgroundImage: `Url('${imageSrc}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={boxStyle}>
          <Text as="span" className={titleClass}>
            {title}
          </Text>
          <Text as="p" className={descriptionClass}>
            {description}
          </Text>
          {buttonText && (
            <DefaultButton
              className={buttonClass}
              iconUrl={iconUrl}
              iconPosition={ButtonIconPosition.Right}
            >
              {buttonText}
            </DefaultButton>
          )}

          {children}
        </div>
      </Box>
    );
  }
);
