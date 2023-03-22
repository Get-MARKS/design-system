import React, { ElementType, MouseEventHandler, ChangeEventHandler } from 'react';

type ButtonType = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "small" | "default" | "medium" | "large";
type Alignment = "left" | "right" | "top" | "bottom";
interface ButtonProps {
    label?: string;
    size?: ButtonSize;
    type?: ButtonType;
    loading?: boolean;
    className?: string;
    disabled?: boolean;
    icon?: ElementType;
    alignIcon?: Alignment;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const _default$1: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;

type checkboxSize = "small" | "default" | "medium" | "large";
type checkboxType = "fill" | "empty" | "line";
type labelAlignment = "left" | "right";
interface CheckboxProps {
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

declare const _default: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<unknown>>;

export { _default$1 as Button, _default as Checkbox };
