import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    let navigate=useNavigate()
    function handleclick(){
        localStorage.clear()
        navigate('/')
    }
  return (
    <div>
      <button onClick={handleclick}>LogOut</button>
    </div>
  )
}

export default Logout
