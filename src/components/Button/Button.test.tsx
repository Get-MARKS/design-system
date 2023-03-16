// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

// describe("Test Component", () => {
// 	let props: ButtonProps;

// 	beforeEach(() => {
// 		props = {
// 			children: "Initial content",
// 		};
// 	});

// 	const renderComponent = () => render(<Button {...props} />);

// 	it("should render foo text correctly", () => {
// 		props.children = "Satyam was here";

// 		const { getByTestId } = renderComponent();
// 		const component = getByTestId("Button");

// 		expect(component).toHaveTextContent("Satyam was here");
// 	});
// });

describe("Button", () => {
	test("renders the Button component", () => {
		render(<Button children="Test Button" />);
	});
});
