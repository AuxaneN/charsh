import MessageStyle from "./MessageStyle"
import {useEffect} from "react"

interface IProps {
message: string | undefined
deleteMessage: () => void
}

const Message = ({ message, deleteMessage }:IProps) => {
  useEffect(()=> {
    setTimeout(
      deleteMessage
      ,5000
    )
  }, [])

  return (
    <MessageStyle
    onClick={deleteMessage}
    >
    {message}
    </MessageStyle>
  )
}

export default Message
