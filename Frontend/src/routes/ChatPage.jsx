import { useEffect, useRef } from 'react'
import './ChatPage.css'
import NewPrompt from '../component/NewPrompt';
const ChatPage = () => {



  return (
    <div className="chatPage flex flex-col items-center h-full relative">
      <div className="wrapper grow overflow-y-auto w-full flex justify-center">
        <div className="chat flex flex-col w-1/2 gap-4">
          <div className="message">Text message send by AI</div>
          <div className="message user">Text message send by User Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis illum autem iusto architecto, repellendus culpa harum natus aut ut enim cum repudiandae ullam aperiam dolorum ipsa, provident minima ea molestiae?</div>
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
          <div className="message">Text message send by AI</div>
          <div className="message user">Text message send by User</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  )
}

export default ChatPage