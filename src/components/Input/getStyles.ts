import { cva } from "class-variance-authority";
import { InputType, InputVariant } from "../Input/type";

export const inputStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-primary-500",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
]);

export const simpleOutlineStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
  "outline-none",
  "focus:outline-none",
  "focus:border-gray-200",
]);

export const otpInputStyles = cva([
  "w-12",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "text-center",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
  "outline-none",
  "focus:outline-primary-500",
  "focus:border-transparent",
]);

export function getConditionalStyles(
  type: string,
  value: any,
  className: string | undefined,
  variant: InputVariant
): string {
  let styles = className ? `${className} ` : "";

  if (type === InputType.Input) {
    styles += simpleOutlineStyles();
  } else if (type === InputType.Otp) {
    styles += otpInputStyles();
  } else {
    styles += inputStyles();
  }

  if (type === InputType.SearchIcon && !value) {
    styles += " pl-10";
  }

  if (type === InputType.Prefix) {
    styles += " pl-10";
  }

  switch (variant) {
    case InputVariant.Standard:
      styles += " border-gray-300";
      break;
    case InputVariant.Filled:
      styles += " bg-gray-100 border-b border-gray-400";
      break;
    case InputVariant.Outlined:
      styles += " border border-gray-300";
      break;
    default:
      break;
  }
  return styles.trim();
}

