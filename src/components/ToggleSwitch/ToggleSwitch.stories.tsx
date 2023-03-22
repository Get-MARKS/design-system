// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { Fragment, useState } from "react";

import ToggleSwitch from "./ToggleSwitch";

export default {
	component: ToggleSwitch,
	title: "Components/ToggleSwitch",
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: "fruit",
	value: "apple",
	size: "default",
	disabled: false,
	labelAlign: "right",
	label: "Do you want to eat apple?",
};

const gridStyle = {
	gap: "1rem",
	display: "grid",
};

export const allSwitch = () => {
	const [isChecked, setChecked] = useState(false);

	return (
		<Fragment>
			<div style={gridStyle}>
				<ToggleSwitch
					label="Large Toggle Switch"
					name="ts_large"
					disabled={false}
					size="large"
					checked={isChecked}
					onChange={(e) => {
						setChecked(e.target.checked);
					}}
				/>
				<ToggleSwitch
					label="Default Toggle Switch"
					name="ts_default"
					disabled={false}
					size="default"
				/>
				<ToggleSwitch
					label="Small Toggle Switch"
					name="ts_small"
					disabled={false}
					size="small"
				/>
				<ToggleSwitch
					label="Default Disabled Toggle Switch"
					name="ts_default_disabled"
					disabled={true}
					size="small"
				/>
				<ToggleSwitch
					label="Active Disabled Toggle Switch"
					name="ts_active_disabled"
					disabled={true}
					checked={true}
					size="small"
				/>
			</div>
		</Fragment>
	);
};
