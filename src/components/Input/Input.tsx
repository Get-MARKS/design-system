// Generated with util/createComponent.js
import React from "react";

import { InputProps } from "./Input.types";

import "./Input.scss";

const Input: React.ForwardRefRenderFunction<unknown, InputProps> = (props, ref) => {
	const {
		name,
		value,
		label,
		title,
		pattern,
		tabIndex,
		required,
		onChange,
		leftIcon,
		disabled,
		inputMode,
		className,
		rightIcon,
		maxLenght,
		minLenght,
		onFocus,
		onBlur,
		readOnly,
		leftIconLoc,
		rightIconLoc,
		type = "text",
		size = "default",
		placeholder = "Placeholder",
	} = props;

	return (
		<label
			ref={ref as React.MutableRefObject<HTMLLabelElement>}
			className={`ds__Input ${className}`}
			data-disabled={disabled}
			data-testid="Input"
			data-size={size}
			htmlFor={name}
		>
			{label && (
				<span className="ds__Input__label">
					<p>{label}:</p>
					<span className="ds__Input__divider" />
				</span>
			)}

			{leftIcon ? (
				<span className="left__icon">{leftIcon}</span>
			) : leftIconLoc ? (
				<span className="left__icon">
					<img src={leftIconLoc} alt="Left Icon" />
				</span>
			) : null}
			<input
				id={name}
				name={name}
				type={type}
				title={title}
				value={value}
				onBlur={onBlur}
				onFocus={onFocus}
				pattern={pattern}
				tabIndex={tabIndex}
				required={required}
				onChange={onChange}
				disabled={disabled}
				readOnly={readOnly}
				inputMode={inputMode}
				minLength={minLenght}
				maxLength={maxLenght}
				placeholder={placeholder}
				className="ds__Input__base"
			/>
			{rightIcon ? (
				<span className="right__icon">{rightIcon}</span>
			) : rightIconLoc ? (
				<span className="right__icon">
					<img src={rightIconLoc} alt="Right Icon" />
				</span>
			) : null}
		</label>
	);
};

export default React.forwardRef<unknown, InputProps>(Input);
