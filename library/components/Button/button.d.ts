import React, { ElementType, MouseEventHandler, ReactNode } from "react";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonVarient = "primary" | "secondary" | "ternary";
export declare const ButtonPadding: {
    [key in ButtonSize]: number;
};
export declare const Buttonheights: {
    [key in ButtonSize]: number;
};
interface BaseButtonProps {
    size?: ButtonSize;
    type?: ButtonType;
    className?: string;
    icon?: ElementType;
    isLoading?: boolean;
    isDisabled?: boolean;
    children?: ReactNode;
    varient?: ButtonVarient;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;
type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;
type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;
export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;
declare const _default: React.ForwardRefExoticComponent<{
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & BaseButtonProps & {
    href?: string | undefined;
} & {
    as?: React.ElementType<any> | undefined;
    to?: string | undefined;
} & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=button.d.ts.map