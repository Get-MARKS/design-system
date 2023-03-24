// Generated with util/createComponent.js
import React from "react";

import { StepperProps } from "./Stepper.types";

import "./Stepper.scss";

const Stepper: React.ForwardRefRenderFunction<unknown, StepperProps> = (props, ref) => {
	const { status = "incomplete", label, caption, direction = "right" } = props;

	return (
		<div
			ref={ref as React.MutableRefObject<HTMLDivElement>}
			className="ds__Stepper"
			data-testid="Stepper"
			data-status={status}
			data-dir={direction}
		>
			<div className="ds__Stepper__base">
				{status === "complete" ? (
					<CheckSVG className="icon" />
				) : status === "current" ? (
					<span className="circle" />
				) : (
					<span className="ring" />
				)}
			</div>
			{label && (
				<div className="ds__Stepper__info">
					<p className="ds__Stepper__label">{label}</p>
					{caption && <p className="ds__Stepper__caption">{caption}</p>}
				</div>
			)}
		</div>
	);
};

export default React.forwardRef<unknown, StepperProps>(Stepper);

const CheckSVG = (props: { className: string }) => (
	<svg
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		className={props.className}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M9.39739 16.0237L19.8077 5.54269C20.1947 5.15247 20.8222 5.15246 21.2094 5.54253C21.5967 5.93278 21.5969 6.56588 21.2098 6.95627L10.107 18.1355C9.71588 18.5293 9.07892 18.5293 8.68786 18.1355L2.79027 12.1964C2.40324 11.8061 2.40324 11.1735 2.79027 10.7832C3.17729 10.393 3.80478 10.393 4.1918 10.7832L9.39739 16.0237Z"
			fill="#1AC057"
		/>
	</svg>
);
