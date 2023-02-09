import React, { useState } from 'react'

export default function HOCComp(OrigionalComponent) {
    function NewComponent(){
    // state
    const[count, setCount] = useState(0)
    // function
    function increment(){
        setCount(count+1)
    }
    return <OrigionalComponent count={count} increment={increment}/>
    }
  return NewComponent;
}
