// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import Tooltip from "./Tooltip";
import { TooltipProps } from "./Tooltip.types";

describe("Tooltip", () => {
	test("renders the tooltip component", () => {
		render(<Tooltip content="Test content" direction="bottom" placement="center" />);
	});
});
