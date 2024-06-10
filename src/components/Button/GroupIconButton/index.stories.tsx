import { Meta, StoryObj } from "@storybook/react";
import { ButtonDirection } from "../type";
import { GroupIconButton } from ".";
import { IconButton } from "../SingleIconButton";
import Cart from "../ButtonImage/Cart.svg";
import Favourite from "../ButtonImage/Favourite.svg";
import Notification from "../ButtonImage/Notification.svg";
import Setting from "../ButtonImage/Setting.svg";

const meta: Meta<typeof GroupIconButton> = {
  title: "Components/Button/GroupIconButton",
  component: GroupIconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: ButtonDirection.Row,
    children: (
      <>
        <IconButton
          iconUrl={Cart}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          iconUrl={Favourite}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          iconUrl={Notification}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          iconUrl={Setting}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
      </>
    ),
  },
};

export const GroupButtonWithIcon: Story = {
  args: {
    direction: ButtonDirection.Row,
    className: `bg-blue-500 text-[#FFFFFF] rounded ${ButtonDirection.Row ? "divide-x divide-solid" : "divide-y divide-solid" }`,
    children: (
      <>
        <IconButton
          iconUrl={Cart}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          iconUrl={Favourite}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          iconUrl={Notification}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          iconUrl={Setting}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
      </>
    ),
  },
};


export const GroupButtonWithText: Story = {
  args: {
    direction: ButtonDirection.Row,
    className: `bg-blue-500 text-[#FFFFFF] rounded ${ButtonDirection.Row ? "divide-x divide-solid" : "divide-y divide-solid" }`,
    children: (
      <>
        <IconButton
          text="Cart"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          text="Favourite"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          text="Notification"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          text="Setting"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
      </>
    ),
  },
};

export const GroupButtonWithIconText: Story = {
  args: {
    direction: ButtonDirection.Row,
    className: `bg-blue-500 text-[#FFFFFF] rounded ${ButtonDirection.Row ? "divide-x divide-solid" : "divide-y divide-solid" }`,
    children: (
      <>
        <IconButton
          iconUrl={Cart}
          text="Cart"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          iconUrl={Favourite}
          text="Favourite"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          iconUrl={Notification}
          text="Notification"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          iconUrl={Setting}
          text="Setting"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
      </>
    ),
  },
};
