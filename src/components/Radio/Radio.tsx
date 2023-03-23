// Generated with util/createComponent.js
import React from "react";

import { RadioProps } from "./Radio.types";

import "./Radio.scss";

const Radio: React.ForwardRefRenderFunction<unknown, RadioProps> = (props, ref) => {
	const {
		name,
		title,
		label,
		value,
		checked,
		disabled,
		onChange,
		labelAlign,
		size = "default",
	} = props;

	return (
		<div
			ref={ref as React.MutableRefObject<HTMLDivElement>}
			data-align={labelAlign}
			className="ds__Radio"
			data-testid="Radio"
			data-size={size}
		>
			<label htmlFor={name} className="ds__Radio__input">
				<input
					id={name}
					type="radio"
					title={title}
					value={value}
					checked={checked}
					onChange={onChange}
					disabled={disabled}
				/>
				<span className="ds__Radio__pointer"></span>
			</label>
			{label && (
				<label htmlFor={name} className="ds__Radio__label">
					{label}
				</label>
			)}
		</div>
	);
};

export default React.forwardRef<unknown, RadioProps>(Radio);
