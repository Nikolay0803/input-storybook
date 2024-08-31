import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";
import InputLabel from "./InputLabel";
import InputText from "./InputText";
import type { InputGroupProps } from "./InputGroup";

const meta: Meta<typeof InputGroup> = {
  title: "Components/InputGroup",
  component: InputGroup,
  argTypes: {
    label: { control: "text" },
    input: { control: "text" },
    annotation: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<InputGroupProps>;

export const Default: Story = {
  args: {
    label: <InputLabel htmlFor="input-id" text="Label" />,
    input: (
      <InputText
        value=""
        onChange={() => {}}
        placeholder="Enter text..."
        id="input-id"
        ariaLabel="Input field"
        status="default"
      />
    ),
    annotation: {
      text: "This is some annotation text.",
      type: "info",
    },
  },
};

export const ErrorAnnotation: Story = {
  args: {
    ...Default.args,
    annotation: {
      text: "This is an error annotation.",
      type: "error",
    },
  },
};

export const SuccessAnnotation: Story = {
  args: {
    ...Default.args,
    annotation: {
      text: "This is a success annotation.",
      type: "success",
    },
  },
};
