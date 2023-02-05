import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log("Constructor Called")

        this.state = {
            counter:0,
            show:true
        }
    }
    updateCounter = () => {
        this.setState({counter:this.state.counter+1, show:!this.state.show})
    }
    componentDidMount(){
        console.log("Parent Component Mounted")
    }

    componentDidUpdate(){
        console.log("Parent Component Updated")
    }
   
  render() {
    console.log("Render Called")
    return (
      <div>
        <h1>Counter = {this.state.counter}</h1>
        <button className='btn btn-primary' onClick={this.updateCounter}>Update</button>
        <hr />
        {
            this.state.show? <ChildComponent/>:null
        }
      </div>
    )
  }
}

class ChildComponent extends Component{
    componentDidMount()
    {
        console.log("Child Component Mounted")
    }
    componentWillUnmount(){
        console.log("Child Component Unmounted")
    }
    render()
    {
        return (
            <>
            <h2>Child Component</h2>
            </>
        )
    }
}