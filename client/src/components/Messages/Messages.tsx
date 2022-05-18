import Message from "../Message/Message"

import {appStore} from "../../stores/appStore"

const Messages = () => {
  const {messages, clearMessage} = appStore((store) => store)

  return (
    <>
    {
      Array.from(messages.keys()).map(key =>
        <Message
          message={messages.get(key)}
          deleteMessage={() => clearMessage(key)}
          key={key}
         />)
    }
    </>
  )
}

export default Messages
