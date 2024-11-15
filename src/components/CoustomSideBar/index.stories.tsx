import { Meta, StoryObj } from "@storybook/react";
import { TabseData } from "./CoustomSideBarConst";
import RightArrow from "../BreadCrumb/icon/RightArrow.svg";
import { CoustomSideBar } from "./CoustomSideBar";



const meta: Meta<typeof CoustomSideBar> = { 
  title: "Components/CoustomSideBar", 
  component: CoustomSideBar, 
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Logo: "https://deeporion.s3.ap-south-1.amazonaws.com/images/deeporion_white_icon.png",
    sidebarTabs: TabseData, 
    profileName: 'Sunny',
    arrowIcon: RightArrow, 
    handleAvtarClick: () => alert('Avatar clicked'), 
    handleTabs: (item: string) => alert(item), 
    profileData:TabseData,
    handleProfileTabs: (item: string) => alert(item), 
    profileAvtarStyle:'',
    sidebarProfileTabsStyle:'',

  },
};
