import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 grow h-full">

      <div className="left w-[80%] md:w-1/2 h-full flex flex-col justify-center items-center grow text-center relative gap-4 ">
        <img src="/orbital.png" alt="" className="orbital absolute top-0 left-0 opacity-10 h-[90%]" />
        <h1 className="logo-tittle mt-[40px] md:m-[0px] text-5xl md:text-6xl">AskToKnow.ai</h1>
        <h2 className="font-bold">Supercharge Your Creativity and Productivity.</h2>
        <h3 className="text-center text-[13px] w-[90%] md:w-[70%] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi ratione laboriosam error. Unde eligendi consectetur libero!</h3>
        <button className="bg-[#27D1B2] hover:bg-[#9827D1] px-6 py-1 mt-3 rounded-2xl font-bold">
          <Link to="/dashboard">
            Get Started
          </Link>
        </button>
      </div>

      <div className="rigth w-[80%] md:w-1/2 grow h-full flex justify-center items-center">
        <div className="imgContainer border-2 w-[80%] h-[60%] rounded-2xl flex justify-center items-center relative">
          <div className="bgContainer h-full w-full overflow-hidden top-0 left-0 rounded-2xl absolute">
            <div className="bg w-full h-full"></div>
          </div>
          <img src="/bot.png" alt="" className="bot w-full h-full object-contain " />
        </div>

      </div>

      <div className="terms md:absolute bottom-0 bg-amber-300 w-full flex flex-col items-center justify-center py-2">
        <img src="" alt="logo" />
        <div className="links flex gap-2.5 hover:underline-offset-2 font-bold ">
          <Link className="hover:underline">Terms of Services</Link> |
          <Link className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage