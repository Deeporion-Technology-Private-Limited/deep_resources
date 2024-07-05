// // import React from 'react';

// // interface SidebarProps {}

// // const Sidebar: React.FC<SidebarProps> = () => {
// //   return (
// //     <div className="w-64 h-screen bg-white shadow-md">
// //       <div className="p-6">
// //         <h2 className="text-2xl font-bold">Settings</h2>
// //         <ul className="mt-8 space-y-6">
// //           <li>
// //             <a href="#" className="flex flex-col text-gray-800">
// //               <div className="flex items-center">
// //                 <span className="material-icons text-xl">person</span>
// //                 <span className="ml-4 text-lg font-semibold">Account</span>
// //               </div>
// //               <p className="ml-8 mt-1 text-gray-500 text-sm">Settings related to your personal information and account credentials</p>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#" className="flex flex-col text-gray-800">
// //               <div className="flex items-center">
// //                 <span className="material-icons text-xl">list</span>
// //                 <span className="ml-4 text-lg font-semibold">Orders</span>
// //               </div>
// //               <p className="ml-8 mt-1 text-gray-500 text-sm">View and manage your orders</p>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#" className="flex flex-col text-gray-800">
// //               <div className="flex items-center">
// //                 <span className="material-icons text-xl">subscriptions</span>
// //                 <span className="ml-4 text-lg font-semibold">Subscriptions</span>
// //               </div>
// //               <p className="ml-8 mt-1 text-gray-500 text-sm">View and manage your subscriptions</p>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#" className="flex flex-col text-gray-800">
// //               <div className="flex items-center">
// //                 <span className="material-icons text-xl">notifications</span>
// //                 <span className="ml-4 text-lg font-semibold">Notifications</span>
// //               </div>
// //               <p className="ml-8 mt-1 text-gray-500 text-sm">All settings related to notifications</p>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#" className="flex flex-col text-gray-800">
// //               <div className="flex items-center">
// //                 <span className="material-icons text-xl">privacy_tip</span>
// //                 <span className="ml-4 text-lg font-semibold">Privacy policy</span>
// //               </div>
// //               <p className="ml-8 mt-1 text-gray-500 text-sm">All settings related to notifications</p>
// //             </a>
// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Sidebar;

// import React, { useState } from 'react';
// // import PersonIcon from '@material-ui/icons/Person';
// // import ListIcon from '@material-ui/icons/List';
// // import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
// // import NotificationsIcon from '@material-ui/icons/Notifications';
// // import PrivacyTipIcon from '@material-ui/icons/PrivacyTip';

// interface SidebarProps {}

// const AccountComponent = () => <div>Account Component</div>;
// const OrdersComponent = () => <div>Orders Component</div>;
// const SubscriptionsComponent = () => <div>Subscriptions Component</div>;
// const NotificationsComponent = () => <div>Notifications Component</div>;
// const PrivacyPolicyComponent = () => <div>Privacy Policy Component</div>;

// const Sidebar: React.FC<SidebarProps> = () => {
//   const [activeItem, setActiveItem] = useState<string>('Account');

//   const menuItems = [
//     { name: 'Account', component: AccountComponent, description: 'Settings related to your personal information and account credentials' },
//     { name: 'Orders', component: OrdersComponent, description: 'View and manage your orders' },
//   //   { name: 'Subscriptions', icon: <SubscriptionsIcon className="text-xl" />, component: SubscriptionsComponent, description: 'View and manage your subscriptions' },
//   //   { name: 'Notifications', icon: <NotificationsIcon className="text-xl" />, component: NotificationsComponent, description: 'All settings related to notifications' },
//   //   { name: 'Privacy policy', icon: <PrivacyTipIcon className="text-xl" />, component: PrivacyPolicyComponent, description: 'All settings related to notifications' },
//   // ];
//   ]

//   const ActiveComponent = menuItems.find(item => item.name === activeItem)?.component;

//   return (
//     <div className="flex">
//       <div className="w-64 h-screen bg-white shadow-md">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold">Settings</h2>
//           <ul className="mt-8 space-y-6">
//             {menuItems.map((item) => (
//               <li key={item.name}>
//                 <a
//                   href="#"
//                   className={`flex flex-col ${activeItem === item.name ? 'text-blue-600 border-l-4 border-blue-600' : 'text-gray-800'} pl-4`}
//                   onClick={() => setActiveItem(item.name)}
//                 >
//                   <div className="flex items-center">
//                     {item.icon}
//                     <span className="ml-4 text-lg font-semibold">{item.name}</span>
//                   </div>
//                   <p className={`ml-8 mt-1 text-sm ${activeItem === item.name ? 'text-blue-400' : 'text-gray-500'}`}>
//                     {item.description}
//                   </p>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="flex-grow p-6">
//         {ActiveComponent && <ActiveComponent />}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import { forwardRef, useState } from "react";
import { SidebarProps } from "./data";
import { Box, Text } from "@/components";

const SettingsSideBar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ menuItems }, ref) => {
    const [activeItem, setActiveItem] = useState<string>("Account");

    const ActiveComponent = menuItems.find(
      (item) => item.name === activeItem
    )?.component;

    return (
      <Box className="flex gap-5" ref={ref}>
        <Box className="w-[375px] h-screen bg-white shadow-md">
          <Box>
            <Text as="h2" className="text-2xl font-bold pl-3 pt-3 p-2">
              Settings
            </Text>
            <ul className="mt-8 space-y-6 ">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    // href={item.anchor}
                    className={`flex flex-col pl-4 pr-4 ${activeItem === item.name ? " border-r-4 border-[#3F271E] bg-[#EBE3E0]" : null} pl-4`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    <Box className="flex gap-3">
                      <Box className="pt-3">{item.icon}</Box>
                      <Box className="p-1">
                        <Text as="p" className="text-lg font-semibold">
                          {item.name}
                        </Text>
                        <Text as="p" className={`mt-1 text-sm `}>
                          {item.description}
                        </Text>
                      </Box>
                    </Box>
                  </a>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
        {ActiveComponent}
      </Box>
    );
  }
);

export default SettingsSideBar;
