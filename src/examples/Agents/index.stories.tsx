import { Meta, StoryObj } from "@storybook/react";
import Agents from ".";
import { AgentDetails, agents } from "./data";


const meta: Meta<typeof Agents> = {
    title: "Examples/Agents",
    component: Agents,
    parameters: {
        layout: "centered",
    }
}

export default meta;

type Story = StoryObj<typeof meta>;


export const AgentsTable: Story = {
    args: {
        data: agents,
    }
}

export const Agent: Story = {
    args: {
        data: AgentDetails,
    }
}
