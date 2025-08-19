import { useEffect, useRef } from 'react'
import './ChatPage.css'
import NewPrompt from '../component/NewPrompt';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import Markdown from 'react-markdown';

const ChatPage = () => {
  const path = useLocation().pathname;
  const chatId = path.split('/').pop();
  // console.log(chatId)


  const { isPending, error, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () =>
      await fetch(`${import.meta.env.VITE_ENDPOINT_URL}/api/chat/${chatId}`, {
        credentials: 'include',
      }).then((res) =>
        res.json(),
      ),
  })



  return (
    <div className="chatPage flex flex-col items-center h-full relative">
      <div className="wrapper grow overflow-y-auto w-full flex justify-center">
        <div className="chat flex flex-col w-1/2 gap-4">

          {isPending ? "Loading..." : error ? "Something went wrong!" : data?.history?.map((message, i) => (
            <>
              {message.img && (
                <IKImage
                  urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                  path={message.img}
                  height="300"
                  width="400"
                  transformation={[{ height: 300, width: 400 }]}
                  loading="lazy"
                  lqip={{ active: true, quality: 20 }}
                />
              )}
              <div className={message.role === 'user' ? 'message user' : 'message'} key={message._id}>
                <Markdown>{message.parts[0].text}</Markdown>
              </div>

            </>

          ))}
          {data && <NewPrompt data={data} />}
        </div>
      </div>
    </div>
  )
}

export default ChatPage