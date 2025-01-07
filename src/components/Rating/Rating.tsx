import { cn } from "@/utils";
import clsx from "clsx";
import React, { FC, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

interface IRatingProps {
  name?: string;
  value: number;
  precision?: number;
  onChange?: (event: React.ChangeEvent<{}>, value: number | null) => void;
  onChangeActive?: (event: React.ChangeEvent<{}>, activeValue: number) => void;
  max?: number;
  className?: string;
}

const Rating: FC<IRatingProps> = React.forwardRef(
  ({
    name,
    value,
    precision = 1,
    onChange,
    onChangeActive,
    max = 5,
    className,
  }: IRatingProps) => {
    const [hoverValue, setHoverValue] = useState<number | null>(null);

    const handleMouseEnter = (idx: number) => {
      const activeValue = (idx + 1) * precision;
      setHoverValue(activeValue);
      onChangeActive?.({} as React.ChangeEvent<{}>, activeValue);
    };

    const handleMouseLeave = () => {
      setHoverValue(null);
      onChangeActive?.({} as React.ChangeEvent<{}>, -1);
    };

    const handleClick = (idx: number) => {
      const newValue = (idx + 1) * precision;
      onChange?.({} as React.ChangeEvent<{}>, newValue);
    };

    const renderIcon = (idx: number) => {
      const currentValue = (hoverValue ?? value) / precision;
      const isHalf = currentValue > idx && currentValue < idx + 1;
      const isFilled = currentValue >= idx + 1;

      const starClasses = clsx(
        "text-yellow-500",
        "transition-transform duration-200 ease-in-out transform",
        {
          "scale-110": hoverValue !== null && currentValue > idx,
          "text-gray-300": !isFilled && !isHalf,
        }
      );

      const starFilled = isFilled ? <FaStar /> : <FaRegStar />;

      return (
        <span className={cn(starClasses)}>
          {isHalf ? (
            <FaStar style={{ clipPath: "inset(0 50% 0 0)" }} />
          ) : (
            starFilled
          )}
        </span>
      );
    };

    return (
      <div
        className={cn("flex space-x-1", className)}
        role="radiogroup"
        aria-labelledby={name}
      >
        {Array.from({ length: max }, (_, idx) => (
          <div
            key={crypto.randomUUID()}
            role="radio"
            aria-checked={idx < value}
            tabIndex={0}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(idx)}
            className="cursor-pointer"
          >
            {renderIcon(idx)}
          </div>
        ))}
      </div>
    );
  }
);

export default Rating;
