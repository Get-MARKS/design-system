// Generated with util/create-component.js
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { Fragment, useState } from "react";

import Radio from "./Radio";

export default {
	component: Radio,
	title: "Components/Radio",
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const DefaultRadio = Template.bind({});
DefaultRadio.args = {
	name: "fly",
	value: "yes",
	size: "default",
	disabled: false,
	labelAlign: "right",
	label: "Do you want to fly?",
};

const gridStyle = {
	gap: "1rem",
	display: "grid",
};

export const allRadio = () => {
	const [isChecked, setChecked] = useState(false);

	return (
		<Fragment>
			<div style={gridStyle}>
				<Radio
					label="Large Radio"
					name="radio_large"
					disabled={false}
					size="large"
					checked={isChecked}
					onChange={(e) => {
						setChecked(e.target.checked);
					}}
					title={""}
					value={""}
				/>
				<Radio
					label="Default Radio"
					name="radio_default"
					disabled={false}
					size="default"
					title={""}
					value={""}
					checked={false}
				/>
				<Radio
					label="Small Radio"
					name="radio_small"
					disabled={false}
					size="small"
					title={""}
					value={""}
					checked={false}
				/>
				<Radio
					label="Default Disabled Radio"
					name="radio_default_disabled"
					disabled={true}
					size="small"
					title={""}
					value={""}
					checked={false}
				/>
				<Radio
					label="Active Disabled Radio"
					name="radio_active_disabled"
					disabled={true}
					checked={true}
					size="small"
					title={""}
					value={""}
				/>
			</div>
		</Fragment>
	);
};
