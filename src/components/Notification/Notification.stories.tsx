// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Notification from "./Notification";

export default {
	component: Notification,
	title: "Components/Notification",
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const DefaultNotification = Template.bind({});
DefaultNotification.args = {
	icon: undefined,
	title: "Notification Label",
	caption: "Placeholder for notification text, Enter text into this container.",
	iconLoc:
		"https://png.pngtree.com/png-vector/20190116/ourlarge/pngtree-vector-avatar-icon-png-image_322275.jpg",
};
