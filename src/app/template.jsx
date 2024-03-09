'use client'
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'//this makes the bootstrap apply everywhere

const Template = ({children}) => {

  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.min.js')
  },[])
  return (
    <div>
        <Navbar/>

    {children}
    </div>
  )
}

export default Template