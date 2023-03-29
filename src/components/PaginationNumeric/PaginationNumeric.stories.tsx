// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import PaginationNumeric from "./PaginationNumeric";

export default {
	component: PaginationNumeric,
	title: "Components/PaginationNumeric",
} as ComponentMeta<typeof PaginationNumeric>;

const Template: ComponentStory<typeof PaginationNumeric> = (args) => (
	<PaginationNumeric {...args} />
);

export const Default = Template.bind({});
Default.args = {
	totalPages: 12,
	currentPage: 6,
	size: "default",
};
