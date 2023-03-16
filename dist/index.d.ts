import React, { ElementType, ReactNode, MouseEventHandler } from 'react';

type ButtonType = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "small" | "default" | "medium" | "large";
interface ButtonProps {
    size?: ButtonSize;
    type?: ButtonType;
    loading?: boolean;
    className?: string;
    icon?: ElementType;
    disabled?: boolean;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const _default: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;

export { _default as Button };
