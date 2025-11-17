
import React from 'react'
import HeaderTop from './HeaderTop'
import PostPreview from './PostPreview'

const Home = () => {
  return (
    <div className='create-data-sec'>
        <HeaderTop />
        <div className='create-data-from'>
          <div className='container'>
              <PostPreview />
          </div>
        </div>
    </div>
  )
}

export default Home
