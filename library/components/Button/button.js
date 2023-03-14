"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buttonheights = exports.ButtonPadding = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var styled_1 = require("./styled");
exports.ButtonPadding = {
    large: 30,
    medium: 25,
    small: 20,
};
exports.Buttonheights = {
    large: 55,
    medium: 45,
    small: 35,
};
var Button = function (props, ref) {
    var onClick = props.onClick, children = props.children, className = props.className, isDisabled = props.isDisabled, _a = props.type, type = _a === void 0 ? "button" : _a, _b = props.size, size = _b === void 0 ? "medium" : _b, _c = props.varient, varient = _c === void 0 ? "primary" : _c;
    var styles = {
        size: size,
        varient: varient,
        disabled: isDisabled,
        withText: children != null,
    };
    return ((0, jsx_runtime_1.jsx)(styled_1.StyledButton, __assign({}, styles, { type: type, onClick: onClick, className: className, ref: ref }, { children: children })));
};
exports.default = react_1.default.forwardRef(Button);
//# sourceMappingURL=button.js.map