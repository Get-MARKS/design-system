// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";

import Select from "./Select";

export default {
	component: Select,
	title: "Components/Select",
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const options = [
	{
		value: "value_1",
		label: "Label 1",
	},
	{
		value: "value_2",
		label: "Label 2",
	},
	{
		value: "value_3",
		label: "Label 3",
	},
	{
		value: "value_4",
		label: "Label 4",
	},
	{
		value: "value_5",
		label: "Label 5",
	},
	{
		value: "value_6",
		label: "Label 6",
	},
];

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
	options: options,
	name: "Unique_name",
	title: "Title of input",
	placeholder: "Placeholder",
	label: "Switch label",
	selectedOption: null,
	onSelect: (v: any) => alert(JSON.stringify(v)),
	onChange: (e: any) => alert("Input change event"),
	searchable: false,
	leftIcon: null,
	leftIconLoc: undefined,
};

export const demo = () => {
	const [selected, setSelected] = useState<any>(null);

	return (
		<div>
			<div style={{ height: "150vh" }}>Scroll down</div>
			<Select
				options={options}
				searchable={true}
				selectedOption={selected}
				onSelect={(v: any) => setSelected(v)}
				onChange={(e: any) => setSelected({ value: null, label: e.target.value })}
				title={"Select atleast one label"}
				placeholder={"Select a label"}
				name={"unique_name"}
			/>
			<div style={{ height: "150vh" }}></div>
		</div>
	);
};
