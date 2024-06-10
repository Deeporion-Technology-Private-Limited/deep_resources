import { cva } from "class-variance-authority";
import { InputType } from "../Input/type";

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

export function getConditionalStyles(
  type: string,
  value: any,
  className: string | undefined
): string {
  let styles = className ? `${className} ` : "";

  if (type === InputType.Input) {
    styles += simpleOutlineStyles();
  } else {
    styles += inputStyles();
  }

  if (type === InputType.SearchIcon && !value) {
    styles += " pl-10";
  }

  if (type === InputType.SearchIcon) {
    styles += " pl-10";
  }

  if (type === InputType.Prefix) {
    styles += " pl-6";
  }

  return styles.trim();
}