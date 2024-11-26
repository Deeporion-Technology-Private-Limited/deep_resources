import { Meta, StoryObj } from "@storybook/react";
import { TabseData } from "./CustomSideBarConst";
import { CustomSideBar } from "./CustomSideBar";
import { FindIconUrl } from "@/utils/Constant";

const RightArrow = FindIconUrl("RightArrow.svg");

const meta: Meta<typeof CustomSideBar> = { 
  title: "Components/CoustomSideBar", 
  component: CustomSideBar, 
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
