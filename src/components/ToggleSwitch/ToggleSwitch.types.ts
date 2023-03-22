import { ChangeEventHandler } from "react";

export type switchSize = "small" | "default" | "medium" | "large";
export type labelAlignment = "left" | "right";

// Generated with util/create-component.js
export interface ToggleSwitchProps {
	name: string;
	label: string;
	title?: string;
	value?: string;
	size: switchSize;
	disabled: boolean;
	checked?: boolean;
	labelAlign?: labelAlignment;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}
