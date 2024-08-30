import type { Meta, StoryObj } from "@storybook/react";
import InputLabel, { InputLabelProps } from "./InputLabel";

const meta: Meta<typeof InputLabel> = {
  title: "Components/InputLabel",
  component: InputLabel,
} satisfies Meta<typeof InputLabel>;

export default meta;

type Story = StoryObj<InputLabelProps>;

export const Default: Story = {
  args: {
    htmlFor: "input-id",
    text: "Label",
  },
};
