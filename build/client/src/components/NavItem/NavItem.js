import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NavItemStyle from "./NavItemStyle";
const NavItem = ({ name, url, children }) => {
    return (_jsxs(NavItemStyle, Object.assign({ to: url }, { children: [_jsx("span", Object.assign({ className: "icon" }, { children: children })), _jsx("span", Object.assign({ className: "text" }, { children: name }))] })));
};
export default NavItem;
//# sourceMappingURL=NavItem.js.map