import React, { Component } from 'react'

class Messageclass extends Component {
  render() {
    return (
      <div>
      <h2>I sent you a {this.props.dept} message</h2>
      </div>
    )
  }
}
export default Messageclass;
