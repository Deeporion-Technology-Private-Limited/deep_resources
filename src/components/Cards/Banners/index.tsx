import { Box, Button, Text } from "@/components";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { ButtonIconPosition } from "@/components/Button/type";
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

type ProductCardProps = ComponentProps<typeof Box> &
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

const Banner = forwardRef<HTMLDivElement, ProductCardProps>(
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
          <Button
            className={buttonClass}
            iconUrl={iconUrl}
            iconPosition={ButtonIconPosition.Right}
          >
            {buttonText}
          </Button>
          {children}
        </div>
      </Box>
    );
  }
);

export default Banner;
