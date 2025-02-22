import React, { useState } from 'react'
import './Login.css'
import Navbar from './navbar';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Login() {
let [fullname,setfullname]=useState("");
let[password,setpassword]=useState("");

  let fullnameval=(event)=>{
    setfullname(event.target.value);
  }
  
  let passwordval=(event)=>{
    setpassword(event.target.value);

  }
  let formsubmits =()=>{
    if(fullname.trim()){
     toast.error("Please Enter Your Name")
    }
    else if(password.trim()){
      toast.error("Password Cannot Be Empty!")
    }
    else{

    toast.success(`name:       ${fullname}  password:  ...`)
    setfullname("");
    setpassword("")
    }
    
 
  }
  let handlesubmit=(event)=>{
    event.preventDefault();

  }

  return (
    <>
    <Navbar/>
      <Toaster/>
      
      <h1 className='title'>Login Here</h1>
    <div className='main-div'>
        <form onSubmit={handlesubmit} >
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
         <Link to="./signup" > <p className='forgot'>Sign-up</p></Link>
         <Link to="/"><button type='submit' className='btn' onClick={formsubmits}>Login</button></Link>
        
         </div>
         </form>
    </div>
    
    </>
    
  )
}

export default Login
