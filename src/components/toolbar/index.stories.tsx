import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from ".";
import { InputIc } from "../Header/inputfeild";
import search from "../Header/inputfeild/inputicons/search.svg";
import person from "../Header/navbarIcons/person.svg"
import notification from "../Header/navbarIcons/notification.svg"
import fav from "../Header/navbarIcons/favorite.svg"
import cart from "../Header/navbarIcons/shoping_cart.svg"
import setting from "../Header/navbarIcons/settings.svg"
import { Icon } from "../Header/iconbutton";

const meta: Meta<typeof Toolbar> = {
  title: "Components/Toolbar",
  component: Toolbar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <InputIc placeholder="search" iconSrc={search}/>
        <Icon iconUrl={person}>Logo</Icon>
        <Icon iconUrl={notification}/>
        <Icon iconUrl={fav}/>
        <Icon iconUrl={cart}/>
        <Icon iconUrl={setting}/>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    variant: "column",
    children: (
      <>
        
      </>
    ),
  },
};
