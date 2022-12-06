import React, { Component } from 'react'

class ListandkeysEx extends Component {
  render() {
    const car=[{model:"nano",id:1},
    {model:"bolero",id:2},
    {model:"ferrari",id:3}];
    return (
      <h2>{car.map((val)=><li key={val.id}>{val.model}</li>)}</h2>
    )
  }
}
export default ListandkeysEx;