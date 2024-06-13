import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { ButtonSize } from "../Button/type";

const inputStyles = cva(
  [
    "w-[25px]",
    "h-[25px]",
    "border",
    "rounded-lg",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        Basic: "",
        Disable: true,
      },
      size: {
        [ButtonSize.Small]: "h-[18px] w-[18px]",
        [ButtonSize.Medium]: "h-[25px] w-[25px]",
        [ButtonSize.Large]: "h-[32px] w-[32px]",
      },
    },
    compoundVariants: [
      {
        variant: "Basic",
      }
    ],
    defaultVariants: {
      variant: "Basic",
      size: ButtonSize.Small,
    },
  }
);


type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles> & {
  label?: string;
  value: string;
  className?: string;
  labelClassname?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, size, disabled, labelClassname, label, value, onChange }) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          value={value}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
          className={cn(inputStyles({ className, variant, size }), disabled && "cursor-not-allowed")}
        >
        </input>
        <label htmlFor={label} className={labelClassname}>
          {label}
        </label>
      </div>
    );
  }
);
