import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import toast,{Toaster} from 'react-hot-toast'
import { useState } from 'react'
import './Signup.css'
const Signup = () => {

  let [formdata ,setformdata]=useState({
    fullname:"",
    phoneNo:"",
    email:"",
    password:"",
    confirmpassword:""
  });

 let changehandler=(event)=>{
  let feild=(event.target.name);
  let values=(event.target.value);
  
  setformdata((data)=>{
     data[feild]=values;
     return{...data};

  });

 }
 let handlesubmit=(event)=>{
  event.preventDefault();
  submitdata();
  
}
let submitdata=()=>{
  const { fullname, phoneNo, email, password, confirmpassword } = formdata;

  if (fullname === "" || phoneNo === "" || email === "" || password === "" || confirmpassword === "") {
    toast.error("Please fill all the fields!");
  } else if (password !== confirmpassword) {
    toast.error("Passwords do not match!");
  }
  else if (phoneNo.length <10) {
    toast.error("Phone No Should BE 10 Digit");
  }
  
  else {
    toast.success("Form submitted successfully!");
    setformdata({
      fullname:"",
      phoneNo:"",
      email:"",
      password:"",
      confirmpassword:""
  
    })
  }
};

  




  return (
    <>
     <Toaster/>
    <div>
     
      <Navbar/>
      <h1 className='title'>Signup</h1>
      <div className='container'>
      <form onSubmit={handlesubmit}>
        <br/>
        <input type='text' placeholder='Enter Your Name' className='ipt'  required  onChange={changehandler} name='fullname' value={formdata.fullname}/>
        <input type='tel' placeholder='Enter Your Phone-No' className='ipt'  required  onChange={changehandler} name='phoneNo' value={formdata.phoneNo}/>
        <input type='email' placeholder='Enter Your E-mail' className='ipt'  required onChange={changehandler} name='email' value={formdata.email}/>
        <input type='Password' placeholder='Enter Your Password' className='ipt'  required onChange={changehandler} name='password' value={formdata.password}/>
        <input type='Password' placeholder='Confirm password' className='ipt'  required onChange={changehandler} name='confirmpassword' value={formdata.confirmpassword}/>
         <button className='btns'onClick={submitdata} >Sign-up</button>

      </form>
      </div>

    </div>
    </>
  )
}

export default Signup
