// Generated with util/createComponent.js
import React from "react";

import { ScollbarProps } from "./Scollbar.types";

import "./Scollbar.scss";

const Scollbar: React.ForwardRefRenderFunction<unknown, ScollbarProps> = (props, ref) => {
	const { direction = "horizontal", size = 0 } = props;

	return (
		<div
			ref={ref as React.MutableRefObject<HTMLDivElement>}
			className="ds__Scollbar"
			data-testid="Scollbar"
			data-dir={direction}
		>
			<span
				className="ds__Scollbar_bar"
				style={
					direction === "horizontal"
						? { width: Number(size).toFixed(1) + "%" }
						: { height: Number(size).toFixed(1) + "%" }
				}
			/>
		</div>
	);
};

export default React.forwardRef<unknown, ScollbarProps>(Scollbar);
