import Sidebar from '@/components/Sidebar'
import React from 'react'
import ProfileCard from './ProfileCard'

const Home = () => {
  return (
    <>
    <Sidebar/>
    <div className='main-content bg-content'>
      <ProfileCard/>
    </div>
    </>
  )
}

export default Home
