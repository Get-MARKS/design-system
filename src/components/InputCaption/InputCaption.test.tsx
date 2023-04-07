// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import InputCaption from "./InputCaption";
import { InputCaptionProps } from "./InputCaption.types";

describe("InputCaption", () => {
	test("renders the InputCaption component", () => {
		render(
			<InputCaption type={"passwordState"} size={"small"} passwordState={0} content={""} />
		);
	});
});
