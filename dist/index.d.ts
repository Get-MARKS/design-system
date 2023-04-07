/// <reference types="react" />
import React, { ElementType, MouseEventHandler, ChangeEventHandler, ReactNode, FocusEventHandler } from 'react';

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

declare const _default$g: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;

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

declare const _default$f: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<unknown>>;

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

declare const _default$e: React.ForwardRefExoticComponent<ToggleSwitchProps & React.RefAttributes<unknown>>;

interface TooltipProps {
    direction?: "top" | "bottom" | "left" | "right";
    placement?: "left" | "center" | "right";
    className?: string;
    content: string;
}

declare const _default$d: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<unknown>>;

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

declare const _default$c: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<unknown>>;

interface ProgressBarProps {
    size: "small" | "default" | "medium" | "large";
    percentage: number;
}

declare const _default$b: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<unknown>>;

interface ProgressRadialProps {
    size: "small" | "default" | "medium" | "large";
    status: "default" | "success" | "error";
    percentage: number;
}

declare const _default$a: React.ForwardRefExoticComponent<ProgressRadialProps & React.RefAttributes<unknown>>;

interface StepperProps {
    direction?: "top" | "bottom" | "left" | "right";
    status: "complete" | "current" | "incomplete";
    caption?: string;
    label?: string;
}

declare const _default$9: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<unknown>>;

interface ScollbarProps {
    direction: "vertical" | "horizontal";
    size: number;
}

declare const _default$8: React.ForwardRefExoticComponent<ScollbarProps & React.RefAttributes<unknown>>;

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

declare const _default$7: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<unknown>>;

interface ChipProps {
    label: string;
    active: boolean;
    avatar?: string;
    closable?: boolean;
    avatarAlign?: "left" | "right";
    onClick: MouseEventHandler<HTMLSpanElement>;
}

declare const _default$6: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<unknown>>;

interface BreadcrumbsProps {
    size?: "large" | "default" | "large";
    content: Array<string>;
}

declare const _default$5: React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<unknown>>;

interface NotificationProps {
    title: string;
    iconLoc?: string;
    caption?: string;
    icon?: ReactNode;
    onClick?: MouseEventHandler<HTMLSpanElement>;
}

declare const _default$4: React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<unknown>>;

interface PaginationStepsProps {
    size?: "small" | "default" | "large";
    type?: "dot" | "line";
    currentStep: number;
    totalSteps: number;
}

declare const _default$3: React.ForwardRefExoticComponent<PaginationStepsProps & React.RefAttributes<unknown>>;

interface PaginationNumericProps {
    size?: "default" | "small" | "large";
    currentPage: number;
    totalPages: number;
}

declare const _default$2: React.ForwardRefExoticComponent<PaginationNumericProps & React.RefAttributes<unknown>>;

interface InputCaptionProps {
    type: "default" | "success" | "error" | "info" | "password" | "passwordState";
    size: "default" | "small" | "medium" | "large";
    passwordState: number;
    content: string;
}

declare const _default$1: React.ForwardRefExoticComponent<InputCaptionProps & React.RefAttributes<unknown>>;

type modes = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
interface InputProps {
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

declare const _default: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<unknown>>;

interface OptionProps {
    value?: string | number;
    label?: string | number;
}
interface SelectProps {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    selectedOption?: OptionProps | null;
    options: Array<OptionProps>;
    searchable?: boolean;
    leftIcon?: ReactNode;
    leftIconLoc?: string;
    placeholder: string;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    title: string;
    onSelect: any;
    name: string;
}

declare const Select: (props: SelectProps) => JSX.Element;

export { _default$5 as Breadcrumbs, _default$g as Button, _default$f as Checkbox, _default$6 as Chip, _default$7 as Dropdown, _default as Input, _default$1 as InputCaption, _default$4 as Notification, _default$2 as PaginationNumeric, _default$3 as PaginationSteps, _default$b as ProgressBar, _default$a as ProgressRadial, _default$c as Radio, _default$8 as Scollbar, Select, _default$9 as Stepper, _default$e as ToggleSwitch, _default$d as Tooltip };
