import type { Meta, StoryObj } from "@storybook/react";
import ProfileWindow from ".";

const meta: Meta<typeof ProfileWindow> = {
  title: "Examples/ProfileWindow",
  component: ProfileWindow,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    name: "Tessa Rain",
    address: "Address : 1/8, Malviya Nagar, Jaipur",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/cd2b/6c3b/650828cfeeb35cf7979b40e2b37a600f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMhz194yK8APm8SMZuMMTQ-61L3aZfe2czMUE~GChDFCaqP2Y0PW64~XMpeyeD4vsHyOdFjuWnz5d6qmW-FmDmBEwoxe4s3AsyFqsbgjVtdEKcfQteolWFgvpXX8m2Hf4~BkbB4v1F9AkGSoiA727-B3BdzTYdSmAceD0Kn1Kg8zJDGLBXmOg0KPEpJVnYpMys10-XnOFZzvlO1cs6q9n58akSczh0ebtaH~GJ0fkcijmXs-EdQStA2j8tGIit2Ya-uq2UkuGWeMqJsgRVgaVM2yACYxFsx5zuNCuCmYl628K2vjGbRcuS8XTApR4pvYX~DfSj~JjzayxIaZ9IU8fQ__",
  },
};
