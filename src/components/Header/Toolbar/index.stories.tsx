import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from ".";
import person from "../navbarIcons/person.svg";
import notification from "../navbarIcons/notification.svg";
import fav from "../navbarIcons/favorite.svg";
import cart from "../navbarIcons/shoping_cart.svg";
import setting from "../navbarIcons/settings.svg";
import { IconsList } from "../IconsLIst";
import { IconButton } from "@/components";
import Input from "@/components/Input";
import SearchImage from "@/components/Input/Icons/SearchImage";

const meta: Meta<typeof Toolbar> = {
  title: "Components/Header/Toolbar",
  component: Toolbar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Input
          type="search icon"
          search={<SearchImage />}
          placeholder="Search here ..."
          className="outline-none rounded-full"
        />
        <IconsList>
          <IconButton iconUrl={person}>Logo</IconButton>
          <IconButton iconUrl={notification} />
          <IconButton iconUrl={fav} />
          <IconButton iconUrl={cart} />
          <IconButton iconUrl={setting} />
        </IconsList>
      </>
    ),
  },
};
