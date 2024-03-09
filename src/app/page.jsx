

import Link from 'next/link'
import React from 'react'
import classes from './login/login.module.css'
const Home = () => {
  return (
    <div>
    <h1 style={{color:'red' , textAlign:'center', fontSize:'50'  }}>
      welcome to home 
    </h1>
    <hr/>
    <br/>
    <button className='my-btn'>my button</button>
    <button className={"btn btn-primary"}>Login button</button>
    <div style={{}}>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
    </div>
    </div>
  )
}

export default Home