// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox.types";

describe("Checkbox", () => {
	test("renders the Button component", () => {
		render(
			<Checkbox name="test" type="line" size="small" disabled={false} label="Test Checkbox" />
		);
	});
});
