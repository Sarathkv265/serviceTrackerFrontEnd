import React, { useState } from 'react'
import { signinapi } from '../service/api'
import { useNavigate } from 'react-router-dom'

function Signin() {

    let [user,setUser]=useState({username:'', password:''})
    let navigate=useNavigate()

    async function handleSubmit(event){

        event.preventDefault()
        
        let response= await signinapi(user)
        console.log(response.data);
        

        if(response.status>199 && response.status<300){

            let token=response.data.token

            console.log(token);

            localStorage.setItem('token','Token '+token)
            navigate('Home/')
            
            
            
        }
        
        

    }
  return (
    <div>
      
      <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <form action="" onSubmit={handleSubmit} className='border border-3 shadow rounded p-3 mt-5'>
                                <h3 className='text-center my-3 fw-bold'>SignIn</h3>
                           
                            <div className="mb-3">
                                <label htmlFor="">Enter username</label>
                                <input className="form-control" type="text"
    
                                value={user.username}
                                onChange={(e)=>setUser({...user,username:e.target.value})}
                                />
                            </div>
      
                            <div className="mb-3">
                                <label htmlFor="">Password</label>
                                <input className="form-control" type="password" 
                                onChange={(e)=>setUser({...user,password:e.target.value})}
                                />
                            </div> 
                            <div className="mb-3">
                                <button type='submit'>Signin</button>
                            </div>
    
                        </form>
    
                    </div>
                    <div className="col-3"></div>
                </div>
    
            </div>



    </div>
  )
}

export default Signin

