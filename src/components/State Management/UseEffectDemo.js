import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {

    const[count, setCount]=useState(0);
    const[name, setName]=useState("");
    

    useEffect(()=>{
        document.title = `You Clicked ${count} times`
        console.log("UseEffect Called");
    },[]);
    
    //1. []: If it not present:=> UseEffect will be called every time when any state change
    //2. []: If it is Present:=>  UseEffect will be called only Once [Behaved like componentdidMount()]
    //3. [count]: If any state varaible is Present:=>  UseEffect will be called every time when count state change

  return (
    <div>
      <h2>UseEffect() Hook Demo</h2>
      <button className='btn btn-info' onClick={()=>setCount(count+1)}>Update</button>
      <br /><br />
      
      <input type="text"  onChange={(e)=>setName(e.target.value)} value={name} placeholder={"Enter Name"}/>
    </div>
  )
}
