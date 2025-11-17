'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import PreviewPost from '../../../../public/images/preview-post.png'
import AuthorImg from '../../../../public/images/preview-author.png'

const PostPreview = () => {
  return (
     <div className='preview-post-sec mt-4 pb-4'>
        <div className='row justify-content-center'>
            <div className='col-xxl-4 col-lg-5 col-md-8'>
                <div className='inner-preview-post position-relative'>
                    <div className='preview-img-box'>
                        <Image src={PreviewPost} alt=''></Image>
                    </div>
                    <div className='preview-text d-flex align-items-center gap-2'>
                        <div className='img-box'>
                            <Image src={AuthorImg} alt=''></Image>
                        </div>
                        <div className='text-box'>
                            <h3>Dr. Alex Chen</h3>
                            <p>Hi, I'm [Your Name], a Data Scientist at Innovate Inc. with over [X years] of hands-on experience in data analytics, AI, and machine learning. I’m passionate about turning complex data into meaningful insights and helping others grow in the world of data science. Whether you’re exploring your first dataset or building advanced predictive models, I’m here to guide you through every step with clarity and real-world perspective.</p>
                        </div>
                    </div>
                </div>
                <Link href="" className='w-100 btn-theme btn-yellow submit-btn mt-4'>Publish</Link>
            </div>
        </div>
    </div>
  )
}

export default PostPreview