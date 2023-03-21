// Generated with util/create-component.js
  import { render } from "@testing-library/react";
  import React from "react";
  
  import Checkbox from "./Checkbox";
  import { CheckboxProps } from "./Checkbox.types";
  
  describe("Test Component", () => {
    let props: CheckboxProps;
  
    beforeEach(() => {
      props = {
        content: "Initial content"
      };
    });
  
    const renderComponent = () => render(<Checkbox {...props} />);
  
    it("should render foo text correctly", () => {
      props.content = "Satyam was here";

      const { getByTestId } = renderComponent(); 
      const component = getByTestId("Checkbox");
  
      expect(component).toHaveTextContent("Satyam was here");
    });
  });
  