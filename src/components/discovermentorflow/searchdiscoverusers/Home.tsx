'use client'
import React from 'react'
import SearchDiscoverUsers from './SearchDiscoverUsers'
import HeaderTop from './HeaderTop'
import SearchFilter from './SearchFilter'

const Home = () => {
    return (
        <div className='search-discover h-205 rvc-gredient-bg position-relative'>
            <div className='bg-gredient-box d-block w-100 position-absolute'>&nbsp;</div>
            <HeaderTop />
            <SearchFilter />
            <SearchDiscoverUsers />
        </div>
    )
}

export default Home
