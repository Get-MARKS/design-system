const componentStories = require("./component.stories");
const componentTypes = require("./component.types");
const componentStyles = require("./component.scss");
const componentIndex = require("./component.index");
const componentTests = require("./component.test");
const componentMain = require("./component.main");

module.exports = [
	componentMain,
	componentIndex,
	componentTypes,
	componentTests,
	componentStyles,
	componentStories,
];
