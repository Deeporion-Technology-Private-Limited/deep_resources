import { cn } from "@/utils";
import { Box } from "../Layout";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { ProfileAvatar } from "../Avatar";

interface sidebarTabs {
  icon:string,
  tabName:string
}

interface ICoustomSideBarProps {
     Logo:string;
     LogoStyle:string
     sidebarTabs:sidebarTabs[];
     sidebarTabsStyle:string
     profileName:string;
     profileAvtarStyle:string;
     arrowIcon:string;
     handleAvtarClick: ()=>void;
     handleTabs:(tabName:string)=>void;
     profileData:sidebarTabs[];
     handleProfileTabs:(items:string)=>void;
     sidebarProfileTabsStyle:string
}

const logoStyles = cva(
);

const profileStyles = cva(
  'w-[44px] h-[44px] text-[1.5rem]'
)

const navBarStyles = cva([
  "w-[221px] bg-[#031B59] text-white  min-h-screen flex flex-col space-x-6  scrollbar-white justify-between ",
]);

interface Prop
  extends ICoustomSideBarProps,
    ComponentProps<typeof Box>,
    VariantProps<typeof navBarStyles> {}


export const CustomSideBar = forwardRef<HTMLDivElement, Prop>(
  (
    {
      className,
      Logo,
      sidebarTabs,
      profileName,
      arrowIcon,
      LogoStyle='',
      sidebarTabsStyle='',
      profileAvtarStyle='',
      handleAvtarClick,
      handleTabs=(tabName:string)=>alert(tabName),
      profileData,
      handleProfileTabs=(tabName:string)=>alert(tabName),
      sidebarProfileTabsStyle='',
      ...props
    },
    ref
  ) => {

    const [profileOpen , setProfileOpen] =useState(false) 
    const [sidebarActiveTab , setSidebarActiveTab]=useState<any>(null)
    const [profileActiveTab , setProfileActiveTab]=useState<any>(null)

    return (
      <Box ref={ref} className={cn(navBarStyles(), className)} {...props}>
         <Box className="flex flex-col gap-[10px]">
         <Box>
          <img 
          className={cn(logoStyles(),LogoStyle)}
          src={Logo} alt="" />
         </Box>
         <Box>
          {sidebarTabs.map((items , index)=>(
             <Box onClick={()=>{
              handleTabs(items.tabName)
              setSidebarActiveTab(index)
             }} className={cn(`text-white ${sidebarActiveTab === index && "bg-white/10"} flex gap-[10px] pt-[12px] hover:bg-white/10 pr-[12px] pb-[12px] pl-[24px]`,sidebarTabsStyle)}>
              <img src={items.icon} alt="" />{items.tabName}</Box>))}
         </Box>
         </Box>
        <Box>
         {profileOpen && 
                   <Box >
                   {profileData.map((items , index)=>(
                     <Box onClick={()=>{
                      handleProfileTabs(items.tabName )
                      setProfileActiveTab(index)
                    }}
                      className={cn(`text-white ${profileActiveTab === index && "bg-white/10"} flex gap-[10px] pt-[12px] hover:bg-white/10 pr-[12px] pb-[12px] pl-[24px]`,sidebarProfileTabsStyle)}>
                     <img src={items.icon} alt="" />
                    {items.tabName}</Box>
                   )
       
                   )}
                 </Box>}
        <Box className="py-5  flex  items-center gap-7" onClick={()=> setProfileOpen(!profileOpen)}>
         <ProfileAvatar className={cn(profileStyles(), profileAvtarStyle)} name={profileName}/>
         {profileName}
         <img src={arrowIcon}  alt="" className={`${profileOpen&&'-rotate-90'} text-white`} />
         </Box>
        </Box>
      </Box>
    );
  }
);