import { Meta, StoryObj } from "@storybook/react";
import { ButtonDirection } from "../type";
import { GroupIconButton } from "./GroupIconButton";
import { IconButton } from "../SingleIconButton/SingleIconButton";
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

export const GroupButton: Story = {
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
