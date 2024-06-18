import Welcome from '../conponents/Welcome'

type Props = {}

function Login({}: Props) {
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-slate-100'>
        <div className='w-96 h-full bg-white'>
            <Welcome/>
        </div>
    </div>
  )
}

export default Login