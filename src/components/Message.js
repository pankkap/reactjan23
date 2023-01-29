import React from 'react'

export default function Message(props) {
    // props.age = 20;
    // props can not changed, its readonly

    // Destructuring 
    let {name, age} = props;
  return (
    <div className='container'>
        <h1 className='bg-primary text-white p-2 text-center'>Welcome {name} and age: {age}</h1>
        </div>
  )
}
