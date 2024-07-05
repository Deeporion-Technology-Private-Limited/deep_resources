export interface MenuItem {
  name: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  description: string;
  anchor: string;
}

export interface SidebarProps {
  menuItems: MenuItem[];
}

import { Account, Order, Subscriptions, Notifications, Policy } from "./icons";

export const menuItems: MenuItem[] = [
  {
    name: "Account",
    icon: <Account />,
    component: <div>Account Component</div>,
    description:
      "Settings related to your personal information and account credentials",
    anchor: "",
  },
  {
    name: "Orders",
    icon: <Order />,
    component: <div>Orders Component</div>,
    description: "View and manage your orders",
    anchor: "",
  },
  {
    name: "Subscriptions",
    icon: <Subscriptions />,
    component: <div>Subscriptions Component</div>,
    description: "View and manage your subscriptions",
    anchor: "",
  },
  {
    name: "Notifications",
    icon: <Notifications />,
    component: <div>Notifications Component</div>,
    description: "All settings related to notifications",
    anchor: "",
  },
  {
    name: "Privacy policy",
    icon: <Policy />,
    component: <div>Privacy Policy Component</div>,
    description: "All settings related to notifications",
    anchor: "",
  },
];
