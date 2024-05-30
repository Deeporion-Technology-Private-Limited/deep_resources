import React from "react";
import fav from "../../Header/navbarIcons/favorite.svg"
import shopingcart from "../../Header/navbarIcons/shoping_cart.svg"
import notification from "../../Header/navbarIcons/notification.svg"
import setting from "../../Header/navbarIcons/settings.svg"
import person from "../../Header/navbarIcons/person.svg"

export const NavbarEcommerceHeader: React.FC = () => {
  return (
    <div className="w-full border h-[76px] flex justify-center items-center px-[40px]">
        <div className="flex justify-between items-center gap-12">
            {/* 1 */}
            <div className="w-[68px] h-[36px] text-[24px] font-bold">
                LOGO
            </div>
            {/* 2 */}
            <div className="flex">
                <div className="px-[6px] py-[8px] text-[12px]">Home</div>
                <div className="px-[6px] py-[8px] text-[12px]">Products</div>
                <div className="px-[6px] py-[8px] text-[12px]">About</div>
                <div className="px-[6px] py-[8px] text-[12px]">Contact</div>
            </div>
            {/* 3 */}
            <div className="flex justify-between">
                <div className="">
                    <div>
                        
                    </div>
                </div>
                <div className="flex">
                    <div className="flex p-[10px] justify-center items-center">
                        <img src={person} className="w-[24px] h-[24px]"/>
                        <p className="text-[16px] font-bold">Log in</p>
                    </div>
                    <div className="p-[10px]">
                        <img src={notification}  className="w-[24px] h-[24px]"/>
                    </div>
                    <div className="p-[10px]"><img src={fav}  className="w-[24px] h-[24px]"/></div>
                    <div className="p-[10px]"><img src={shopingcart}  className="w-[24px] h-[24px]"/></div>
                    <div className="p-[10px]"><img src={setting}  className="w-[24px] h-[24px]"/></div>
                </div>
            </div>
        </div>
    </div>
  );
};
