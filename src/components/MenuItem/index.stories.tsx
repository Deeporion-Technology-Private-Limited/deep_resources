import type { Meta, StoryObj } from "@storybook/react";
import { LeftIcon, RightIcon } from "./Icon/icon";
import { MenuItem } from ".";
import { Box } from "@/components/Layout";
import { MenuItemSize, MenuItemVariant } from "./MenuitemTypes";

const meta: Meta<typeof MenuItem> = {
    title: "Components/Menu Item",
    component: MenuItem,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

const label = "Item"

const generateMenuItemStory = ({
    variant,
    label,
    leftIcon,
    rightIcon,
    leftSpacer,
    border,
    size,
    isSubmenu,
    children,
    onClick,
}: {
    variant: MenuItemVariant;
    label: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    leftSpacer?: boolean;
    border?: boolean;
    size: MenuItemSize;
    isSubmenu?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}): StoryObj => ({
    args: {
        variant,
        label,
        leftIcon,
        rightIcon,
        leftSpacer,
        border,
        size,
        isSubmenu,
        children,
        onClick,
    },
});

export const Default = generateMenuItemStory({
    variant: MenuItemVariant.Default,
    label: "Item 1",
    size: MenuItemSize.Small,
    leftSpacer: false,
    onClick: () => alert("Default item clicked"),
});

export const WithRightIcon = generateMenuItemStory({
    variant: MenuItemVariant.RightIcon,
    label,
    rightIcon: <LeftIcon />,
    size: MenuItemSize.Medium,
    onClick: () => alert("Right icon item clicked"),
});

export const WithLeftIcon = generateMenuItemStory({
    variant: MenuItemVariant.LeftIcon,
    label: "Item 3",
    leftIcon: <RightIcon />,
    size: MenuItemSize.Medium,
    onClick: () => alert("Left icon item clicked"),
});

export const WithLeftSpacer = generateMenuItemStory({
    variant: MenuItemVariant.LeftSpacer,
    label: "Item 4",
    leftSpacer: true,
    size: MenuItemSize.Medium,
    onClick: () => alert("Left spacer item clicked"),
});

export const WithBorder = generateMenuItemStory({
    variant: MenuItemVariant.Border,
    label: "Item 5",
    border: true,
    leftSpacer: true,
    size: MenuItemSize.Medium,
    onClick: () => alert("Border item clicked"),
});

export const WithLeftAndRightIcon = generateMenuItemStory({
    variant: MenuItemVariant.LeftIcon,
    label: "Item 6",
    leftIcon: <RightIcon />,
    rightIcon: <LeftIcon />,
    size: MenuItemSize.Medium,
    onClick: () => alert("Left icon item clicked"),
});

export const Submenu = generateMenuItemStory({
    variant: MenuItemVariant.Default,
    label: "Menu Items",
    rightIcon: <LeftIcon />,
    size: MenuItemSize.Medium,
    isSubmenu: true,
    children: (
        <Box>
            <MenuItem
                label="Submenu Item 1"
                size={MenuItemSize.Medium}
                variant="Default"
                onClick={() => alert("Submenu item 1 clicked")}
            />
            <MenuItem
                label="Submenu Item 2"
                size={MenuItemSize.Medium}
                variant="Default"
                onClick={() => alert("Submenu item 2 clicked")}
            />
            <MenuItem
                label="Submenu Item 3"
                size={MenuItemSize.Small}
                variant="Default"
                onClick={() => alert("Submenu item 3 clicked")}
            />
        </Box>
    ),
});
