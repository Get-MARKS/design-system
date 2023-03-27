import { MouseEventHandler } from "react";
export interface ChipProps {
    label: string;
    active: boolean;
    avatar?: string;
    closable?: boolean;
    avatarAlign?: "left" | "right";
    onClick: MouseEventHandler<HTMLSpanElement>;
}
