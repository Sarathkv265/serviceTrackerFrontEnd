import React, { useState } from 'react'
import { signupapi } from '../service/api'

function Signup() {

    let [user,setUser]=useState({username:'', email:'', password1:'',password2:''})

   async function handlesubmit(event){
    event.preventDefault()
    let response=await signupapi(user)
    console.log(response.data);
    
    
   } 

    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <form action="" onSubmit={handlesubmit} className='border border-3 shadow rounded p-3 mt-5'>
                                <h3 className='text-center my-3 fw-bold'>SignUp</h3>
                           
                            <div className="mb-3">
                                <label htmlFor="">Enter username</label>
                                <input className="form-control" type="text"
    
                                value={user.username}
                                onChange={(e)=>setUser({...user,username:e.target.value})}
                                />
                            </div>
    
                            <div className="mb-3">
                                <label htmlFor="">Enter Email</label>
                                <input className="form-control" type="email"
                                onChange={(e)=>setUser({...user,email:e.target.value})}
                                />
                            </div>
    
                            <div className="mb-3">
                                <label htmlFor="">Password1</label>
                                <input className="form-control" type="password" 
                                onChange={(e)=>setUser({...user,password1:e.target.value})}
                                />
                            </div>
    
                            <div className="mb-3">
                                <label htmlFor="">Enter Password2</label>
                                <input className="form-control" type="password" 
                                onChange={(e)=>setUser({...user,password2:e.target.value})}
                                />
                            </div>
    
                            <div className="mb-3">
                                <button type='submit'>Register</button>
                            </div>
    
                        </form>
    
                    </div>
                    <div className="col-3"></div>
                </div>
    
            </div>
    
    
        </div>
      )
}

export default Signup
