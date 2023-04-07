// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";

import Input from "./Input";

export default {
	component: Input,
	title: "Components/Input",
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const CheckIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M12.0005 22C17.5233 22 22.0005 17.5229 22.0005 12C22.0005 6.47715 17.5233 2 12.0005 2C6.47764 2 2.00049 6.47715 2.00049 12C2.00049 17.5229 6.47764 22 12.0005 22ZM17.0006 10.4142C17.3911 10.0237 17.3911 9.39051 17.0006 8.99999C16.6101 8.60946 15.9769 8.60946 15.5864 8.99999L10.35 14.2364L8.05273 11.5563C7.69331 11.137 7.06201 11.0884 6.64268 11.4478C6.22336 11.8073 6.1748 12.4386 6.53422 12.8579L9.53422 16.3579C9.71549 16.5694 9.97676 16.6957 10.2551 16.7064C10.5334 16.717 10.8036 16.6112 11.0006 16.4142L17.0006 10.4142Z"
			fill="#1AC057"
		/>
	</svg>
);

export const DefaultInput = Template.bind({});
DefaultInput.args = {
	disabled: false,
	size: "default",
	name: "story",
	type: "text",
	label: "Label",
	placeholder: "Placeholder",
	leftIconLoc: "https://cdn-teams-slug.flaticon.com/pixel-buddha.jpg",
	rightIconLoc: "",
	leftIcon: undefined,
	rightIcon: <CheckIcon />,
};

export const AllTypes = () => {
	return (
		<div style={{ display: "grid", gap: "1rem" }}>
			<Input name="test_01" type="text" placeholder="Text" title={""} />
			<Input name="test_02" type="email" placeholder="Email" title={""} />
			<Input name="test_03" type="email" placeholder="Enter Here" label="Email" title={""} />
			<Input
				type="email"
				label="Email"
				name="test_04"
				value="Test@gmail.com"
				placeholder="Enter Here"
				rightIcon={<CheckIcon />}
				title={""}
			/>
			<Input
				name="test_04"
				type="password"
				label="Password"
				value="Test@gmail.com"
				placeholder="Enter Here"
				leftIconLoc="https://www.techtalk.gfi.com/wp-content/uploads/2014/12/30-things-to-do-to-secure-your-network-now_SQ.jpg"
				title={""}
			/>
		</div>
	);
};

export const AllSizes = () => {
	const [value, setValue] = useState("Test@gmail.com");

	return (
		<div style={{ display: "grid", gap: "1rem" }}>
			<Input
				size="small"
				type="email"
				label="Email"
				name="test_01"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Enter Here"
				rightIcon={<CheckIcon />}
				title="Enter your correct email address"
				leftIconLoc="https://www.techtalk.gfi.com/wp-content/uploads/2014/12/30-things-to-do-to-secure-your-network-now_SQ.jpg"
			/>
			<Input
				type="email"
				label="Email"
				name="test_02"
				size="default"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Enter Here"
				rightIcon={<CheckIcon />}
				title="Enter your correct email address"
				leftIconLoc="https://www.techtalk.gfi.com/wp-content/uploads/2014/12/30-things-to-do-to-secure-your-network-now_SQ.jpg"
			/>
			<Input
				size="large"
				type="email"
				label="Email"
				name="test_03"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Enter Here"
				rightIcon={<CheckIcon />}
				title="Enter your correct email address"
				leftIconLoc="https://www.techtalk.gfi.com/wp-content/uploads/2014/12/30-things-to-do-to-secure-your-network-now_SQ.jpg"
			/>
		</div>
	);
};
