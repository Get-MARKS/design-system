// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { Fragment } from "react";

import Tooltip from "./Tooltip";

export default {
	component: Tooltip,
	title: "Components/Tooltip",
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const DefaultTooltip = Template.bind({});
DefaultTooltip.args = {
	content: "Content of tooltip",
	placement: "center",
	direction: "top",
};

const gridStyle = {
	gap: "1rem",
	display: "flex",
	marginBottom: "1rem",
};

export const allTooltip = () => {
	return (
		<Fragment>
			<div style={gridStyle}>
				<Tooltip content="Default" />
			</div>
			<div style={gridStyle}>
				<Tooltip content="Top Left" direction="top" placement="left" />
				<Tooltip content="Top Center" direction="top" placement="center" />
				<Tooltip content="Top Right" direction="top" placement="right" />
			</div>
			<div style={gridStyle}>
				<Tooltip content="Bottom Left" direction="bottom" placement="left" />
				<Tooltip content="Bottom Center" direction="bottom" placement="center" />
				<Tooltip content="Bottom Right" direction="bottom" placement="right" />
			</div>
			<div style={gridStyle}>
				<Tooltip content="Left arrow" direction="left" />
				<Tooltip content="Right arrow" direction="right" />
			</div>
		</Fragment>
	);
};
