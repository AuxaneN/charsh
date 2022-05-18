interface IProps {
message: string | undefined
deleteMessage: () => void
}

const Message = ({ message, deleteMessage }:IProps) => {
  return (
    <div
    className=""
    onClick={deleteMessage}>
    {message}
    </div>
  )
}

export default Message
