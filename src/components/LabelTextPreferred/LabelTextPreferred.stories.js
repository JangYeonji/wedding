import { LabelTextPreferred } from ".";

export default {
  title: "Components/LabelTextPreferred",
  component: LabelTextPreferred,
  tags: ["autodocs"],

  argTypes: {
    mode: {
      options: ["light"],
      control: { type: "select" },
    },
    state: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Label",
    mode: "light",
    state: "default",
    className: "",
    symbolClassName: "",
  },
};
