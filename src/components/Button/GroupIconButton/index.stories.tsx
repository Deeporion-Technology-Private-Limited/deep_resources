import { Meta, StoryObj } from "@storybook/react";
import { ButtonDirection } from "../../types";
import { GroupIconButton } from ".";
import { SingleIconButton } from "../SingleIconButton";
import { FindIconUrl } from "../../../utils/Constant";

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
        <SingleIconButton
          iconUrl={FindIconUrl("Cart.svg")}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
          iconUrl={FindIconUrl("Favourite.svg")}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
          iconUrl={FindIconUrl("Notification.svg")}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
          iconUrl={FindIconUrl("Setting.svg")}
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
    className: `bg-blue-500 text-[#FFFFFF] rounded ${ButtonDirection.Row ? "divide-x divide-solid" : "divide-y divide-solid"}`,
    children: (
      <>
        <SingleIconButton
          iconUrl={FindIconUrl("Cart.svg")}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
          iconUrl={FindIconUrl("Favourite.svg")}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
          iconUrl={FindIconUrl("Notification.svg")}
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
          iconUrl={FindIconUrl("Setting.svg")}
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
    className: `bg-blue-500 text-[#FFFFFF] rounded ${ButtonDirection.Row ? "divide-x divide-solid" : "divide-y divide-solid"}`,
    children: (
      <>
        <SingleIconButton
          text="Cart"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
          text="Favourite"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
          text="Notification"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
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
    className: `bg-blue-500 text-[#FFFFFF] rounded ${ButtonDirection.Row ? "divide-x divide-solid" : "divide-y divide-solid"}`,
    children: (
      <>
        <SingleIconButton
          iconUrl={FindIconUrl("Cart.svg")}
          text="Cart"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
          iconUrl={FindIconUrl("Favourite.svg")}
          text="Favourite"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
          iconUrl={FindIconUrl("Notification.svg")}
          text="Notification"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <SingleIconButton
          iconUrl={FindIconUrl("Setting.svg")}
          text="Setting"
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
      </>
    ),
  },
};
