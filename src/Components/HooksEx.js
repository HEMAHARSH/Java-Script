import React, { useEffect, useState } from 'react'

function HooksEx() {
 const[count,setCount]=useState(0)
 useEffect(()=>{
    document.title="HI";
    console.log({count})
 })
    return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment by 1</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement by 1</button>
    <button onClick={()=>{setCount(count+5)}}>Increment by 5</button>
    </div>
  )
}

export default HooksEx