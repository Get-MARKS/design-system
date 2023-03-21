// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { Fragment } from "react";

import Checkbox from "./Checkbox";

export default {
	component: Checkbox,
	title: "Components/Checkbox",
} as ComponentMeta<typeof Checkbox>;

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	const {
		target: { checked, value, name },
	} = e;

	alert(`Checked: ${String(checked)}, Value: ${String(value)}, Name: ${String(name)}`);
};

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
	type: "fill",
	name: "fruit",
	value: "apple",
	size: "default",
	disabled: false,
	labelAlign: "right",
	onChange: handleChange,
	label: "Do you want to eat apple?",
};

const gridStyle = {
	gap: "1rem",
	display: "flex",
	marginBottom: "1rem",
};

export const Sizes = () => {
	return (
		<Fragment>
			<div style={gridStyle}>
				<Checkbox
					label="Large Checkbox"
					name="empty_large"
					disabled={false}
					size="large"
					type="empty"
				/>
				<Checkbox
					label="Default Checkbox"
					name="empty_default"
					disabled={false}
					size="default"
					type="empty"
				/>
				<Checkbox
					label="Small Checkbox"
					name="empty_small"
					disabled={false}
					size="small"
					type="empty"
				/>
			</div>
			<div style={gridStyle}>
				<Checkbox
					label="Large Checkbox"
					name="fill_large"
					disabled={false}
					size="large"
					type="fill"
				/>
				<Checkbox
					label="Default Checkbox"
					name="fill_default"
					disabled={false}
					size="default"
					type="fill"
				/>
				<Checkbox
					label="Small Checkbox"
					name="fill_small"
					disabled={false}
					size="small"
					type="fill"
				/>
			</div>
			<div style={gridStyle}>
				<Checkbox
					label="Large Checkbox"
					name="line_large"
					disabled={false}
					size="large"
					type="line"
				/>
				<Checkbox
					label="Default Checkbox"
					name="line_default"
					disabled={false}
					size="default"
					type="line"
				/>
				<Checkbox
					label="Small Checkbox"
					name="line_small"
					disabled={false}
					size="small"
					type="line"
				/>
			</div>
		</Fragment>
	);
};
