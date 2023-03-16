module.exports = (componentName) => ({
	content: `// Generated with util/create-component.js
  import { render } from "@testing-library/react";
  import React from "react";
  
  import ${componentName} from "./${componentName}";
  import { ${componentName}Props } from "./${componentName}.types";
  
  describe("Test Component", () => {
    let props: ${componentName}Props;
  
    beforeEach(() => {
      props = {
        content: "Initial content"
      };
    });
  
    const renderComponent = () => render(<${componentName} {...props} />);
  
    it("should render foo text correctly", () => {
      props.content = "Satyam was here";

      const { getByTestId } = renderComponent(); 
      const component = getByTestId("${componentName}");
  
      expect(component).toHaveTextContent("Satyam was here");
    });
  });
  `,
	extension: `.test.tsx`,
});
