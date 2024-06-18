import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Chat from './pages/Chat'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/chat/:forr' element={<Chat/>}/>
    </Routes>
  )
}

export default App
