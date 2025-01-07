import { cn } from "@/utils";
import React, { FC, useRef, useState } from "react";

interface ISliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  trackColor?: string;
  thumbColor?: string;
  className?: string;
}

const Slider: FC<ISliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  onChange,
  trackColor = "bg-blue-500",
  thumbColor = "bg-blue-500",
  className,
}: ISliderProps): React.JSX.Element => {
  const [currentValue, setCurrentValue] = useState<number>(value);
  const trackBarRef = useRef<HTMLDivElement>(null);

  const calculateValue = (clientX: number) => {
    if (!trackBarRef.current) return min;

    const { left, width } = trackBarRef.current.getBoundingClientRect();
    const clampedX = Math.max(left, Math.min(clientX, left + width));
    const percentage = (clampedX - left) / width;
    const newValue = Math.round((min + percentage * (max - min)) / step) * step;

    return newValue;
  };

  const handleMouseMove = (event: MouseEvent) => {
    const newValue = calculateValue(event.clientX);
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const newValue = calculateValue(event.clientX);
    setCurrentValue(newValue);
    onChange?.(newValue);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const calcPercentage = ((currentValue - min) / (max - min)) * 100;

  return (
    <div className={cn("flex items-center", className)}>
      <div
        className="relative w-full h-2 bg-gray-300 rounded-full"
        ref={trackBarRef}
        onMouseDown={handleMouseDown}
      >
        <div
          className={cn("absolute h-full rounded-full", trackColor)}
          style={{ width: `${calcPercentage}` }}
        />

        <div
          className={cn(
            "absolute w-4 h-4 rounded-full transform -translate-y-1/2",
            thumbColor
          )}
          style={{ left: `${calcPercentage}%`, top: "50%" }}
        />
      </div>

      <span className="ml-4 text-gray-700">{currentValue}</span>
    </div>
  );
};

export default Slider;
