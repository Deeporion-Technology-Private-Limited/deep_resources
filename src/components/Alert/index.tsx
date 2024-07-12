import { Box, Text } from "@/components";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { AlertType, AlertVariant } from "./type";
import {
  ErrorFilled,
  ErrorOutlined,
  InfoFilled,
  InfoOutlined,
  SuccessFilled,
  SuccessOutlined,
  WarningFilled,
  WarningOutlined,
} from "./Icons/icon";

const alertStyles = cva(
  [
    "flex items-center bg-[#edf7ed] w-[450px] h-[40px] border rounded-[4px] p-4",
  ],
  {
    variants: {
      type: {
        [AlertType.Success]: "bg-[#edf7ed] border-#2E7D32-500 text-[#edf7ed]",
        [AlertType.Info]: "bg-[#e0f7fa] border-blue-500",
        [AlertType.Warning]: "bg-[#fff8e1] border-yellow-500",
        [AlertType.Error]: "bg-[#ffebee] border-red-500",
      },
      variant: {
        [AlertVariant.Filled]: "",
        [AlertVariant.Outlined]: "bg-transparent",
      },
    },
    defaultVariants: {
      type: AlertType.Success,
      variant: AlertVariant.Filled,
    },
    compoundVariants: [
      {
        type: AlertType.Success,
        variant: AlertVariant.Filled,
        className: "bg-[#2e7d32] text-white",
      },
      {
        type: AlertType.Info,
        variant: AlertVariant.Filled,
        className: "bg-[#0288d1] text-white",
      },
      {
        type: AlertType.Warning,
        variant: AlertVariant.Filled,
        className: "bg-[#ed6c02] text-white",
      },
      {
        type: AlertType.Error,
        variant: AlertVariant.Filled,
        className: "bg-[#d32f2f] text-white",
      },
      {
        type: AlertType.Success,
        variant: AlertVariant.Outlined,
        className: "border-green-500 text-green-500",
      },
      {
        type: AlertType.Info,
        variant: AlertVariant.Outlined,
        className: "border-blue-500 text-blue-500",
      },
      {
        type: AlertType.Warning,
        variant: AlertVariant.Outlined,
        className: "border-yellow-500 text-yellow-500",
      },
      {
        type: AlertType.Error,
        variant: AlertVariant.Outlined,
        className: "border-red-500 text-red-500",
      },
    ],
  }
);

const textStyles = cva(
  "font-poppins text-sm font-normal leading-[21px] text-left whitespace-pre-line"
);

const iconStyles = cva("", {
  variants: {
    type: {
      [AlertType.Success]: "text-green-500",
      [AlertType.Info]: "text-blue-500",
      [AlertType.Warning]: "text-yellow-500",
      [AlertType.Error]: "text-red-500",
    },
    variant: {
      [AlertVariant.Filled]: "text-white",
      [AlertVariant.Outlined]: "",
    },
  },
  compoundVariants: [
    {
      type: AlertType.Success,
      variant: AlertVariant.Filled,
      className: "text-white",
    },
    {
      type: AlertType.Info,
      variant: AlertVariant.Filled,
      className: "text-white",
    },
    {
      type: AlertType.Warning,
      variant: AlertVariant.Filled,
      className: "text-white",
    },
    {
      type: AlertType.Error,
      variant: AlertVariant.Filled,
      className: "text-white",
    },
  ],
});

type AlertProps = ComponentProps<typeof Box> &
  VariantProps<typeof alertStyles> & {
    type?: AlertType;
    variant?: AlertVariant;
    showIcon?: boolean;
    children: React.ReactNode;
  };

const getIcon = (type: AlertType, variant: AlertVariant) => {
  const IconComponent = {
    [AlertType.Success]:
      variant === AlertVariant.Filled ? SuccessFilled : SuccessOutlined,
    [AlertType.Error]:
      variant === AlertVariant.Filled ? ErrorFilled : ErrorOutlined,
    [AlertType.Warning]:
      variant === AlertVariant.Filled ? WarningFilled : WarningOutlined,
    [AlertType.Info]:
      variant === AlertVariant.Filled ? InfoFilled : InfoOutlined,
  }[type];

  return <IconComponent />;
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      type = AlertType.Success,
      variant = AlertVariant.Filled,
      showIcon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(alertStyles({ type, variant }), className)}
        {...props}
      >
        {showIcon && (
          <span
            data-testid="icon"
            className={cn("mr-2", iconStyles({ type, variant }))}
          >
            {getIcon(type, variant)}
          </span>
        )}
        <Text className={textStyles()}>{children}</Text>
      </Box>
    );
  }
);
