import type { Meta, StoryObj } from "@storybook/react";
import { LeftIcon, RightIcon } from "./Icon/icon";
import { MenuItem } from ".";
import { Box } from "@/components/Layout";

const meta: Meta<typeof MenuItem> = {
    title: "Components/Menu Item",
    component: MenuItem,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

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
    variant: string;
    label: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    leftSpacer?: boolean;
    border?: boolean;
    size: string;
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
    variant: "default",
    label: "Menu Item",
    size: "md",
    leftSpacer: false,
    onClick: () => alert("Default item clicked"),
});

export const WithRightIcon = generateMenuItemStory({
    variant: "withRightIcon",
    label: "Menu Item",
    rightIcon: <LeftIcon />,
    size: "md",
    onClick: () => alert("Right icon item clicked"),
});

export const WithLeftIcon = generateMenuItemStory({
    variant: "withLeftIcon",
    label: "Menu Item",
    leftIcon: <RightIcon />,
    size: "md",
    onClick: () => alert("Left icon item clicked"),
});

export const WithLeftSpacer = generateMenuItemStory({
    variant: "withLeftSpacer",
    label: "Menu Item",
    leftSpacer: true,
    size: "md",
    onClick: () => alert("Left spacer item clicked"),
});

export const WithBorder = generateMenuItemStory({
    variant: "withBorder",
    label: "Menu Item",
    border: true,
    leftSpacer: true,
    size: "md",
    onClick: () => alert("Border item clicked"),
});

export const Submenu = generateMenuItemStory({
    variant: "withRightIcon",
    label: "Menu Items",
    rightIcon: <LeftIcon />,
    size: "md",
    isSubmenu: true,
    children: (
        <Box>
            <MenuItem
                label="Submenu Item 1"
                size="sm"
                variant="default"
                onClick={() => alert("Submenu item 1 clicked")}
            />
            <MenuItem
                label="Submenu Item 2"
                size="sm"
                variant="default"
                onClick={() => alert("Submenu item 2 clicked")}
            />
            <MenuItem
                label="Submenu Item 3"
                size="sm"
                variant="default"
                onClick={() => alert("Submenu item 3 clicked")}
            />
        </Box>
    ),
});
