import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,
  argTypes: {
    fav: {
      options: ["un-fav", "favo"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    fav: "un-fav",
  },
};
