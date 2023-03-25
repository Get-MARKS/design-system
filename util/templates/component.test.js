module.exports = (componentName) => ({
	content: `// Generated with util/create-component.js
  import { render } from "@testing-library/react";
  import React from "react";
  
  import ${componentName} from "./${componentName}";
  import { ${componentName}Props } from "./${componentName}.types";
  
  describe("${componentName}", () => {
    test("renders the ${componentName} component", () => {
      render(<${componentName} />);
    });
  });
  `,
	extension: `.test.tsx`,
});
