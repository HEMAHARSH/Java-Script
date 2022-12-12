import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,seterror]=useState(false);
    const navigate= useNavigate();
    const formHandler=(event)=>{
        event.preventDefault();
        if(username.length===0 && password.length===0)
        {
           seterror(true);
        }
        else if(password.length<8)
        {
          seterror(true);
        }
        else if(username!==password){
         seterror(true);
         alert("Username and password must be same")
        }
      else if((username && password))
      {
        const loginobj={
        name:username,
        pwd:password
        }
       console.log(loginobj);
       //view in browser
     alert(JSON.stringify(loginobj));// to view in the alert message
     navigate("/");
      }
    }
  return(
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    Username :  <input type="text" value={username} placeholder="Username" 
    onChange={(d)=>setUsername(d.target.value)}></input><br/>

    <span>
    {error && username.length === 0?
    <label style={{color:'red'}}>
    Username is required</label>:"" }<br/>
    </span>

     Password :  <input type="password" value={password} placeholder="Enter the password"
      onChange={(e)=>setPassword(e.target.value)}></input><br/>

    <span>
    {error && password.length === 0?
    <label style={{color:'red'}}>
    Password is required</label>:"" }

    {error && password.length>0 && password.length<8?
      <label style={{color:'red'}}>
      Password should contain atleast 8 characters</label>:"" }<br/>
    </span>

    <button type="submit">Submit
   
    </button>
    </form></div>
    )
  }

export default Login