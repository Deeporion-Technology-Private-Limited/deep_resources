import { Meta, StoryObj } from "@storybook/react";
import { Menu } from ".";
import { MenuItem } from "../MenuItem";
import { ArrowForwardIos, OutlineDownloadIcon } from "../MenuItem/Icon/icon";
import { MenuItemSize } from "../MenuItem/MenuitemTypes";


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
                    size={MenuItemSize.Medium}
                    variant="Default"
                    className="bg-inherit rounded-none"
                />
                <MenuItem
                    label="MenuItem"
                    rightIcon={<ArrowForwardIos />}
                    size={MenuItemSize.Medium}
                    variant="RightIcon"
                    className="bg-inherit rounded-none"

                />
                <MenuItem
                    label="MenuItem"
                    leftIcon={<OutlineDownloadIcon />}
                    size={MenuItemSize.Medium}
                    variant="LeftIcon"
                    className="bg-inherit rounded-none"

                />
                <MenuItem
                    label="MenuItem"
                    leftSpacer
                    size={MenuItemSize.Medium}
                    variant="LeftSpacer"
                    className="bg-inherit rounded-none"

                />
            </>

        ),
        label: "Menu"
    }
}