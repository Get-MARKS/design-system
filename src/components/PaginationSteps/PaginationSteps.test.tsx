// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import PaginationSteps from "./PaginationSteps";
import { PaginationStepsProps } from "./PaginationSteps.types";

describe("PaginationSteps", () => {
	test("renders the PaginationSteps component", () => {
		render(<PaginationSteps currentStep={3} totalSteps={10} />);
	});
});
