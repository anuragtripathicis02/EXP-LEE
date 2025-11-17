'use client'
import React from 'react'
import HeaderTop from './HeaderTop'
import Profiledetails from './Profiledetails'

const Home = () => {
  return (
   <div className='chat-sec rvc-gredient-bg position-relative'>
        <HeaderTop />
        <div className='position-relative z-1'>
          <Profiledetails />
        </div>
    </div>
  )
}

export default Home
