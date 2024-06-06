import type { Meta, StoryObj } from "@storybook/react";
import person from "../navbarIcons/person.svg"
import notification from "../navbarIcons/notification.svg"
import fav from "../navbarIcons/favorite.svg"
import cart from "../navbarIcons/shoping_cart.svg"
import setting from "../navbarIcons/settings.svg"
import { IconsList } from ".";
import { IconButton } from "@/components";

const meta: Meta<typeof IconsList> = {
  title: "Components/Header/IconsList",
  component: IconsList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <IconButton iconUrl={person} text="Logo"/>
        <IconButton iconUrl={notification} />
        <IconButton iconUrl={fav} />
        <IconButton iconUrl={cart} />
        <IconButton iconUrl={setting} />
      </>
    ),
  },
};

