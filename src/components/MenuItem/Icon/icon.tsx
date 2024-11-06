import React from "react";
import { FindIconUrl } from "../../../utils/Constant";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

const outlineDownloadIcon = FindIconUrl("OutlineDownload.svg");
const arrowForwardIos = FindIconUrl("ArrowForwardIos.svg");

export const OutlineDownloadIcon: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={outlineDownloadIcon} alt="" />
    </div>
  );
};

export const ArrowForwardIos: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={arrowForwardIos} alt="" />
    </div>
  );
};
export const Favourite: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("FavoriteBorder.svg")} alt=""/>
    </div>
  );
};
export const Notification: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("NotificationsNone.svg")} alt=""/>
    </div>
  );
};
export const Cart: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("OutlineShoppingCart.svg")} alt=""/>
    </div>
  );
};
export const Setting: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("OutlineSettings.svg")} alt=""/>
    </div>
  );
};

export const UpArrow: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("OutlineArrowDropUp.svg")} alt=""/>
    </div>
  );
};

export const DownArrow: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("OutlineArrowDropDown.svg")} alt=""/>
    </div>
  );
};
