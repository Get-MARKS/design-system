module.exports = (componentName) => ({
	content: `// Generated with util/create-component.js
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  import React from "react";
  
  import ${componentName} from "./${componentName}";
  
  export default {
	  component: ${componentName},
	  title: "Components/${componentName}",
  } as ComponentMeta<typeof ${componentName}>;

  const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;
  
  export const Default${componentName} = Template.bind({});
  Default${componentName}.args = {
    content: "Testing with Satyam"
  };

  `,
	extension: `.stories.tsx`,
});
