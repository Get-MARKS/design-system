import { MouseEventHandler, ReactNode } from "react";

// Generated with util/create-component.js
export interface NotificationProps {
	title: string;
	iconLoc?: string;
	caption?: string;
	icon?: ReactNode;
	onClick?: MouseEventHandler<HTMLSpanElement>;
}
