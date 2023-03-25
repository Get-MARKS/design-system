// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import Chip from "./Chip";
import { ChipProps } from "./Chip.types";

describe("Chip", () => {
	test("renders the Chip component", () => {
		render(
			<Chip
				label={""}
				active={false}
				onClick={function (event: React.MouseEvent<HTMLSpanElement, MouseEvent>): void {
					throw new Error("Function not implemented.");
				}}
			/>
		);
	});
});
