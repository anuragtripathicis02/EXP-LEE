import React from 'react'
import ChatTabs from './ChatTabs'
import HeaderTop from './HeaderTop'

const Home = () => {
  return (
    <div className='chat-sec rvc-gredient-bg position-relative'>
      <div className='bg-gredient-box d-block w-100 position-absolute'>&nbsp;</div>
        <HeaderTop />
        <div className='position-relative z-1'>
          <ChatTabs />
        </div>
    </div>
  )
}

export default Home
