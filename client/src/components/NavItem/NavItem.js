"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const NavItemStyle_1 = __importDefault(require("./NavItemStyle"));
const NavItem = ({ name, url, children }) => {
    return ((0, jsx_runtime_1.jsxs)(NavItemStyle_1.default, Object.assign({ to: url }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "icon" }, { children: children })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "text" }, { children: name }))] })));
};
exports.default = NavItem;
//# sourceMappingURL=NavItem.js.map