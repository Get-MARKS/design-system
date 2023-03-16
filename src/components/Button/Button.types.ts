// Generated with util/create-component.js
import { ElementType, MouseEventHandler, ReactNode } from "react";

export type ButtonType = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "small" | "default" | "medium" | "large";

  export interface ButtonProps {
    size?: ButtonSize;
    type?: ButtonType;
    loading?: boolean;
    className?: string;
    icon?: ElementType;
    disabled?: boolean;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }