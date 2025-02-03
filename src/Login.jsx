import React from 'react'
import './Login.css'
function Login() {
  return (
    <>
   <h1 className='title'>Login Here</h1>
    <div className='main-div'>

         <div className='input-container'>
         <input type='text' placeholder='Enter Your Name' className='ip'/><br/>
         <input type='password' placeholder='Enter password 'className='ip'/><br/>
         <button type='submit' className='btn'>Submit</button>
         </div>

    </div>
    </>
  )
}

export default Login
