import { cn } from "@/utils";
import React, { FC } from "react";

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
    return <div className={cn("flex", className)}>Rating</div>;
  }
);

export default Rating;
