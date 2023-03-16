// Generated with util/createComponent.js
import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
	const {
		children,
		disabled,
		className = "",
		type = "primary",
		size = "default",
		loading = false,
	} = props;

	return (
		<button
			type="button"
			data-type={type}
			data-size={size}
			disabled={disabled}
			data-loading={loading}
			className={`ds__Button ${className}`}
			ref={ref as React.MutableRefObject<HTMLButtonElement>}
		>
			{children}
		</button>
	);
};

export default React.forwardRef<unknown, ButtonProps>(Button);
