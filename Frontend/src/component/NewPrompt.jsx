import React, { useEffect, useRef } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { CgAttachment } from 'react-icons/cg'
import Upload from './Upload';
import { use } from 'react';
import { useState } from 'react';
import { IKImage } from 'imagekitio-react';

const NewPrompt = () => {

    const endRef = useRef(null);
    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {}
    });

    useEffect(() => {
        endRef.current.scrollIntoView({ behaviour: "smooth" })
    }, [])

    return (
        <>
            {/* Add new chat */}
            {img.isLoading && <div className='w-full h-full flex justify-center items-center'>Loading...</div>}
            {img.dbData?.filePath && (
                <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                    path={img.dbData?.filePath}
                    transformation={[{ height: "300", width: "300", objectFit: "cover" }]}
                />
            )}
            <div className="endChat pb-20" ref={endRef}></div>
            <form action="" className='w-1/2 flex items-center bg-gray-600 h-16 rounded-2xl mb-3 gap-5 px-4 absolute bottom-0'>
                <label htmlFor="file" className='attach p-2 cursor-pointer'>
                    <Upload setImg={setImg}>
                        <CgAttachment />
                    </Upload>
                </label>
                <input type="file" name="file" id="file" multiple={false} hidden />
                <input className='p-4 outline-0 grow text-sm' placeholder='Ask me Something...' />
                <button className='send p-2 cursor-pointer'><AiOutlineSend /></button>

            </form>
        </>
    )
}

export default NewPrompt