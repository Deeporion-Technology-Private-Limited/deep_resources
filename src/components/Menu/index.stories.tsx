import { Meta, StoryObj } from "@storybook/react";
import { Menu } from ".";
import { MenuItem } from "../MenuItem";
import { LeftIcon, RightIcon } from "../MenuItem/Icon/icon";


const meta: Meta<typeof Menu> = {
    title: "Components/Menu",
    component: Menu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Deafult: Story = {
    args: {
        children: (
            <>
                <MenuItem
                    label="MenuItem"
                    size="md"
                    variant="default"
                    className="bg-inherit rounded-none"
                />
                <MenuItem
                    label="MenuItem"
                    rightIcon={<LeftIcon />}
                    size="md"
                    variant="withRightIcon"
                    className="bg-inherit rounded-none"

                />
                <MenuItem
                    label="MenuItem"
                    leftIcon={<RightIcon />}
                    size="md"
                    variant="withLeftIcon"
                    className="bg-inherit rounded-none"

                />
                <MenuItem
                    label="MenuItem"
                    leftSpacer
                    size="md"
                    variant="withRightIcon"
                    className="bg-inherit rounded-none"

                />
            </>

        ),
        label: "Menu"
    }
}