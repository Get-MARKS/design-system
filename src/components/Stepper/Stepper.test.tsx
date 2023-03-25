// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import Stepper from "./Stepper";
import { StepperProps } from "./Stepper.types";

describe("Stepper", () => {
	test("renders the stepper component", () => {
		render(<Stepper status={"complete"} />);
	});
});
