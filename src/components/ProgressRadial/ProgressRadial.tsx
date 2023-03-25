// Generated with util/createComponent.js
import React, { Fragment } from "react";

import { ProgressRadialProps } from "./ProgressRadial.types";

import "./ProgressRadial.scss";

const ProgressRadial: React.ForwardRefRenderFunction<unknown, ProgressRadialProps> = (
	props,
	ref
) => {
	const { status = "default", percentage = 0, size = "default" } = props;

	const polarToCartesian = (
		centerX: number,
		centerY: number,
		radius: number,
		angleInDegrees: number
	) => {
		var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

		return {
			x: centerX + radius * Math.cos(angleInRadians),
			y: centerY + radius * Math.sin(angleInRadians),
		};
	};

	const describeArc = (percentage: number) => {
		const x = 100;
		const y = 100;
		const radius = 90;
		const startAngle = 0;
		const endAngle = (percentage / 100) * 359;

		var start = polarToCartesian(x, y, radius, endAngle);
		var end = polarToCartesian(x, y, radius, startAngle);

		var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

		var d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(
			" "
		);

		return d;
	};

	return (
		<div
			ref={ref as React.MutableRefObject<HTMLDivElement>}
			className="ds__ProgressRadial"
			data-testid="ProgressRadial"
			data-status={status}
			data-size={size}
		>
			<svg
				fill="none"
				width="200"
				height="200"
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
				className="ds__ProgressRadial__ring"
			>
				<path
					fill="none"
					stroke="gray"
					className="bg"
					strokeLinecap="round"
					d={describeArc(100)}
				/>
				<path
					fill="none"
					stroke="gray"
					className="fg"
					strokeLinecap="round"
					d={describeArc(Number(percentage))}
				/>
			</svg>
			<div className="ds__ProgressRadial__info">
				{status === "success" ? (
					<Fragment>
						<CheckSVG className="icon" />
						<p className="label">Success!</p>
					</Fragment>
				) : status === "error" ? (
					<Fragment>
						<CrossSVG className="icon" />
						<p className="label">Error</p>
					</Fragment>
				) : (
					<p className="progress">
						{Number(percentage).toFixed(0)}
						<span>%</span>
					</p>
				)}
			</div>
		</div>
	);
};

export default React.forwardRef<unknown, ProgressRadialProps>(ProgressRadial);

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

const CrossSVG = (props: { className: string }) => (
	<svg
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		className={props.className}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 10.5857L17.243 5.34274C17.6335 4.95228 18.2665 4.95228 18.657 5.34274C19.0475 5.73321 19.0475 6.36628 18.657 6.75674L13.414 11.9997L18.657 17.2427C19.0475 17.6332 19.0475 18.2663 18.657 18.6567C18.2665 19.0472 17.6335 19.0472 17.243 18.6567L12 13.4137L6.75699 18.6567C6.36652 19.0472 5.73345 19.0472 5.34299 18.6567C4.95252 18.2663 4.95252 17.6332 5.34299 17.2427L10.586 11.9997L5.34299 6.75674C4.95252 6.36628 4.95252 5.73321 5.34299 5.34274C5.73345 4.95228 6.36652 4.95228 6.75699 5.34274L12 10.5857Z"
			fill="#EF4343"
		/>
	</svg>
);
