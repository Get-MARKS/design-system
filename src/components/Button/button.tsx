import React, { ElementType, MouseEventHandler, ReactNode } from "react";

import { StyledButton } from "./styled";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonVarient = "primary" | "secondary" | "ternary";

export const ButtonPadding: { [key in ButtonSize]: number } = {
	large: 30,
	medium: 25,
	small: 20,
};

export const Buttonheights: { [key in ButtonSize]: number } = {
	large: 55,
	medium: 45,
	small: 35,
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

const Button: React.ForwardRefRenderFunction<unknown, BaseButtonProps> = (props, ref) => {
	const {
		onClick,
		children,
		className,
		isDisabled,
		type = "button",
		size = "medium",
		varient = "primary",
	} = props;

	const styles = {
		size,
		varient: varient,
		disabled: isDisabled,
		withText: children != null,
	};

	return (
		<StyledButton
			{...styles}
			type={type}
			onClick={onClick}
			className={className}
			ref={ref as React.MutableRefObject<HTMLButtonElement>}
		>
			{children}
		</StyledButton>
	);
};

export default React.forwardRef<unknown, ButtonProps>(Button);
