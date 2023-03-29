// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import PaginationSteps from "./PaginationSteps";

export default {
	component: PaginationSteps,
	title: "Components/PaginationSteps",
} as ComponentMeta<typeof PaginationSteps>;

const Template: ComponentStory<typeof PaginationSteps> = (args) => <PaginationSteps {...args} />;

export const DefaultPagination = Template.bind({});
DefaultPagination.args = {
	size: "default",
	currentStep: 2,
	totalSteps: 5,
	type: "dot",
};

export const DotPagination = Template.bind({});
DotPagination.args = {
	size: "default",
	currentStep: 2,
	totalSteps: 5,
	type: "dot",
};

export const LinePagination = Template.bind({});
LinePagination.args = {
	size: "default",
	currentStep: 2,
	totalSteps: 5,
	type: "line",
};
