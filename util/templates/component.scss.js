module.exports = (componentName) => ({
	content: `// Generated with util/create-component.js
  @import "../../global.scss";
  
  .ds__${componentName} {
    position: relative;
  }
  `,
	extension: `.scss`,
});
