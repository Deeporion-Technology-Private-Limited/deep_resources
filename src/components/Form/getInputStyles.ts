import { cva } from "class-variance-authority";
import { simpleOutlineStyles } from "../Input";

export const FormInputStyles = cva([
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

export const simpleInputOutlineStyles = cva([
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

const errorStyles = "border-red-500 focus:outline-red-500";

export function getInputConditionalStyles(
  type: string,
  className: string | undefined,
  variant: string,
  errors: boolean
): string {
  let styles = className ? `${className} ` : "";

  if (type === "input") {
    styles += simpleOutlineStyles();
  } else {
    styles += FormInputStyles();
  }

  if (errors) {
    styles += ` ${errorStyles}`;
  }

  switch (variant) {
    case "standard":
      styles = styles.replace("border", "").trim();
      styles += " border-b border-gray-300";
      break;
    case "filled":
      styles = styles.replace("border", "").trim();
      styles += " bg-gray-100 border-b border-gray-300";
      break;
    case "outlined":
      styles += " border border-gray-300";
      break;
    default:
      break;
  }

  return styles.trim();
}
