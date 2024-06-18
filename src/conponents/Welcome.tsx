import { useNavigate } from 'react-router-dom'

type Props = {}

function Welcome({}: Props) {

  const nav = useNavigate()

  return (
    <div className='flex gap-5 justify-center items-center flex-col w-full h-full'>
        <img src='/cat.png'/>
        <button onClick={() => nav('/chat/pisou')} className='bg-amber-600 font-bold text-white'>Connect as <span className='font-bold text-xl ml-3'>Pisou</span></button>
        <button onClick={() => nav('/chat/belou')} className='bg-slate-600 font-bold text-white'>Connect as <span className='font-bold text-xl ml-3'>Belou</span></button>

        <a href='/app.debug.apk' download={true} className='font-bol'>download apk</a>
    </div>
  )
}

export default Welcome