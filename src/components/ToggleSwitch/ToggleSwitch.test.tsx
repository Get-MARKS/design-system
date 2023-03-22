// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import ToggleSwitch from "./ToggleSwitch";
import { ToggleSwitchProps } from "./ToggleSwitch.types";

describe("ToggleSwitch", () => {
	test("renders the toggle switch component", () => {
		render(<ToggleSwitch name="test" size="small" disabled={false} label="Test Switch" />);
	});
});
