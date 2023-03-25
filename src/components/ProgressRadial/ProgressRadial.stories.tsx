// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ProgressRadial from "./ProgressRadial";

export default {
	component: ProgressRadial,
	title: "Components/ProgressRadial",
} as ComponentMeta<typeof ProgressRadial>;

const Template: ComponentStory<typeof ProgressRadial> = (args) => <ProgressRadial {...args} />;

export const DefaultProgressRadial = Template.bind({});
DefaultProgressRadial.args = {
	status: "default",
	percentage: 25,
	size: "default",
};
