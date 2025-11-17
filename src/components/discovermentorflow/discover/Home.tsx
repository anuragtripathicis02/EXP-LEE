import Sidebar from '@/components/Sidebar'
import React from 'react'
import ProfileCard from './ProfileCard'

const Home = () => {
  return (
    <>
    <Sidebar/>
    <div className='main-content bg-content profile-bg'>
      <ProfileCard/>
    </div>
    </>
  )
}

export default Home
