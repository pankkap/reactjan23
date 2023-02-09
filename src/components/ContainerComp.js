import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PresentationComp from './PresentationComp';

export default function ContainerComp() {
    const[users, setUsers]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err))
    },[])
    console.log(users);
  return (
    <div>
      <PresentationComp users={users}/>
    </div>
  )
}
