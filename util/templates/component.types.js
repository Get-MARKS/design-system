module.exports = (componentName) => ({
	content: `// Generated with util/create-component.js
  export interface ${componentName}Props {
      content: string;
  }
  `,
	extension: `.types.ts`,
});
