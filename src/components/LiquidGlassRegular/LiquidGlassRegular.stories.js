import { LiquidGlassRegular } from ".";

export default {
  title: "Components/LiquidGlassRegular",
  component: LiquidGlassRegular,
  tags: ["autodocs"],

  argTypes: {
    mode: {
      options: ["light"],
      control: { type: "select" },
    },
    state: {
      options: ["primary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    mode: "light",
    state: "primary",
    className: "",
    glassEffectClassName: "",
  },
};
