// Functional Approch to manage the state

import React, { useState } from 'react'

let counter = 0;

export default function StateDemo() {


    let [count, setCount] = useState(0);
    const [name, setname] = useState("no name")

    function incrementData(){
       setCount(count+1)
        // 1. Update state data
        // 2. Rerendering performed 
    }
    
    function decrementData(){
       setCount(count-1)
    }

    function customFun()
    {
        setCount(count+1)
        setname("Pankaj")
    }
  return (
    <div>
        <h2>Understanding the concept of state management using hook</h2>
        {/* <button className='btn btn-primary' onClick={decrementData}>-</button> */}
        <button className='btn btn-primary' onClick={()=>setCount(count-1)}>-</button>

        
        <h3>Count = {count}</h3>
        
        
        {/* <button className='btn btn-primary' onClick={incrementData}>+</button> */}
        <button className='btn btn-primary' onClick={customFun}>+</button>

        {name}
    </div>
  )
}
