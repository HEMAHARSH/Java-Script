import React, { Component } from 'react'

export default class ReactRef extends Component {
    constructor(props) {
      super(props);
    
      this.textInput = React.createRef();
      this.focusTextInuput=this.focusTextInuput.bind(this);
    }
    focusTextInuput()
    {
        this.textInput.current.focus();
        alert(this.textInput.current.value);
        
    }
  render() {
    return (
      <div>
      <h1>ReactRef<br/>
      <input type="text" ref={this.textInput}/><br/>
      <input type="button" value="Focus the text input" onClick={this.focusTextInuput}></input>
      </h1></div>
    )
  }
}