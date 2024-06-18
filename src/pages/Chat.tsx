import { onValue, ref, set } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { db } from '../firebase/init'
import MessageItem from '../conponents/MessageItem'

export type Message = { id: string, content: string, to: 'belou' | 'pisou', date: string }
type Props = {}

function trierParDate(tableau: Message[]): Message[] {
  return tableau.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateA.getTime() - dateB.getTime();
  });
}

function Chat({ }: Props) {

  const { forr } = useParams() as { forr: 'belou' | 'pisou' }
  const nav = useNavigate()

  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val()

      if (data) {
        setMessages(Object.values(data))
      }
    })
  }, [])

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const uuid = Date.now()

    const date = new Date()

    const message = {
      id: uuid,
      content: form.get('content'),
      to: forr === 'belou' ? 'pisou' : 'belou',
      date: `${date.toDateString()} ${date.getHours()}:${date.getMinutes()}`
    }

    e.currentTarget.reset()
    set(ref(db, `/${uuid}`), message)
  }

  return (
    <div className="flex flex-col justify-between w-screen h-screen pb-5">
      <div className="flex items-center justify-between w-full h-16 bg-slate-100 shadow-xl py-2">
        <div className="flex items-center w-max h-full">
          <img src="/cat.png" alt="" className="w-auto h-full" />
          <div className="font-bold">{forr.toUpperCase()}</div>
        </div>
        <button onClick={() => nav('/login')} className="text-sm">back {">"}</button>
      </div>

      <div className='flex flex-1 flex-col p-3 gap-5 overflow-auto'>
        {
          messages.map(message => <MessageItem message={message} key={message.id} />)
        }
      </div>

      <form onSubmit={send} className="flex justify-between w-full p-3">
        <textarea placeholder='write here' name="content" id="" rows={1} className="w-[75%] h-full border px-3 py-1 text-lg resize-none" required />
        <button type='submit' className='bg-slate-500 font-bold text-white rounded-2xl'>send</button>
      </form>

    </div>
  )
}

export default Chat