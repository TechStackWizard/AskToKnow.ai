import React, { useEffect, useRef } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { CgAttachment } from 'react-icons/cg'

const NewPrompt = () => {

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current.scrollIntoView({ behaviour: "smooth" })
    }, [])

    return (
        <>
            {/* Add new chat */}
            Test
            <div className="endChat pb-20" ref={endRef}></div>
            <form action="" className='w-1/2 flex items-center bg-gray-600 h-16 rounded-2xl mb-3 gap-5 px-4 absolute bottom-0'>
                <label htmlFor="file" className='attach p-2 cursor-pointer'>
                    <CgAttachment />
                </label>
                <input type="file" name="file" id="file" multiple={false} hidden />
                <input className='p-4 outline-0 grow text-sm' placeholder='Ask me Something...' />
                <button className='send p-2 cursor-pointer'><AiOutlineSend /></button>

            </form>
        </>
    )
}

export default NewPrompt