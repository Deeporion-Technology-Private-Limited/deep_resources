import React from "react";
import { FindIconUrl } from "../../../utils/Constant";

export const WarningFilled = (): React.JSX.Element => {
  const url = FindIconUrl("AiOutlineWarningWhite.svg");

  return (
    <div>
      <img src={url} alt="Warning Icon" width="24" height="24" />
    </div>
  );
};

export const WarningOutlined = () => {
  const url = FindIconUrl("AiOutlineWarning.svg");

  return (
    <div>
      <img src={url} alt="Warning Icon" width="24" height="24" />
    </div>
  );
};

export const SuccessFilled = () => {
  const url = FindIconUrl(`OutlineCheckCircleWhite.svg`);

  return (
    <div>
      <img src={url} alt="Success Icon" width="24" height="24" />
    </div>
  );
};

export const SuccessOutlined = () => {
  const url = FindIconUrl("OutlineCheckCircleGreen.svg");

  return (
    <div>
      <img src={url} alt="Success Icon" width="24" height="24" />
    </div>
  );
};

export const ErrorFilled = () => {
  const url = FindIconUrl("ErrorOutlineWhite.svg");

  return (
    <div>
      <img src={url} alt="Error Icon" width="24" height="24" />
    </div>
  );
};

export const ErrorOutlined = () => {
  const url = FindIconUrl("ErrorOutlineRed.svg");

  return (
    <div>
      <img src={url} alt="Error Icon" width="24" height="24" />
    </div>
  );
};
export const InfoFilled = () => {
  const url = FindIconUrl("AiOutlineInfoWhite.svg");

  return (
    <div>
      <img src={url} alt="Info Icon" width="24" height="24" />
    </div>
  );
};

export const InfoOutlined = () => {
  const url = FindIconUrl("AiOutlineInfo.svg");

  return (
    <div>
      <img src={url} alt="Info Icon" width="24" height="24" />
    </div>
  );
};
