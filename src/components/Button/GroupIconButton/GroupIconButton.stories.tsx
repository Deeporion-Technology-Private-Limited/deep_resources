import { Meta, StoryObj } from "@storybook/react";
import { ButtonDirection } from "../type";
import { GroupIconButton } from "./GroupIconButton";
import { IconButton } from "../SingleIconButton/SingleIconButton";

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
    cart: true,
    setting: true,
    favourite: true,
    notification: true,
    direction:ButtonDirection.Row,
    children: (
      <>
        <IconButton
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
        <IconButton
          backgroundColor="transparent"
          direction={ButtonDirection.Row}
        />
      </>
    ),
  },
};