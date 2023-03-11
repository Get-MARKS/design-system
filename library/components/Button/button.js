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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { StyledButton } from "./styled";
export var ButtonPadding = {
    large: 30,
    medium: 25,
    small: 20,
};
export var Buttonheights = {
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
    return (_jsx(StyledButton, __assign({}, styles, { type: type, onClick: onClick, className: className, ref: ref }, { children: children })));
};
export default React.forwardRef(Button);
//# sourceMappingURL=button.js.map