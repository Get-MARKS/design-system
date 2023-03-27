// Generated with util/createComponent.js
import React from "react";

import { BreadcrumbsProps } from "./Breadcrumbs.types";

import "./Breadcrumbs.scss";

const Breadcrumbs: React.ForwardRefRenderFunction<unknown, BreadcrumbsProps> = (props, ref) => {
	const { content, size } = props;

	return (
		<div
			ref={ref as React.MutableRefObject<HTMLDivElement>}
			className="ds__Breadcrumbs"
			data-testid="Breadcrumbs"
			data-size={size}
		>
			{content?.map((item, idx) => (
				<span className="ds__Breadcrumbs__item" key={idx}>
					<p className="ds__Breadcrumbs__text">{item}</p>
					<svg
						width="7"
						height="12"
						fill="none"
						viewBox="0 0 7 12"
						className="ds__Breadcrumbs__icon"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.309402 1.88807C-0.127636 1.43152 -0.0981117 0.71978 0.375345 0.298351C0.848803 -0.123077 1.5869 -0.0946077 2.02394 0.36194L6.6906 5.23694C7.10313 5.66788 7.10313 6.33212 6.6906 6.76306L2.02394 11.6381C1.5869 12.0946 0.848803 12.1231 0.375345 11.7016C-0.0981117 11.2802 -0.127636 10.5685 0.309402 10.1119L4.24561 6L0.309402 1.88807Z"
							fill="#A1A1AA"
						/>
					</svg>
				</span>
			))}
		</div>
	);
};

export default React.forwardRef<unknown, BreadcrumbsProps>(Breadcrumbs);
