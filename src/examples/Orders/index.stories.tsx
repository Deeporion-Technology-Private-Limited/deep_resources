import { Meta, StoryObj } from "@storybook/react";
import Agents from ".";
import Order from ".";
import { data } from "./data";



const meta: Meta<typeof Agents> = {
    title: "Examples/Order",
    component: Order,
    parameters: {
        layout: "centered",
    }
}

export default meta;

type Story = StoryObj<typeof meta>;


export const OrderTable: Story = {
    args: {
        data: data,
        handleChange: (e : React.ChangeEvent<HTMLInputElement> ) => { console.log(e.target.value); },
        onClick: () => { console.log("search clicked"); },
    }
}
