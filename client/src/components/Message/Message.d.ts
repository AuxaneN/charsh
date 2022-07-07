interface IProps {
    message: string | undefined;
    deleteMessage: () => void;
}
declare const Message: ({ message, deleteMessage }: IProps) => JSX.Element;
export default Message;
