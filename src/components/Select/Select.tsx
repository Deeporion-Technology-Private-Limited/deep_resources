import { cn } from "@/utils";
import React, { FC, useEffect, useRef, useState } from "react";

type Option = {
  value: string | number;
  label: string;
};

interface ISelectProps {
  options: Option[];
  value: string | number | null;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
}

export const Select: FC<ISelectProps> = React.forwardRef(
  ({
    options,
    value,
    onChange,
    placeholder = "Select",
    className,
  }: ISelectProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [highlightedIdx, setHighlightedIdx] = useState<number>(-1);
    const ref = useRef<HTMLDivElement>(null);

    const toggleOpen = () => setOpen((prev) => !prev);
    const closeDropdown = () => setOpen(false);
    const handleSelect = (val: string | number) => {
      onChange(val);
      closeDropdown();
    };

    const selectedOption = options.find((option) => option.value === value);

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setHighlightedIdx((prev) => (prev + 1) % options.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setHighlightedIdx(
          (prev) => (prev - 1 + options.length) % options.length
        );
      } else if (event.key === "Enter" && highlightedIdx !== -1) {
        handleSelect(options[highlightedIdx].value);
      } else if (event.key === "Escape") {
        closeDropdown();
      }
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          closeDropdown();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div
        className={cn("relative w-full", className)}
        ref={ref}
        onBlur={() => setOpen(false)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div
          className="border rounded px-4 py-2 cursor-pointer bg-white"
          onClick={toggleOpen}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </div>

        {open && (
          <ul className="absolute z-10 mt-1 bg-white border rounded w-full max-h-60 overflow-y-auto">
            {options.map((option, idx) => (
              <li
                key={crypto.randomUUID()}
                className={cn(
                  "px-4 py-2 hover:bg-gray-100 cursor-pointer",
                  highlightedIdx === idx && "bg-gray-200",
                  option.value === value && "bg-blue-200 font-bold"
                )}
                onClick={() => handleSelect(option.value)}
                onMouseEnter={() => setHighlightedIdx(idx)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);
