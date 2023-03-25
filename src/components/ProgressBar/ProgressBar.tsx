// Generated with util/createComponent.js
import React from "react";

import { ProgressBarProps } from "./ProgressBar.types";

import "./ProgressBar.scss";

const ProgressBar: React.ForwardRefRenderFunction<unknown, ProgressBarProps> = (props, ref) => {
	const { percentage = 0, size = "default" } = props;

	return (
		<div
			ref={ref as React.MutableRefObject<HTMLDivElement>}
			data-testid="ProgressBar"
			className="ds__ProgressBar"
			data-size={size}
		>
			<div className="ds__ProgressBar__bar">
				<span style={{ width: Number(percentage).toFixed(0) + "%" }} />
			</div>
			<p className="ds__ProgressBar__label">
				{Number(percentage).toFixed(0)}
				<span>%</span>
			</p>
		</div>
	);
};

export default React.forwardRef<unknown, ProgressBarProps>(ProgressBar);
