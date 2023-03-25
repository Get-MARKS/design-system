// Generated with util/createComponent.js
import React from "react";

import { ChipProps } from "./Chip.types";

import "./Chip.scss";

const Chip: React.ForwardRefRenderFunction<unknown, ChipProps> = (props, ref) => {
	const { avatar = null, label, active, closable = false, onClick, avatarAlign = "left" } = props;

	return (
		<label
			ref={ref as React.MutableRefObject<HTMLLabelElement>}
			data-avatar-align={avatarAlign}
			data-active={active}
			className="ds__Chip"
			data-testid="Chip"
		>
			{avatar && (
				<span className="ds__Chip__avatar">
					<img src={avatar} alt="avatar" />
				</span>
			)}
			<span className="ds__Chip__label">{label}</span>
			{closable && avatarAlign !== "right" && (
				<span className="ds__Chip__close" onClick={onClick}>
					<CloseIcon />
				</span>
			)}
		</label>
	);
};

export default React.forwardRef<unknown, ChipProps>(Chip);

const CloseIcon = (props: { className?: string }) => {
	return (
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
				fill="#A1A1AA"
			/>
		</svg>
	);
};
