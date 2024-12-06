import React from 'react'
import Signup from './components/Signup'
import Signin from './components/Signin'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Taskcreate from './components/Taskcreate'
import Home from './components/Home'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Signin></Signin>}></Route>
        <Route path='register/' element={<Signup></Signup>}></Route>
        <Route path='Home/' element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>


      
    </div>
  )
}

export default App
