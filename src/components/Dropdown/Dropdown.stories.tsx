// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Dropdown from "./Dropdown";

export default {
	component: Dropdown,
	title: "Components/Dropdown",
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const CheckSVG = () => (
	<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9.39739 16.0237L19.8077 5.54269C20.1947 5.15247 20.8222 5.15246 21.2094 5.54253C21.5967 5.93278 21.5969 6.56588 21.2098 6.95627L10.107 18.1355C9.71588 18.5293 9.07892 18.5293 8.68786 18.1355L2.79027 12.1964C2.40324 11.8061 2.40324 11.1735 2.79027 10.7832C3.17729 10.393 3.80478 10.393 4.1918 10.7832L9.39739 16.0237Z"
			fill="#1AC057"
		/>
	</svg>
);

export const Default = Template.bind({});
Default.args = {
	options: [
		{ label: "Item 1", onClick: () => {}, icon: <CheckSVG /> },
		{
			label: "Item 2",
			onClick: () => {},
			iconLoc:
				"https://thumbs.dreamstime.com/b/checkmark-icon-shadow-flat-design-green-background-88270570.jpg",
		},
		{ label: "Item 3", onClick: () => {} },
		{ label: "Item 4", onClick: () => {} },
		{ label: "Item 5", onClick: () => {} },
	],
};
