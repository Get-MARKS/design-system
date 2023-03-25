import { MouseEventHandler, ReactNode } from "react";

// Generated with util/create-component.js
export interface ChipProps {
	label: string;
	active: boolean;
	avatar?: string;
	closable?: boolean;
	avatarAlign?: "left" | "right";
	onClick: MouseEventHandler<HTMLSpanElement>;
}
