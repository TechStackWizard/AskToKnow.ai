import { useEffect, useRef } from 'react'
import './ChatPage.css'
const ChatPage = () => {

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behaviour: "smooth" })
  }, [])

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Text message send by AI</div>
          <div className="message user">Text message send by User Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eos? Dignissimos nemo quis sapiente asperiores, quibusdam dolore odit fugit autem illo tenetur quae minima consequuntur, nostrum facere eum et velit!</div>
          <div className="message">Text message send by AI</div>
          <div className="message user">Text message send by User</div>
          <div className="message">Text message send by AI</div>
          <div className="message user">Text message send by User</div>
          <div className="message">Text message send by AI</div>
          <div className="message user">Text message send by User</div>
          <div className="message">Text message send by AI</div>
          <div className="message user">Text message send by User</div>
          <div className="message">Text message send by AI</div>
          <div className="message user">Text message send by User</div>
          <div className="message">Text message send by AI</div>
          <div className="message user">Text message send by User</div>
          <div className="message">Text message send by AI</div>
          <div className="message user">Text message send by User</div>
          <div className="message">Text message send by AI</div>
          <div className="message user">Text message send by User</div>
          <div ref={endRef}></div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage