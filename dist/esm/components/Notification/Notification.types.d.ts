import { MouseEventHandler, ReactNode } from "react";
export interface NotificationProps {
    title: string;
    iconLoc?: string;
    caption?: string;
    icon?: ReactNode;
    onClick?: MouseEventHandler<HTMLSpanElement>;
}
