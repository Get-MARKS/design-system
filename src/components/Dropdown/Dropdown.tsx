// Generated with util/createComponent.js
import React from "react";

import { DropdownProps } from "./Dropdown.types";

import "./Dropdown.scss";

const Dropdown: React.ForwardRefRenderFunction<unknown, DropdownProps> = (props, ref) => {
	const { options, className } = props;

	return (
		<ul
			ref={ref as React.MutableRefObject<HTMLUListElement>}
			className={`ds__Dropdown ${className}`}
			data-testid="Dropdown"
		>
			{options?.map((option, idx) => (
				<li
					key={idx}
					tabIndex={idx}
					onClick={option?.onClick}
					className="ds__Dropdown__item"
				>
					{option?.icon ? (
						<span className="icon">{option?.icon}</span>
					) : option?.iconLoc ? (
						<img className="img" src={option.iconLoc} alt={option?.label} />
					) : null}
					<p className="ds__Dropdown__label">{option.label}</p>
				</li>
			))}
		</ul>
	);
};

export default React.forwardRef<unknown, DropdownProps>(Dropdown);
