import { ChangeEventHandler } from "react";
export interface RadioProps {
    name: string;
    title: string;
    value: string;
    label?: string;
    checked?: boolean;
    disabled: boolean;
    labelAlign?: "left" | "right";
    size?: "small" | "default" | "medium" | "large";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
