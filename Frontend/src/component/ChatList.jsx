import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'

const ChatList = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['userChats'],
        queryFn: async () =>
            await fetch(`${import.meta.env.VITE_ENDPOINT_URL}/api/userchats`, {
                credentials: 'include',
            }).then((res) =>
                res.json(),
            ),
    })



    return (

        <div className="chatList h-full flex flex-col bg-black px-2">
            <span className='text-sm font-bold my-1.5'>DASHBOARD</span>
            <Link to={'/dashboard'} className="new hover:bg-gray-600 rounded p-1.5">Create a new chat</Link>
            <Link to={'/'} className="explore hover:bg-gray-600 rounded p-1.5">Explore AskToKnow.ai</Link>
            <Link to={'/'} className="contact hover:bg-gray-600 rounded p-1.5">Contact</Link>
            <hr className='border-0 h-0.5 opacity-35 bg-[#ddd] rounded my-2.5' />

            <span className='text-sm font-bold mb-1.5'>Recent Chats</span>
            <div className="list flex flex-col overflow-y-auto grow">
                {isPending ? "Loading..." : error ? "Something went wrong!" : data?.map((chat) => (
                    <Link to={`/dashboard/chats/${chat._id}`} className=' hover:bg-gray-600 rounded p-1.5' key={chat._id}>{chat.title}</Link>
                ))}



            </div>
            <hr className='border-0 h-0.5 opacity-35 bg-[#ddd] rounded my-2.5' />

            <div className="upgrade flex gap-2 justify-center items-center mt-auto mb-2 w-max ">
                <img src="/vite.svg" alt="logo" />
                <div className="texts flex flex-col text-center">
                    <span >Upgrade to AskToKnow.ai</span>
                    <span className='text-xs text-gray-400'>Get unlimited access to all features</span>
                </div>
            </div>
        </div>

    )
}

export default ChatList