import React from 'react'
import PropTypes from 'prop-types'
function Validate(props) {
  return (
    <div>Validation, {props.name}-{props.id}</div>
  )
}
Validate.propTypes={
    name:PropTypes.string,
    id:PropTypes.number.isRequired,
}
Validate.defaultProps={
    name:'Hemaharshini'
}
export default Validate
/*import React from 'react'
import PropTypes from 'prop-types'
function Validate() {
    render(){
  return (
    <div>Validation, {this.props.name}-{this.props.id}</div>
  )
}
}
Validate.propTypes={
    name:PropTypes.string,
    id:PropTypes.number.isRequired,
}
Validate.defaultProps={
    name:'Hemaharshini'
}

export default Validate*/