import type { Meta, StoryObj } from "@storybook/react";
import  {Modal}  from "./Modal";

const meta = {
  title: "Components/PopupModal/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
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
  saveButton:true,
  cancelButton:true,
}
};