import type { Meta, StoryObj } from "@storybook/react";
import  {Modal}  from ".";
const meta = {
  title: "Components/PopupModal/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // contentSize: {
    //   control:'select', "options" :["text-xl","text-2xl","text-3xl","text-4xl","text-5xl"],
    // },
   
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal> ;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default :Story = {
args : {
  SaveChanges: () => console.log("saved"),
  
  onClose: () =>(isOpen: boolean) => { return !isOpen; },
  title: 'Sample Modal',
  contents:  "Contents in the modals ",
  button02:true,
  button01:true,
  buttontext1:"button01",
  buttontext2:"button02",

  
  
}
};
