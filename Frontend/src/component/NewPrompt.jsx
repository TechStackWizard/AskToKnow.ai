import React, { useEffect, useRef } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { CgAttachment } from 'react-icons/cg'
import Upload from './Upload';
import { use } from 'react';
import { useState } from 'react';
import { IKImage } from 'imagekitio-react';
import './newPrompt.css';
import models from '../lib/gemini';
import ReactMarkdown from 'react-markdown';
import { GoogleGenAI } from '@google/genai';
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewPrompt = ({ data }) => {

    const [answer, setAnswer] = useState("")
    const [question, setQuestion] = useState('')

    const endRef = useRef(null);


    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {}

    });
    const ai = new GoogleGenAI({ apiKey: `${import.meta.env.VITE_GEMINI_API_KEY}` });

    const safetySettings = [
        {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_LOW_AND_ABOVE",
        },
        {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_LOW_AND_ABOVE",
        },
    ];

    const chat = ai.chats.create({
        model: "gemini-2.5-flash",
        history: [
            {
                role: "user",
                parts: [{ text: "Hello" }],
            },
            {
                role: "model",
                parts: [{ text: "Great to meet you. What would you like to know?" }],
            },
        ],
        generatioinConfig: {
            safetySettings: safetySettings,
            // maxOutputTokens: 500,
        },
    });



    useEffect(() => {
        endRef.current.scrollIntoView({ behaviour: "smooth" })
    }, [data, question, answer, img])


    const queryClient = useQueryClient();


    const mutation = useMutation({
        mutationFn: () => {
            return fetch(`${import.meta.env.VITE_ENDPOINT_URL}/api/chat/${data._id}`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question: question.length ? question : undefined, answer, img: img.dbData?.filePath || undefined }),
            }).then((res) => res.json());
        },
        onSuccess: (id) => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["chat", data._id] }).then(() => {
                setQuestion("")
                setAnswer("")
                setImg({
                    isLoading: false,
                    error: "",
                    dbData: {},
                    aiData: {}
                })
            });
        },

        onError: (err) => {
            console.log(err)
        }
    });

    const add = async (text, isInitial) => {
        if (!isInitial) setQuestion(text);

        try {
            const response = await chat.sendMessageStream({
                message: text,
            });
            let accumulator = "";
            for await (const chunk of response) {
                accumulator += chunk.text;
                setAnswer(accumulator);
            }

            mutation.mutate();
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const text = e.target.text.value;
        if (!text) return;

        add(text, false);
        e.target.text.value = "";
    }

    const hasRun = useRef(false);
    useEffect(() => {
        if (!hasRun.current) {
            if (data?.history?.length === 1) {
                add(data.history[0].parts[0].text, true)
            }
        }
        hasRun.current = true;
    }, [])



    return (
        <>
            {/* Add new chat */}
            {img.isLoading && <div className='w-full h-full flex justify-center items-center'>Loading...</div>}
            {img.dbData?.filePath && (
                <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                    path={img.dbData?.filePath}
                    width={300}
                    alignSelf="flex-end"
                    transformation={[{ height: "300", width: "300", objectFit: "cover" }]}
                />
            )}

            {question && <div className='message user'>{question}</div>}
            {answer && <div className='message'><ReactMarkdown>{answer}</ReactMarkdown></div>}
            <div className="endChat pb-20" ref={endRef}></div>
            <form action="" className='newForm bg-gray-600 justify-between rounded-2xl mb-2.5 h-16' onSubmit={handleSubmit} ref={hasRun}>
                <label htmlFor="file" className='attach p-2 cursor-pointer flex justify-center items-center'>
                    <Upload setImg={setImg} />
                </label>
                <input type="file" name="file" id="file" multiple={false} hidden />
                <input placeholder='Ask me Something...' name='text' className='bg-transparent' />
                <button className='send p-2 cursor-pointer'><AiOutlineSend /></button>
            </form>
        </>
    )
}

export default NewPrompt