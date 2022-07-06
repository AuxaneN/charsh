import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Message from "../Message/Message";
import { appStore } from "../../stores/appStore";
const Messages = () => {
    const { messages, clearMessage } = appStore((store) => store);
    return (_jsx(_Fragment, { children: Array.from(messages.keys()).map(key => _jsx(Message, { message: messages.get(key), deleteMessage: () => clearMessage(key) }, key)) }));
};
export default Messages;
//# sourceMappingURL=Messages.js.map