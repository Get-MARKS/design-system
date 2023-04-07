// // Generated with util/createComponent.js
// import React, { useState, useRef, useEffect } from "react";
// import { usePopper } from "react-popper";

import React, { useState, useRef, useEffect } from "react";
import { createPopper, Placement } from "@popperjs/core";

import { SelectProps, OptionProps } from "./Select.types";

import "./Select.scss";
import Input from "../Input";

const Select = (props: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const buttonRef = useRef<HTMLDivElement>(null);
	const popperRef = useRef<HTMLUListElement>(null);
	const [placement, setPlacement] = useState<Placement>("bottom-start");

	const {
		selectedOption,
		onSelect,
		options,
		onChange,
		searchable,
		name,
		title,
		label,
		leftIcon,
		leftIconLoc,
		placeholder,
		required,
		disabled,
	} = props;

	useEffect(() => {
		const button = buttonRef.current;
		const popper = popperRef.current;

		if (!button || !popper) {
			return;
		}

		const updatePlacement = () => {
			const buttonPosition = button.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const spaceBelow = windowHeight - buttonPosition.bottom;
			const spaceAbove = buttonPosition.top;
			const maxHeight = Math.max(spaceAbove, spaceBelow) - 20;
			popper.style.maxHeight = `${maxHeight}px`;

			if (spaceBelow >= popper.offsetHeight || spaceBelow >= spaceAbove) {
				setPlacement("bottom-start");
			} else {
				setPlacement("top-start");
			}
		};

		const popperInstance = createPopper(button, popper, {
			placement,
			modifiers: [
				{
					name: "flip",
					enabled: true,
				},
				{
					name: "preventOverflow",
					enabled: true,
					options: {
						boundary: "viewport",
					},
				},
			],
		});

		updatePlacement();
		popperInstance.update();
		window.addEventListener("scroll", updatePlacement);

		return () => {
			popperInstance.destroy();
			window.removeEventListener("scroll", updatePlacement);
		};
	}, [isOpen, placement]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event: MouseEvent) => {
		const target = event.target as HTMLElement | null;

		if (
			popperRef.current &&
			target &&
			!popperRef.current.contains(target) &&
			target !== buttonRef.current
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleSelect = (option: OptionProps) => {
		onSelect(option);
		setIsOpen(false);
	};

	return (
		<div className="ds__Select" data-testid="Select">
			<Input
				name={name}
				type={"text"}
				label={label}
				ref={buttonRef}
				title={title}
				disabled={disabled}
				required={required}
				leftIcon={leftIcon}
				onChange={onChange}
				readOnly={!searchable}
				onFocus={toggleDropdown}
				leftIconLoc={leftIconLoc}
				placeholder={placeholder}
				value={selectedOption?.label}
				rightIcon={isOpen ? <UpArrow /> : <DownArrow />}
			/>
			{isOpen && (
				<ul
					ref={popperRef}
					className="ds__Select__dropdown"
					style={{ position: "absolute" }}
					data-placement={placement}
				>
					{options?.map((option, idx) => (
						<li
							key={idx}
							value={option?.value}
							className="ds__Select__item"
							onClick={() => handleSelect(option)}
							data-active={selectedOption?.value === option?.value}
						>
							<p className="ds__item__label">{option?.label}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Select;

const DownArrow = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12 14.5358L17.2788 9.29285C17.6725 8.90238 18.3109 8.90238 18.7047 9.29285C19.0984 9.68331 19.0984 10.3164 18.7047 10.7068L12.7131 16.6567C12.3192 17.0473 11.6807 17.0473 11.2869 16.6567L5.29532 10.7068C4.90156 10.3164 4.90156 9.68331 5.29532 9.29285C5.68907 8.90238 6.32748 8.90238 6.72124 9.29285L12 14.5358Z"
			fill="#A1A1AA"
		/>
	</svg>
);

const UpArrow = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M5 12.5L10 7.5L15 12.5"
			stroke="#344256"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
