import React, { useRef } from 'react'

function ReferenceFunction() {
    const firstnameRef =useRef(null);
    const passwordRef =useRef(null);
    const onSubmit=(event)=>{

        const obj ={
            name:firstnameRef.current.value,
            pass:passwordRef.current.value
        }
        alert(JSON.stringify(obj))
        event.preventDefault();
    }
  return (
    <div>
    <form onSubmit={onSubmit}>
    <input type="text" placeholder='Enter name'
    ref={firstnameRef}/><br/>
    <input placeholder='Enter the password'
    type="password"
    ref={passwordRef}/><br/>

    <input type="submit"/></form></div>
  )
}

export default ReferenceFunction