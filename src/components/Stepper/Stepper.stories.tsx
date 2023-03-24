// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { Fragment } from "react";

import Stepper from "./Stepper";

export default {
	component: Stepper,
	title: "Components/Stepper",
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />;

export const DefaultStepper = Template.bind({});
DefaultStepper.args = {
	label: "Label",
	caption: "Caption",
	status: "incomplete",
	direction: "right",
};

const gridStyle = {
	gap: "2rem",
	display: "flex",
	marginBottom: "2rem",
};

export const allStatus = () => {
	return (
		<Fragment>
			<div style={gridStyle}>
				<Stepper status={"incomplete"} />
				<Stepper status={"complete"} />
				<Stepper status={"current"} />
			</div>
		</Fragment>
	);
};

export const allDirections = () => {
	return (
		<Fragment>
			<div style={gridStyle}>
				<Stepper direction={"left"} status={"complete"} label="Left" caption="Caption" />
				<Stepper direction={"right"} status={"complete"} label="Right" caption="Caption" />
				<Stepper
					direction={"bottom"}
					status={"complete"}
					label="Bottom"
					caption="Caption"
				/>
				<Stepper direction={"top"} status={"complete"} label="Top" caption="Caption" />
			</div>
			<div style={gridStyle}>
				<Stepper direction={"left"} status={"complete"} label="Left" />
				<Stepper direction={"right"} status={"complete"} label="Right" />
				<Stepper direction={"bottom"} status={"complete"} label="Bottom" />
				<Stepper direction={"top"} status={"complete"} label="Top" />
			</div>
		</Fragment>
	);
};
