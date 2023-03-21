// Generated with util/createComponent.js
import React from "react";

import { CheckboxProps } from "./Checkbox.types";

import "./Checkbox.scss";

const Checkbox: React.ForwardRefRenderFunction<unknown, CheckboxProps> = (props, ref) => {
	const {
		label,
		name,
		title,
		value,
		disabled,
		onChange,
		type = "empty",
		size = "default",
		labelAlign = "right",
	} = props;

	return (
		<div
			data-type={type}
			data-size={size}
			data-testid="Checkbox"
			data-align={labelAlign}
			className="ds__Checkbox"
		>
			<input
				id={name}
				name="name"
				title={title}
				value={value}
				type="checkbox"
				onChange={onChange}
				disabled={disabled}
				className="ds__Checkbox__input"
				ref={ref as React.MutableRefObject<HTMLInputElement>}
			/>
			{label && (
				<label htmlFor={name} className="ds__Checkbox__label">
					{label}
				</label>
			)}
		</div>
	);
};

export default React.forwardRef<unknown, CheckboxProps>(Checkbox);
