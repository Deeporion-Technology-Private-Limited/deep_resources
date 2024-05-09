import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    name:"name",
    inputType:"text",
    placeholder:"Your Name",
  },
};

export const Number: Story = {
  args: {
    name:"age",
    inputType:"number",
    placeholder:"Your Age",
  },
};

