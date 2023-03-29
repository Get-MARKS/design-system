// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import PaginationNumeric from "./PaginationNumeric";
import { PaginationNumericProps } from "./PaginationNumeric.types";

describe("PaginationNumeric", () => {
	test("renders the PaginationNumeric component", () => {
		render(<PaginationNumeric currentPage={50} totalPages={100} />);
	});
});
