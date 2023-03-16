// Generated with util/create-component.js
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { Fragment } from "react";

import Button from "./Button";

export default {
	component: Button,
	title: "Components/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
	label: "Default Button",
	type: "primary",
	size: "default",
	loading: false,
	disabled: false,
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
	label: "Primary Button",
	type: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
	label: "Secondary Button",
	type: "secondary",
};

export const GhostButton = Template.bind({});
GhostButton.args = {
	label: "Ghost Button",
	type: "ghost",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
	label: "Danger Button",
	type: "danger",
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: "Disabled Button",
	disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
	label: "Button",
	loading: true,
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
				<Button type="primary" size="large" />
				<Button type="primary" size="medium" />
				<Button type="primary" size="default" />
				<Button type="primary" size="small" />
			</div>

			<div style={gridStyle}>
				<Button type="secondary" size="large" />
				<Button type="secondary" size="medium" />
				<Button type="secondary" size="default" />
				<Button type="secondary" size="small" />
			</div>

			<div style={gridStyle}>
				<Button type="ghost" size="large" />
				<Button type="ghost" size="medium" />
				<Button type="ghost" size="default" />
				<Button type="ghost" size="small" />
			</div>
			<div style={gridStyle}>
				<Button type="danger" size="large" />
				<Button type="danger" size="medium" />
				<Button type="danger" size="default" />
				<Button type="danger" size="small" />
			</div>
			<div style={gridStyle}>
				<Button loading={true} />
				<Button disabled={true} />
				<Button disabled={true} loading={true} />
			</div>
		</Fragment>
	);
};
