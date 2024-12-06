import React, { useState } from 'react'
import { taskcreateapi } from '../service/api'

function Taskcreate({setRefresh}) {

  let [todo,setTodo]=useState({title:""})

  async function handlesubmit(event){
    event.preventDefault()

    let response=await taskcreateapi(todo)
    console.log(response.data);
    setTodo({...todo,title:""})
    setRefresh(response.data.id);
    
    
  }


  return (
    <div>
      
      <div className="container">

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <form action="" onSubmit={handlesubmit} className='border border-3 shadow rounded p-3 mt-5'>
            <h2 className='text-center'>TODO create</h2>
              <div className="mb-3">
                <label htmlFor=""  >Todo title</label>
                <input type="text" value={todo.title} onChange={e=>setTodo({...todo,title:e.target.value})} />
              </div>
              <div className="mb-3">
                <button type='submit' className='btn btn-success'>Add</button>
              </div>
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Taskcreate
