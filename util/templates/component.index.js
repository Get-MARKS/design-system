module.exports = (componentName) => ({
	content: `// Generated with util/createComponent.js
    export { default } from "./${componentName}";
    `,
	extension: `.index.ts`,
});
