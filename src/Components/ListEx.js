

/*class ListEx extends Component {
  render() {
    const cars=["nano","800","bolero"];
    const listcars=cars.map((i)=>i);
    console.log(listcars);
    return (
      <div>listcars</div>
    )
  }
}*/
import React from 'react'

 function ListEx() {
    const cars=["nano","800","bolero"];
    const listcars=cars.map((i)=>i);
    console.log(listcars);
  return (
    <div>{listcars.map((val)=><li>{val}</li>)}</div>
  )
}

export default ListEx;
