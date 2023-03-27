// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Chip from "./Chip";

export default {
	component: Chip,
	title: "Components/Chip",
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const DefaultChip = Template.bind({});
DefaultChip.args = {
	label: "Label",
	active: false,
	closable: false,
	avatarAlign: "left",
	avatar: "https://png.pngtree.com/png-vector/20190116/ourlarge/pngtree-vector-avatar-icon-png-image_322275.jpg",
};
