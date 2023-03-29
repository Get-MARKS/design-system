// Generated with util/createComponent.js
import React, { Fragment } from "react";

import { InputCaptionProps } from "./InputCaption.types";

import "./InputCaption.scss";

const InputCaption: React.ForwardRefRenderFunction<unknown, InputCaptionProps> = (props, ref) => {
	const { content, type, size, passwordState = 0 } = props;

	return (
		<div
			ref={ref as React.MutableRefObject<HTMLDivElement>}
			className="ds__InputCaption"
			data-testid="InputCaption"
			data-type={type}
			data-size={size}
		>
			{type === "success" ? (
				<Fragment>
					<CheckIcon />
					<p>{content}</p>
				</Fragment>
			) : type === "info" ? (
				<Fragment>
					<InfoSVG />
					<p>{content}</p>
				</Fragment>
			) : type === "error" ? (
				<Fragment>
					<ErrorSVG />
					<p>{content}</p>
				</Fragment>
			) : type === "password" ? (
				<Fragment>
					<LockSVG />
					<p>{content}</p>
				</Fragment>
			) : type === "passwordState" && passwordState != 0 ? (
				<Fragment>
					{passwordState === 1 ? (
						<p>Worst</p>
					) : passwordState === 2 ? (
						<p>Common</p>
					) : passwordState === 3 ? (
						<p>Good</p>
					) : (
						<p>Excellent</p>
					)}
					<div className="progress">
						<span className="bar" data-active={passwordState >= 1} />
						<span className="bar" data-active={passwordState >= 2} />
						<span className="bar" data-active={passwordState >= 3} />
						<span className="bar" data-active={passwordState >= 4} />
					</div>
				</Fragment>
			) : (
				<Fragment>{content}</Fragment>
			)}
		</div>
	);
};

export default React.forwardRef<unknown, InputCaptionProps>(InputCaption);

const CheckIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M12.0005 22C17.5233 22 22.0005 17.5229 22.0005 12C22.0005 6.47715 17.5233 2 12.0005 2C6.47764 2 2.00049 6.47715 2.00049 12C2.00049 17.5229 6.47764 22 12.0005 22ZM17.0006 10.4142C17.3911 10.0237 17.3911 9.39051 17.0006 8.99999C16.6101 8.60946 15.9769 8.60946 15.5864 8.99999L10.35 14.2364L8.05273 11.5563C7.69331 11.137 7.06201 11.0884 6.64268 11.4478C6.22336 11.8073 6.1748 12.4386 6.53422 12.8579L9.53422 16.3579C9.71549 16.5694 9.97676 16.6957 10.2551 16.7064C10.5334 16.717 10.8036 16.6112 11.0006 16.4142L17.0006 10.4142Z"
			fill="#1AC057"
		/>
	</svg>
);

const InfoSVG = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M22.0005 12C22.0005 17.5228 17.5233 22 12.0005 22C6.47764 22 2.00049 17.5228 2.00049 12C2.00049 6.47715 6.47764 2 12.0005 2C17.5233 2 22.0005 6.47715 22.0005 12ZM11.0005 10C10.4482 10 10.0005 10.4477 10.0005 11C10.0005 11.5523 10.4482 12 11.0005 12V17C11.0005 17.5523 11.4482 18 12.0005 18H13.0005C13.5528 18 14.0005 17.5523 14.0005 17C14.0005 16.4477 13.5528 16 13.0005 16V11C13.0005 10.4477 12.5528 10 12.0005 10H11.0005ZM11.0005 7.5C11.0005 6.94772 11.4482 6.5 12.0005 6.5C12.5528 6.5 13.0005 6.94772 13.0005 7.5C13.0005 8.05229 12.5528 8.5 12.0005 8.5C11.4482 8.5 11.0005 8.05229 11.0005 7.5Z"
			fill="#A1A1AA"
		/>
	</svg>
);

const LockSVG = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M6.99951 8C6.99951 5.23772 9.23723 3 11.9995 3C14.7618 3 16.9995 5.23772 16.9995 8V9H18.9995C20.4995 9 20.9995 9.72 20.9995 10.6V20.1C20.9995 21.2046 20.1041 22.1 18.9995 22.1H4.99951C3.89494 22.1 2.99951 21.2046 2.99951 20.1V10.6C2.99951 9.72 3.49951 9 4.84951 9H6.99951V8ZM14.9995 8V9H8.99951V8C8.99951 6.34228 10.3418 5 11.9995 5C13.6572 5 14.9995 6.34228 14.9995 8ZM11.9995 12C10.8949 12 9.94355 12.8968 9.99951 14C10.0365 14.7298 10.4083 15.3007 10.9995 15.5816V17C10.9995 17.4142 11.1767 18.5 11.9995 18.5C12.8223 18.5 12.9995 17.4142 12.9995 17V15.5816C13.5907 15.3007 13.9625 14.7298 13.9995 14C14.0555 12.8968 13.1041 12 11.9995 12Z"
			fill="#71717A"
		/>
	</svg>
);

const ErrorSVG = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M9.90847 3.71849C10.826 2.08733 13.1745 2.08733 14.092 3.71849L20.7884 15.6231C21.6883 17.223 20.5322 19.1998 18.6966 19.1998H5.30388C3.4683 19.1998 2.31219 17.223 3.2121 15.6231L9.90847 3.71849ZM13.2001 15.5999C13.2001 16.2626 12.6629 16.7999 12.0001 16.7999C11.3374 16.7999 10.8001 16.2626 10.8001 15.5999C10.8001 14.9372 11.3374 14.3999 12.0001 14.3999C12.6629 14.3999 13.2001 14.9372 13.2001 15.5999ZM12.0001 5.9999C11.3374 5.9999 10.8001 6.53716 10.8001 7.1999V10.7999C10.8001 11.4626 11.3374 11.9999 12.0001 11.9999C12.6629 11.9999 13.2001 11.4626 13.2001 10.7999V7.1999C13.2001 6.53716 12.6629 5.9999 12.0001 5.9999Z"
			fill="#EF4343"
		/>
	</svg>
);
