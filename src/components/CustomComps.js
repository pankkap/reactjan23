// rfc  --> Functional Component
// rcc  --> Class Component

import React from 'react'
export default function CustomComp1() {
  return (
    <div>
        <h2>This is Function Custom Component using Extension</h2> 
    </div>
  )
}

export class CustomComp2 extends React.Component {
  render() {
    return (
      <div>
        <h2>This is Class Custom Component using Extension</h2> 
      </div>
    )
  }
}
