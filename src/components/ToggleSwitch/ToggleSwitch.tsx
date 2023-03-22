// Generated with util/createComponent.js
import React from "react";

import { ToggleSwitchProps } from "./ToggleSwitch.types";

import "./ToggleSwitch.scss";

const ToggleSwitch: React.ForwardRefRenderFunction<unknown, ToggleSwitchProps> = (props, ref) => {
	const {
		label,
		name,
		title,
		value,
		checked,
		disabled,
		onChange,
		size = "default",
		labelAlign = "right",
	} = props;

	return (
		<div
			data-size={size}
			data-align={labelAlign}
			data-testid="ToggleSwitch"
			className="ds__ToggleSwitch"
			ref={ref as React.MutableRefObject<HTMLDivElement>}
		>
			<label htmlFor={name} className="ds__ToggleSwitch__input">
				<input
					id={name}
					name="name"
					title={title}
					value={value}
					type="checkbox"
					checked={checked}
					onChange={onChange}
					disabled={disabled}
				/>
				<span className="ds__ToggleSwitch__slider"></span>
			</label>
			{label && (
				<label htmlFor={name} className="ds__ToggleSwitch__label">
					{label}
				</label>
			)}
		</div>
	);
};

export default React.forwardRef<unknown, ToggleSwitchProps>(ToggleSwitch);
