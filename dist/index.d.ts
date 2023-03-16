import React, { ElementType, MouseEventHandler } from 'react';

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

declare const _default: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;

export { _default as Button };
