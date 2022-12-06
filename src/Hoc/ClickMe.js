import React, { Component } from 'react'
import EnhancedComponent from './Hoc.js'

class ClickMe extends Component {
   
    render() {
            return (
      <div>
     
      <button onClick={this.props.inc}>ClickMe{this.props.count}</button>
     </div>
    )
  }
}
export default EnhancedComponent(ClickMe)
