import { jsx as _jsx } from "react/jsx-runtime";
import MessageStyle from "./MessageStyle";
import { useEffect } from "react";
const Message = ({ message, deleteMessage }) => {
    useEffect(() => {
        setTimeout(deleteMessage, 5000);
    }, []);
    return (_jsx(MessageStyle, Object.assign({ onClick: deleteMessage }, { children: message })));
};
export default Message;
//# sourceMappingURL=Message.js.map