import React, { useState } from 'react'

export default function StateObject() {
    const [name, setname] = useState({firstName:"", lastName:""})
  return (
    <div>
        <h2>State Management with Object Data</h2>
        <label htmlFor="">First Name:</label>
        {/* <input type="text" onChange={(e)=>console.log(e.target.value)}/> */}

        <input type="text" onChange={(e)=>setname({...name, firstName:e.target.value})}/>
        <br />
        
        <br />
        <label htmlFor="">Last Name:</label>
        <input type="text" onChange={(e)=>setname({...name,lastName:e.target.value})}/>
        <hr />
        <h3>{name.firstName} {name.lastName}</h3>
        
    </div>
  )
}
