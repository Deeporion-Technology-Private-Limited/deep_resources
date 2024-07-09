import { FindIconUrl } from "@/utils/Constant";
import React from "react";

export const UpArrow: React.FC = () => {
  return (
    <div data-testid="uparrow">
        <img src={FindIconUrl("ArrowUpward.svg")} alt="" />
    </div>
  );
};

export const UpCursor: React.FC = () => {
  return (
    <div data-testid="upcursor">
      <img src={FindIconUrl("ExpandLess.svg")} alt="" />
    </div>
  );
};

export const PlusIcon: React.FC = () => {
  return (
    <div data-testid="plusicon">
     <img src={FindIconUrl('Add.svg')} alt="" />
    </div>
  );
};

