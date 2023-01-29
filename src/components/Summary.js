import React from 'react'

export default function Summary(props) {
    // console.log(props)
    
    

   

  return (
    <>
     <td> {props.index+1} </td>
     <td> {props.name} </td>
     <td> <button className='btn btn-success' onClick={props.callback}>Reverse</button> </td>
    </>
  )
}
