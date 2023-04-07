// Generated with util/createComponent.js
import React from "react";

import { PaginationNumericProps } from "./PaginationNumeric.types";

import "./PaginationNumeric.scss";
import _ from "lodash";

const PaginationNumeric: React.ForwardRefRenderFunction<unknown, PaginationNumericProps> = (
	props,
	ref
) => {
	const { totalPages, currentPage = 0, size = "default" } = props;

	return (
		<div
			ref={ref as React.MutableRefObject<HTMLDivElement>}
			className="ds__PaginationNumeric"
			data-testid="PaginationNumeric"
			data-size={size}
		>
			<button type="button" className="ds__PaginationNumeric__prev" disabled={false}>
				<svg
					width="28"
					height="28"
					fill="none"
					className="icon"
					viewBox="0 0 28 28"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.9826 14.0002L17.0994 20.1587C17.555 20.6181 17.555 21.3629 17.0994 21.8223C16.6439 22.2817 15.9053 22.2817 15.4498 21.8223L8.50821 14.8321C8.0526 14.3726 8.0526 13.6277 8.50821 13.1682L15.4498 6.17803C15.9053 5.71865 16.6439 5.71865 17.0994 6.17803C17.555 6.63742 17.555 7.38222 17.0994 7.8416L10.9826 14.0002Z"
						fill="#A1A1AA"
					/>
				</svg>
			</button>
			{currentPage > 2 && (
				<span className="ds__PaginationNumeric__num" data-active={currentPage === 1}>
					1
				</span>
			)}
			{currentPage > 3 && (
				<span className="ds__PaginationNumeric__dot" data-active={false}>
					...
				</span>
			)}
			{_.times(currentPage < 2 || totalPages - currentPage < 1 ? 4 : 3, (i) =>
				currentPage < 2 ? (
					<span
						key={i}
						className="ds__PaginationNumeric__num"
						data-active={currentPage + i === currentPage}
					>
						{currentPage + i}
					</span>
				) : totalPages - currentPage < 1 ? (
					<span
						key={i}
						className="ds__PaginationNumeric__num"
						data-active={currentPage + i - 3 === currentPage}
					>
						{currentPage + i - 3}
					</span>
				) : (
					<span
						key={i}
						className="ds__PaginationNumeric__num"
						data-active={currentPage + i - 1 === currentPage}
					>
						{currentPage + i - 1}
					</span>
				)
			)}
			{totalPages - currentPage > 2 && (
				<span className="ds__PaginationNumeric__dot" data-active={false}>
					...
				</span>
			)}
			{totalPages - currentPage > 1 && (
				<span
					className="ds__PaginationNumeric__num"
					data-active={currentPage === totalPages}
				>
					{totalPages}
				</span>
			)}
			<button type="button" className="ds__PaginationNumeric__next" disabled={false}>
				<svg
					width="28"
					height="28"
					fill="none"
					className="icon"
					viewBox="0 0 28 28"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.9585 14.0002L10.8417 7.84161C10.3861 7.38222 10.3861 6.63742 10.8417 6.17803C11.2972 5.71865 12.0358 5.71865 12.4913 6.17803L19.4329 13.1683C19.8885 13.6277 19.8885 14.3726 19.4329 14.8321L12.4913 21.8223C12.0358 22.2817 11.2972 22.2817 10.8417 21.8223C10.3861 21.3629 10.3861 20.6181 10.8417 20.1587L16.9585 14.0002Z"
						fill="#344256"
					/>
				</svg>
			</button>
		</div>
	);
};

export default React.forwardRef<unknown, PaginationNumericProps>(PaginationNumeric);
