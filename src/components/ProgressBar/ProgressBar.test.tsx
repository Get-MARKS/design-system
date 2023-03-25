// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.types";

describe("ProgressBar", () => {
	test("renders the progress bar component", () => {
		render(<ProgressBar size={"small"} percentage={0} />);
	});
});
