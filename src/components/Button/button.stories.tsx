import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from ".";

import React, { Fragment } from "react";
import styled from "styled-components";

export default {
	title: "Components/Button",
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
	children: "Primary Button",
	varient: "primary",
	type: "button",
	size: "medium",
	isLoading: false,
	isDisabled: false,
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
	children: "Primary Button",
	varient: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
	children: "Secondary Button",
	varient: "secondary",
};

export const TernaryButton = Template.bind({});
TernaryButton.args = {
	children: "Ternary Button",
	varient: "ternary",
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: "Disabled Button",
	isDisabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
	children: "Button",
	isLoading: true,
};

const ButtonRow = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 10px;
	& > * {
		margin-right: 10px;
	}
`;

export const Sizes = () => {
	return (
		<Fragment>
			<ButtonRow>
				<Button varient="primary" size="large">
					Large
				</Button>
				<Button varient="primary" size="medium">
					Default
				</Button>
				<Button varient="primary" size="small">
					Small
				</Button>
			</ButtonRow>

			<ButtonRow>
				<Button varient="secondary" size="large">
					Large
				</Button>
				<Button varient="secondary" size="medium">
					Default
				</Button>
				<Button varient="secondary" size="small">
					Small
				</Button>
			</ButtonRow>

			<ButtonRow>
				<Button varient="ternary" size="large">
					Large
				</Button>
				<Button varient="ternary" size="medium">
					Default
				</Button>
				<Button varient="ternary" size="small">
					Small
				</Button>
			</ButtonRow>
			<ButtonRow>
				<Button isLoading={true}>Loading Button</Button>
				<Button isDisabled={true}>Disabled button</Button>
			</ButtonRow>
		</Fragment>
	);
};
