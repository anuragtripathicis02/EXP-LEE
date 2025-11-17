
import React from 'react'
import HeaderTop from './HeaderTop'
import CreatePostData from './CreatePostData'

const Home = () => {
  return (
    <div className='create-data-sec'>
        <HeaderTop />
        <div className='create-data-from'>
          <div className='container'>
              <CreatePostData />
          </div>
        </div>
    </div>
  )
}

export default Home
