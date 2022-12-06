import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:"Gokul"
      }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})//setState method, 
    }
    render() {
            return (
      <div><h1>
      <button onClick={()=>this.setState({count:this.state.count+1})}>ClickMe  {this.state.count}</button>
      <h3>Iam h3 tag</h3>
      </h1></div>
    )
  }
}
