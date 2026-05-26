import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
         <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<Signup/>}/>
                <Route path="/login"element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>
         </BrowserRouter>
    </div>
  )
}

export default App