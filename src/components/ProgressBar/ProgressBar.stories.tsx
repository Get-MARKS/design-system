// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ProgressBar from "./ProgressBar";

export default {
	component: ProgressBar,
	title: "Components/ProgressBar",
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const DefaultProgressBar = Template.bind({});
DefaultProgressBar.args = {
	percentage: 87,
	size: "default",
};

const gridStyle = {
	gap: "1rem",
	display: "grid",
};

export const allProgressBars = () => {
	return (
		<div style={gridStyle}>
			<ProgressBar size={"small"} percentage={30} />
			<ProgressBar size={"medium"} percentage={60} />
			<ProgressBar size={"large"} percentage={90} />
		</div>
	);
};
