import React from 'react'
import Navbar from './navbar'
import PendingBills from './PendingBills'
const Home = () => {
  return (
    <>
     <Navbar/>
    <div >
      <h1 className='title'>Home Page</h1>
      <PendingBills/>

     
    </div>
    </>
  )
}

export default Home
