// Generated with util/create-component.js
import { ElementType, MouseEventHandler, ReactNode } from "react";

export type ButtonType = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "small" | "default" | "medium" | "large";
export type Alignment = "left" | "right" | "top"| "bottom";

  export interface ButtonProps {
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