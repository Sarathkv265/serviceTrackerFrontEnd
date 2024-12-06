import React, { useState } from 'react'
import Taskcreate from './Taskcreate'
import Tasklist from './Tasklist'
import Logout from './Logout'

function Home() {

  let [refresh,setRefresh]=useState(0)
  return (
    <div>
      <Logout></Logout>
      <Taskcreate setRefresh={setRefresh}></Taskcreate>
      <Tasklist refresh={refresh}></Tasklist>
    </div>
  )
}

export default Home
