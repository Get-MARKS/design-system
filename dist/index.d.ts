import React, { ElementType, MouseEventHandler, ChangeEventHandler, ReactNode } from 'react';

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

declare const _default$a: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;

type checkboxSize = "small" | "default" | "medium" | "large";
type checkboxType = "fill" | "empty" | "line";
type labelAlignment$1 = "left" | "right";
interface CheckboxProps {
    name: string;
    label: string;
    title?: string;
    value?: string;
    disabled: boolean;
    type: checkboxType;
    size: checkboxSize;
    labelAlign?: labelAlignment$1;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

declare const _default$9: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<unknown>>;

type switchSize = "small" | "default" | "medium" | "large";
type labelAlignment = "left" | "right";
interface ToggleSwitchProps {
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

declare const _default$8: React.ForwardRefExoticComponent<ToggleSwitchProps & React.RefAttributes<unknown>>;

interface TooltipProps {
    direction?: "top" | "bottom" | "left" | "right";
    placement?: "left" | "center" | "right";
    className?: string;
    content: string;
}

declare const _default$7: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<unknown>>;

interface RadioProps {
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

declare const _default$6: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<unknown>>;

interface ProgressBarProps {
    size: "small" | "default" | "medium" | "large";
    percentage: number;
}

declare const _default$5: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<unknown>>;

interface ProgressRadialProps {
    size: "small" | "default" | "medium" | "large";
    status: "default" | "success" | "error";
    percentage: number;
}

declare const _default$4: React.ForwardRefExoticComponent<ProgressRadialProps & React.RefAttributes<unknown>>;

interface StepperProps {
    direction?: "top" | "bottom" | "left" | "right";
    status: "complete" | "current" | "incomplete";
    caption?: string;
    label?: string;
}

declare const _default$3: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<unknown>>;

interface ScollbarProps {
    direction: "vertical" | "horizontal";
    size: number;
}

declare const _default$2: React.ForwardRefExoticComponent<ScollbarProps & React.RefAttributes<unknown>>;

interface option {
    label: string;
    icon?: ReactNode;
    iconLoc?: string;
    onClick: MouseEventHandler<HTMLLIElement>;
}
interface DropdownProps {
    options: Array<option>;
    className?: string;
}

declare const _default$1: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<unknown>>;

interface ChipProps {
    label: string;
    active: boolean;
    avatar?: string;
    closable?: boolean;
    avatarAlign?: "left" | "right";
    onClick: MouseEventHandler<HTMLSpanElement>;
}

declare const _default: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<unknown>>;

export { _default$a as Button, _default$9 as Checkbox, _default as Chip, _default$1 as Dropdown, _default$5 as ProgressBar, _default$4 as ProgressRadial, _default$6 as Radio, _default$2 as Scollbar, _default$3 as Stepper, _default$8 as ToggleSwitch, _default$7 as Tooltip };
