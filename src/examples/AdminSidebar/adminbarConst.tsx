import { NavItems } from "@/components/Header/SideNavbar";
import { Setting } from "@/components/MenuItem/Icon/icon";
import { FindIconUrl } from "@/utils/Constant";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Agents: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("agents.svg")} alt=""/>
    </div>
  );
};

export const Barchart: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("barchart.svg")} alt=""/>
    </div>
  );
};
export const Catalogue: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
     <img src={FindIconUrl("catalogue.svg")} alt=""/>
    </div>
  );
};
export const Orders: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
     <img src={FindIconUrl("orders.svg")} alt=""/>
    </div>
  );
};
export const Seller: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("seller.svg")} alt=""/>
    </div>
  );
};
export const WareHouse: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("warehouse.svg")} alt=""/>
    </div>
  );
};

export const Gift: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("gift.svg")} alt=""/>
    </div>
  );
};

export const Data: NavItems[] = [
  {
    menuLeftIcon: <Barchart />,
    menus: "Dashboard",
  },
  {
    menuLeftIcon: <Catalogue />,
    menus: "Catalogue",
  },
  { menuLeftIcon: <Seller />, menus: "Seller" },
  { menuLeftIcon: <WareHouse />, menus: "Warehouse" },
  { menuLeftIcon: <Agents />, menus: "Agents" },
  { menuLeftIcon: <Orders />, menus: "Orders" },
  { menuLeftIcon: <Gift />, menus: "Offers & Gift Cards" },
  { menuLeftIcon: <Setting />, menus: "Settings" },
];
