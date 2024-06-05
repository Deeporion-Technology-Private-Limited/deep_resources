import React from 'react';
import MyStepper from '../Stepper/index';
import type { Meta, StoryObj } from '@storybook/react';

type Step = {
  component: React.FC;
  title: string;
};

const meta: Meta = {
  title: "Components/Stepper",
  component: MyStepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<{ steps: Step[] }> = (args: any) => <MyStepper {...args} />;
Default.args = {
  steps: [
    { component: () => <div>Step 1 Content</div>, title: 'Step 1: Personal Details' },
    { component: () => <div>Step 2 Content</div>, title: 'Step 2: Address and Contact Information' },
    { component: () => <div>Step 3 Content</div>, title: 'Step 3: Create Project' }
  ],
};
