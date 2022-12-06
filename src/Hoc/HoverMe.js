import React, { Component } from 'react'
import EnhancedComponent from './Hoc.js'


class HoverMe extends Component {
    render() {
      const {count,increment}=this.props
            return (
      <div>
   
      <h1 onMouseEnter={increment}>HoverMe{count}</h1>
     </div>
    )
  }
}
export default EnhancedComponent(HoverMe);