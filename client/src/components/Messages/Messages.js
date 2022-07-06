"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Message_1 = __importDefault(require("../Message/Message"));
const appStore_1 = require("../../stores/appStore");
const Messages = () => {
    const { messages, clearMessage } = (0, appStore_1.appStore)((store) => store);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: Array.from(messages.keys()).map(key => (0, jsx_runtime_1.jsx)(Message_1.default, { message: messages.get(key), deleteMessage: () => clearMessage(key) }, key)) }));
};
exports.default = Messages;
//# sourceMappingURL=Messages.js.map