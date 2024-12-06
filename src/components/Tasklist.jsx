import React, { useEffect, useState } from 'react'
import { taskdeleteapi, tasklistapi, taskupdateapi } from '../service/api'

function Tasklist({refresh}) {
  let [todo, setTodo] = useState()

  useEffect(() => { fetchTasklist() }, [refresh])

  async function fetchTasklist() {
    let response = await tasklistapi()

    // console.log(response.data);
    setTodo(response.data);

    

  }
  async function handledelete(id) {

    let response = await taskdeleteapi(id)

    fetchTasklist()

  }
  async function handleupdate(id){
    let response =await taskupdateapi(id)
    fetchTasklist()
  }
  return (
    <div>
      {todo && todo.map((t, i) => (
        <div className='border rounded p-2'>{t.title} {t.status ? "completed" : "pending"}
          <div>
            <button onClick={() =>handledelete(t.id)} className='btn btn-danger'>DELETE</button>
            <button onClick={()=>handleupdate(t.id)} className='btn btn-warning'>Update</button>
          </div>
          
        </div>

      ))}

    </div>
  )
}

export default Tasklist
