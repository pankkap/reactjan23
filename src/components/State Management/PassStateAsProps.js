import React, { useState } from 'react'

export default function PassStateAsProps() {
    const [counter, setcounter] = useState(1)

    function increment(){
        setcounter(counter+1)
    }
    function decrement(){
        setcounter(counter-1)
    }
  return (
    <div className='container'>
        <h2 className='bg-primary text-white text-center'>Passing state as Props Demo</h2>
        
        <h3>Parent Component: {counter}</h3>
        <hr />
        <ChildComponent_1 data={counter} functionality={increment}/>
        <hr />
        <ChildComponent_2 data={counter} functionality={decrement}/>
    </div>
  )
}


function ChildComponent_1(props) {
    const [personalData, setpersonalData] = useState(props.data);

  return (
    <div>
        <h3>Child Component-1: {props.data}</h3>
        <button className='btn btn-success' onClick={props.functionality}>Increment</button>
        <h3>Personal Data: {personalData}</h3>
        <button className='btn btn-info' onClick={()=>setpersonalData(5)}>Modify</button>
        
    </div>
  )
}

function ChildComponent_2(props) {
    return (
      <div>
          <h3>Child Component-2: {props.data}</h3>
        <button className='btn btn-danger' onClick={props.functionality}>Decrement</button>

      </div>
    )
  }
  