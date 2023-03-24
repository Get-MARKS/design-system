// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

describe("Dropdown", () => {
	test("renders the Dropdown component", () => {
		render(
			<Dropdown
				options={[
					{ label: "item 1", onClick: () => {} },
					{ label: "item 2", onClick: () => {} },
				]}
			/>
		);
	});
});
