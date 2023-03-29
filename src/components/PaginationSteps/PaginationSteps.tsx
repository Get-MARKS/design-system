// Generated with util/createComponent.js
import React from "react";
import _ from "lodash";

import { PaginationStepsProps } from "./PaginationSteps.types";

import "./PaginationSteps.scss";

const PaginationSteps: React.ForwardRefRenderFunction<unknown, PaginationStepsProps> = (
	props,
	ref
) => {
	const { totalSteps, currentStep, size, type } = props;

	return (
		<div
			ref={ref as React.MutableRefObject<HTMLDivElement>}
			className="ds__PaginationSteps"
			data-testid="PaginationSteps"
			data-type={type}
			data-size={size}
		>
			{_.times(totalSteps, (i) => (
				<span className="ds__PaginationSteps__step" data-active={currentStep > i} key={i} />
			))}
		</div>
	);
};

export default React.forwardRef<unknown, PaginationStepsProps>(PaginationSteps);
