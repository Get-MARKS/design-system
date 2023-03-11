var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { ButtonPadding, Buttonheights } from "./button";
var variables = {
    primary: {
        regular: {
            bg: '#d93848',
            color: "white"
        },
        hover: {
            bg: '#eb4d5d',
            color: "black"
        },
    },
    secondary: {
        regular: {
            bg: 'transparent',
            color: "black"
        },
        hover: {
            bg: '#dbdbdb',
            color: "black"
        },
    },
    ternary: {
        regular: {
            bg: '#000',
            color: "#fff"
        },
        hover: {
            bg: '#3d3d3d',
            color: "#000"
        },
    }
};
/* Real tag is assigned dynamically */
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    /* Add margin in case of loading or icon */\n    & > *:nth-child(1) {\n        margin-left: ", "px;\n    }\n    font-size: 15px;\n\n    border: none;\n    cursor: pointer;\n    background-color: ", ";\n    color: ", ";\n    padding: 0 ", "px;\n    height: ", "px;\n    ", "\n    border-radius: 0;\n    outline: none;\n\n    &:focus {\n        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ", ";\n    }\n    &:hover {\n        background-color: ", ";\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    /* Add margin in case of loading or icon */\n    & > *:nth-child(1) {\n        margin-left: ", "px;\n    }\n    font-size: 15px;\n\n    border: none;\n    cursor: pointer;\n    background-color: ", ";\n    color: ", ";\n    padding: 0 ", "px;\n    height: ", "px;\n    ", "\n    border-radius: 0;\n    outline: none;\n\n    &:focus {\n        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ", ";\n    }\n    &:hover {\n        background-color: ", ";\n    }\n"])), function (pr) { return pr.withText ? 7 : 0; }, function (pr) { return variables[pr.varient].regular.bg; }, function (pr) { return variables[pr.varient].regular.color; }, function (pr) { return ButtonPadding[pr.size]; }, function (pr) { return Buttonheights[pr.size]; }, function (pr) { return pr.disabled ? "\n        background-color: #a6a6a6;\n        color: #5e5e5e;\n        cursor: not-allowed;\n\n        &:hover {\n            background-color: #a6a6a6 !important;\n            color: #5e5e5e !important;\n        }\n    " : ''; }, function (pr) { return variables[pr.varient].regular.bg; }, function (pr) { return variables[pr.varient].hover.bg; });
var templateObject_1;
//# sourceMappingURL=styled.js.map