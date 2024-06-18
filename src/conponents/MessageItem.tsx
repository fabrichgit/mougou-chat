import React from 'react'
import { Message } from '../pages/Chat'
import { useParams } from 'react-router-dom'

type Props = {
    message: Message
}

function MessageItem({ message }: Props) {

    const { forr } = useParams() as { forr: 'belou' | 'pisou' }

    return (
        <div className={`flex w-full h-max ${forr !== message.to ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex flex-col gap-1 w-max max-w-[40%] ${forr !== message.to ? 'items-end' : 'items-start'}`}>
                <div className={`w-max py-2 px-3 rounded-xl ${forr !== message.to ? 'bg-amber-600/80 text-white shadow-lg' : 'bg-white shadow-md'}`}>
                    {message.content}
                </div>
                <i className='text-xs'>{message.date}</i>
            </div>
        </div>
    )
}

export default MessageItem