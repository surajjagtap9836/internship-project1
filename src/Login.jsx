import React, { useState } from 'react'
import './Login.css'
function Login() {
let [fullname,setfullname]=useState("");
let[password,setpassword]=useState("");

  let fullnameval=(event)=>{
    setfullname(event.target.value);
  }
  
  let passwordval=(event)=>{
    setpassword(event.target.value);

  }
  let formsubmit =()=>{
    if(fullname==""){
      alert("Please Fill FullName");
    }
    else if(password==""){
      alert("Password Cannot Be Empty")
    }

    alert(`name:  ${fullname}     password:  ${password}`)
    setfullname("");
    setpassword("")
  }

  return (
    <>
   <h1 className='title'>Login Here</h1>
    <div className='main-div'>

         <div className='input-container'><br/>
         <input type='text'
          placeholder='Enter Your Name' 
          className='ip' 
          onChange={fullnameval}
          value={fullname}
          required
          /><br/>
         <input type='password'
          placeholder='Enter password '
          className='ip'
          onChange={passwordval}
          value={password}
          required

          /><br/>
         <button type='submit' className='btn' onClick={formsubmit}>Submit</button>
         </div>

    </div>
    </>
  )
}

export default Login
