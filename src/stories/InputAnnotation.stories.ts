import type { Meta, StoryObj } from "@storybook/react";
import InputAnnotation, { InputAnnotationProps } from "./InputAnnotation";

const meta: Meta<typeof InputAnnotation> = {
  title: "Components/InputAnnotation",
  component: InputAnnotation,
  argTypes: {
    type: { control: "radio", options: ["error", "info", "success"] },
  },
} satisfies Meta<typeof InputAnnotation>;

export default meta;

type Story = StoryObj<InputAnnotationProps>;

export const Default: Story = {
  args: {
    text: "This is an annotation text.",
  },
};

export const Error: Story = {
  args: {
    text: "This is an error annotation.",
    type: "error",
  },
};

export const Info: Story = {
  args: {
    text: "This is an info annotation.",
    type: "info",
  },
};

export const Success: Story = {
  args: {
    text: "This is a success annotation.",
    type: "success",
  },
};
