// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Breadcrumbs from "./Breadcrumbs";

export default {
	component: Breadcrumbs,
	title: "Components/Breadcrumbs",
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

export const DefaultBreadcrumbs = Template.bind({});
DefaultBreadcrumbs.args = {
	content: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
	size: "default",
};
