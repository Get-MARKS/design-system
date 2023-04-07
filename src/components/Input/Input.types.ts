import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";

type modes = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";

// Generated with util/create-component.js
export interface InputProps {
	name: string;
	type: string;
	title: string;
	label?: string;
	pattern?: string;
	inputMode?: modes;
	readOnly?: boolean;
	tabIndex?: number;
	required?: boolean;
	disabled?: boolean;
	minLenght?: number;
	maxLenght?: number;
	className?: string;
	placeholder: string;
	leftIcon?: ReactNode;
	leftIconLoc?: string;
	rightIcon?: ReactNode;
	rightIconLoc?: string;
	value?: string | number;
	size?: "default" | "small" | "large";
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}
