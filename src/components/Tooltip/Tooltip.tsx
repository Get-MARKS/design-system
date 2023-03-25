// Generated with util/createComponent.js
import React from "react";

import { TooltipProps } from "./Tooltip.types";

import "./Tooltip.scss";

const Tooltip: React.ForwardRefRenderFunction<unknown, TooltipProps> = (props, ref) => {
	const { content, className, direction, placement = "center" } = props;

	return (
		<div
			ref={ref as React.MutableRefObject<HTMLDivElement>}
			data-testid={`Tooltip ${className}`}
			data-direction={direction}
			data-placement={placement}
			className="ds__Tooltip"
		>
			{content}
		</div>
	);
};

export default React.forwardRef<unknown, TooltipProps>(Tooltip);
