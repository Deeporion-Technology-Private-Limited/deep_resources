import React from 'react';
import Stepper from '../Stepper/index';
import type { Meta, StoryObj } from '@storybook/react';

type Step = {
  component: React.FC;
  title: string;
};

const meta: Meta = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<{ steps: Step[] }> = (args: any) => <Stepper {...args} />;
Default.args = {
  steps: [
    { component: () => <div>Step 1 Content</div>, title: 'My Cart Summary' },
    { component: () => <div>Step 2 Content</div>, title: 'Choose Address' },
    { component: () => <div>Step 3 Content</div>, title: 'Select Payment Method' }
  ],
};
