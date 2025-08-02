import React from 'react'
import { Link } from 'react-router-dom'

const ChatList = () => {
    return (

        <div className="chatList h-full flex flex-col bg-black px-2">
            <span className='text-sm font-bold my-1.5'>DASHBOARD</span>
            <Link to={'/dashboard'} className="new hover:bg-gray-600 rounded p-1.5">Create a new chat</Link>
            <Link to={'/'} className="explore hover:bg-gray-600 rounded p-1.5">Explore AskToKnow.ai</Link>
            <Link to={'/'} className="contact hover:bg-gray-600 rounded p-1.5">Contact</Link>
            <hr className='border-0 h-0.5 opacity-35 bg-[#ddd] rounded my-2.5' />

            <span className='text-sm font-bold mb-1.5'>Recent Chats</span>
            <div className="list flex flex-col overflow-y-auto">
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>
                <Link to='/' className=' hover:bg-gray-600 rounded p-1.5'>My Chat Title</Link>

            </div>
            <hr className='border-0 h-0.5 opacity-35 bg-[#ddd] rounded my-2.5' />

            <div className="upgrade flex gap-2 justify-center items-center mt-auto mb-2 grow shrink">
                <img src="/vite.svg" alt="logo" />
                <div className="texts flex flex-col ">
                    <span >Upgrade to AskToKnow.ai</span>
                    <span className='text-xs text-gray-400'>Get unlimited access to all features</span>
                </div>
            </div>
        </div>

    )
}

export default ChatList