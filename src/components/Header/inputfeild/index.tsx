import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import searchIcon from "./inputicons/search.svg";

const inputStyles = cva([
  [
    "w-[360px]",
    "h-[44px]",
    "flex",
    "items-center",
    "border",
    "rounded-[98px]",
    "outline-none",
    "focus:outline-none",
    "pr-[5px]",
    "gap-[4px]"
  ],
]);

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
} & VariantProps<typeof inputStyles> &
  Omit<ComponentProps<"input">, "value" | "placeholder" | "disabled" | "type">;

export const InputIc = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      placeholder,
      value,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const isSearchType = type === "search";

    return (
      <div className={cn(inputStyles({ className }))}>
        {isSearchType && (
          <img src={searchIcon} alt="Search" className="ml-2" />
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          disabled={disabled}
          {...props}
          className="flex-grow outline-none"
        />
      </div>
    );
  }
);
