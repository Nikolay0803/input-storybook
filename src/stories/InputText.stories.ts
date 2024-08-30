import type { Meta, StoryObj } from "@storybook/react";
import InputText, { InputTextProps } from "./InputText";

const meta: Meta<typeof InputText> = {
  title: "Components/InputText",
  component: InputText,
  argTypes: {
    status: { control: "radio", options: ["error", "default"] },
  },
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<InputTextProps>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
    placeholder: "Enter text...",
    id: "input-id",
    ariaLabel: "Input field",
    status: "default",
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    status: "error",
  },
};
