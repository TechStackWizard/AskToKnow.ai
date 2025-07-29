import RootLayout from "../layouts/RootLayout"
import { AiOutlineSend } from 'react-icons/ai';
import { CgAttachment } from 'react-icons/cg';


const DashboardPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-8">
      <div className="texts flex flex-col justify-center items-center flex-[1] gap-8 w-2/3">
        <div className="flex justify-center items-center gap-2">
          <img src="/vite.svg" alt="logo" />
          <h1 className="logo-tittle text-3xl">AskToKnow.ai</h1>
        </div>

        <div className="flex  gap-8">
          <div className="part w-fit border-2 border-[#ddd] p-4 flex flex-col justify-start rounded-2xl  gap-2">
            <img src="/vite.svg" alt="logo" className="w-4" />
            <p>Create a New Chat</p>
          </div>
          <div className="part w-fit border-2 border-[#ddd] p-4 flex flex-col justify-start rounded-2xl  gap-2">
            <img src="/vite.svg" alt="logo" className="w-4" />
            <p>Analysis Images</p>
          </div>
          <div className="part w-fit border-2 border-[#ddd] p-4 flex flex-col justify-start rounded-2xl  gap-2">
            <img src="/vite.svg" alt="logo" className="w-4" />
            <p>Help me with my Code</p>
          </div>
        </div>
      </div>


      <form className="formContainer flex justify-center w-1/2 mt-auto mb-3">
        <div className="input w-full bg-gray-600 flex px-4 justify-between items-center h-12 rounded-2xl">
          <div className="attach bg-black p-2 cursor-pointer">
            <CgAttachment />
          </div>

          <input className=" px-2 outline-0 flex-[1] text-sm" placeholder="Ask me Something..." />
          <button className="send bg-black p-2 cursor-pointer">
            <AiOutlineSend />
          </button>
        </div>
      </form>
    </div>

  )
}

export default DashboardPage