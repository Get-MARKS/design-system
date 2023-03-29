// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import InputCaption from "./InputCaption";

export default {
	component: InputCaption,
	title: "Components/InputCaption",
} as ComponentMeta<typeof InputCaption>;

const Template: ComponentStory<typeof InputCaption> = (args) => <InputCaption {...args} />;

export const Default = Template.bind({});
Default.args = {
	content: "Content",
	size: "default",
	type: "default",
	passwordState: 0,
};
