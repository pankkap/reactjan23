import React, { useEffect, useRef } from 'react'

export default function UseRefDemo() {

    const inputRef = useRef();
    // console.log(inputRef);
    useEffect(()=>{
        inputRef.current.focus();
    });
  return (
    <div>
      <h2>UseRef Hook Demo</h2>
      <input type="text"  placeholder='Type Something' ref={inputRef}/>
    </div>
  )
}
