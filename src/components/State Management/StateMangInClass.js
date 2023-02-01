import React, { Component } from 'react'

export default class StateMangInClass extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            counter:1, 
            color:"success"
        }
        // Binding of Function with Class
        this.increment = this.increment.bind(this);
    }

    // Arrow Function doesn't required Binding with class
    decrement =()=>{
        this.setState({counter:this.state.counter-1})
    }

    increment(){
        this.setState({counter:this.state.counter+1})
    }

  render() {
    console.log(this.props)

    // Destructuring in Class Component
    let {T_name, T_Duration} = this.props;
   
    // Destructuring state 
    let {counter} = this.state;
    return (
      <div>
        <h2>THis is class Component</h2>
        <h3>Props in Class Component: <span className='text-danger'>{T_name}</span> and Duration= <span className='text-danger'>{T_Duration}</span></h3>
        <hr />
        <h3 className='text-center bg-dark text-white'>State Management in CLass</h3>
        <button className='btn btn-danger' onClick={this.decrement}>-</button>
        <h4>Counter = {counter} </h4>
        <button  className='btn btn-primary' onClick={this.increment}>+</button>
      </div>
    )
  }
}
