// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Scollbar from "./Scollbar";

export default {
	component: Scollbar,
	title: "Components/Scollbar",
} as ComponentMeta<typeof Scollbar>;

const Template: ComponentStory<typeof Scollbar> = (args) => <Scollbar {...args} />;

export const DefaultScollbar = Template.bind({});
DefaultScollbar.args = {
	direction: "horizontal",
	size: 75,
};
