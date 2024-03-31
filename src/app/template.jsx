'use client'
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'//this makes the bootstrap apply everywhere
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'


const Template = ({children}) => {

  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.min.js')
    TimeAgo.addDefaultLocale(en)
  },[])
  return (
    <div>
        <Navbar/>

    {children}
    </div>
  )
}

export default Template