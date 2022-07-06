"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const MessageStyle_1 = __importDefault(require("./MessageStyle"));
const react_1 = require("react");
const Message = ({ message, deleteMessage }) => {
    (0, react_1.useEffect)(() => {
        setTimeout(deleteMessage, 5000);
    }, []);
    return ((0, jsx_runtime_1.jsx)(MessageStyle_1.default, Object.assign({ onClick: deleteMessage }, { children: message })));
};
exports.default = Message;
//# sourceMappingURL=Message.js.map