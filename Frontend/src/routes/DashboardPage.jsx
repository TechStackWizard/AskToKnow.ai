import RootLayout from "../layouts/RootLayout"
import { AiOutlineSend } from 'react-icons/ai';
import { CgAttachment } from 'react-icons/cg';


const DashboardPage = () => {
  return (
    <div className="dashboard-page flex flex-col items-center h-full gap-8">
      <div className="texts flex flex-col justify-center items-center grow gap-8 w-1/2">
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="logo" />
          <h1 className="logo-tittle text-3xl opacity-50">AskToKnow.ai</h1>
        </div>

        <div className="options flex items-center justify-between w-full gap-4">
          <div className="option flex flex-col gap-2 justify-center border-2 border-[#555] p-4 font-light rounded-2xl">
            <img src="/vite.svg" alt="logo" className="w-4 object-cover" />
            <p>Create a New Chat</p>
          </div>
          <div className="option flex flex-col gap-2 justify-center border-2 border-[#555] p-4 font-light rounded-2xl">
            <img src="/vite.svg" alt="logo" className="w-4 object-cover" />
            <p>Analysis Images</p>
          </div>
          <div className="option flex flex-col gap-2 justify-center border-2 border-[#555] p-4 font-light rounded-2xl">
            <img src="/vite.svg" alt="logo" className="w-4 object-cover" />
            <p>Help me with my Code</p>
          </div>
        </div>
      </div>


      <div className="formContainer flex  w-1/2 mt-auto ">
        <form className="input w-full flex items-center bg-gray-600 h-16 rounded-2xl mb-3 gap-5 px-4">
          <div className="attach p-2 cursor-pointer">
            <CgAttachment />
          </div>

          <input className=" p-4 outline-0 grow text-sm" placeholder="Ask me Something..." />
          <button className="send p-2 cursor-pointer ">
            <AiOutlineSend />
          </button>
        </form>
      </div>
    </div>

  )
}

export default DashboardPage