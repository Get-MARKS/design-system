// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import ProgressRadial from "./ProgressRadial";
import { ProgressRadialProps } from "./ProgressRadial.types";

describe("ProgressRadial", () => {
	test("renders the progres component", () => {
		render(<ProgressRadial size={"small"} status={"default"} percentage={35} />);
	});
});
