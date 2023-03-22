import { ChangeEventHandler } from "react";
export type checkboxSize = "small" | "default" | "medium" | "large";
export type checkboxType = "fill" | "empty" | "line";
export type labelAlignment = "left" | "right";
export interface CheckboxProps {
    name: string;
    label: string;
    title?: string;
    value?: string;
    disabled: boolean;
    type: checkboxType;
    size: checkboxSize;
    labelAlign?: labelAlignment;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
