import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

const config: ComponentMeta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
export default config;
