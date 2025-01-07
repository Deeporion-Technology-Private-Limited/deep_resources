import React, { FC } from "react";

interface IPaperProps {
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  color?: string;
  children?: React.ReactNode;
}

const Paper: FC<IPaperProps> = ({
  elevation = 1,
  rounded = "md",
  color = "bg-white",
  className,
  children,
}: IPaperProps): React.JSX.Element => {
  return <div>Paper</div>;
};

export default Paper;
