// Generated with util/createComponent.js
import React from "react";

import { NotificationProps } from "./Notification.types";

import "./Notification.scss";

const Notification: React.ForwardRefRenderFunction<unknown, NotificationProps> = (props, ref) => {
	const { title, caption, icon, iconLoc, onClick } = props;

	return (
		<div
			ref={ref as React.MutableRefObject<HTMLDivElement>}
			className="ds__Notification"
			data-testid="Notification"
		>
			{icon || iconLoc ? (
				<div className="ds__Notification__icon">
					{icon ? (
						<span className="icon">{icon}</span>
					) : iconLoc ? (
						<img className="img" src={iconLoc} alt="Notification icon" />
					) : null}
				</div>
			) : null}
			<div className="ds__Notification__text">
				<p className="ds__Notification__title">{title}</p>
				{caption && <p className="ds__Notification__caption">{caption}</p>}
			</div>
			<span className="close" onClick={onClick}>
				<CloseIcon />
			</span>
		</div>
	);
};

export default React.forwardRef<unknown, NotificationProps>(Notification);

const CloseIcon = () => (
	<svg
		width="28"
		height="28"
		fill="none"
		viewBox="0 0 28 28"
		className="close-icon"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_219_22699)">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M4.86902 4.86865C5.49386 4.24381 6.50692 4.24381 7.13176 4.86865L14.0004 11.7373L20.869 4.86865C21.4939 4.24381 22.5069 4.24381 23.1318 4.86865C23.7566 5.49349 23.7566 6.50656 23.1318 7.1314L16.2631 14L23.1318 20.8687C23.7566 21.4935 23.7566 22.5066 23.1318 23.1314C22.5069 23.7562 21.4939 23.7562 20.869 23.1314L14.0004 16.2628L7.13176 23.1314C6.50692 23.7562 5.49386 23.7562 4.86902 23.1314C4.24418 22.5066 4.24418 21.4935 4.86902 20.8687L11.7376 14L4.86902 7.1314C4.24418 6.50656 4.24418 5.49349 4.86902 4.86865Z"
				fill="white"
				fill-opacity="0.3"
			/>
		</g>
		<defs>
			<clipPath id="clip0_219_22699">
				<rect width="28" height="28" rx="14" fill="white" />
			</clipPath>
		</defs>
	</svg>
);
