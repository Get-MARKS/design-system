import { MouseEventHandler, ReactNode } from "react";

// Generated with util/create-component.js
interface option {
	label: string;
	icon?: ReactNode;
	iconLoc?: string;
	onClick: MouseEventHandler<HTMLLIElement>;
}

export interface DropdownProps {
	options: Array<option>;
	className?: string;
}
