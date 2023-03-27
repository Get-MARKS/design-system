// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbsProps } from "./Breadcrumbs.types";

describe("Breadcrumbs", () => {
	test("renders the Breadcrumbs component", () => {
		render(<Breadcrumbs content={["Item 1"]} />);
	});
});
