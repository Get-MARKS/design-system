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
	children: "Default Button",
	type: "primary",
	size: "default",
	loading: false,
	disabled: false,
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
	children: "Primary Button",
	type: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
	children: "Secondary Button",
	type: "secondary",
};

export const GhostButton = Template.bind({});
GhostButton.args = {
	children: "Ghost Button",
	type: "ghost",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
	children: "Danger Button",
	type: "danger",
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: "Disabled Button",
	disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
	children: "Button",
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
				<Button type="primary" size="large">
					Large
				</Button>
				<Button type="primary" size="medium">
					Medium
				</Button>
				<Button type="primary" size="default">
					Default
				</Button>
				<Button type="primary" size="small">
					Small
				</Button>
			</div>

			<div style={gridStyle}>
				<Button type="secondary" size="large">
					Large
				</Button>
				<Button type="secondary" size="medium">
					Medium
				</Button>
				<Button type="secondary" size="default">
					Default
				</Button>
				<Button type="secondary" size="small">
					Small
				</Button>
			</div>

			<div style={gridStyle}>
				<Button type="ghost" size="large">
					Large
				</Button>
				<Button type="ghost" size="medium">
					Medium
				</Button>
				<Button type="ghost" size="default">
					Default
				</Button>
				<Button type="ghost" size="small">
					Small
				</Button>
			</div>
			<div style={gridStyle}>
				<Button type="danger" size="large">
					Large
				</Button>
				<Button type="danger" size="medium">
					Medium
				</Button>
				<Button type="danger" size="default">
					Default
				</Button>
				<Button type="danger" size="small">
					Small
				</Button>
			</div>
			<div style={gridStyle}>
				<Button loading={true}>Loading Button</Button>
				<Button disabled={true}>Disabled button</Button>
				<Button disabled={true} loading={true}>
					Submitting
				</Button>
			</div>
		</Fragment>
	);
};
