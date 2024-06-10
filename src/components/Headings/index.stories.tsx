import type { Meta, StoryObj } from "@storybook/react";
import { Headings } from ".";

const meta: Meta<typeof Headings> = {

  component: Headings,
  title:'Components/Headings/Headings',
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    FontSize: {
      control:'select', "options" :["text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl"],
      // fontWeight:{control:'select','options':['100','200','300','400','500','600','700','800','900']}
    },
    fontWeight :{control:'select','options':["font-normal","font-bold","font-medium","font-semibold","font-extrabold","font-black"]}
   
  },
};

  
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Default Heading',
  FontSize: "text-3xl",
  fontWeight:"font-normal",
  }
};