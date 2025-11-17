'use client'
import React, { useRef, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import Chat01 from '../../../../public/images/chat-01.png'


const Chat = () => {
  return (
    <div className='chat-list-sec'>
        <div className='head-chat-box'>
            <div className='container'>
                <ul className='p-0 m-0 list-unstyled d-flex align-items-center gap-2'>
                    <li>
                        <Link href="" className='btn btn-white active'>All</Link>
                    </li>
                    <li>
                        <Link href="" className='btn btn-white'>Read</Link>
                    </li>
                    <li>
                        <Link href="" className='btn btn-white'>Unread</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='chal-list-box'>
            <div className='container'>
                <div className='chat-list-item'>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Dr. Alex Chen</h6>
                                <p className='m-0 p-0'>Data Scientist at innovate Inc.</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <p className='p-0 m-0'>7:03 AM</p>
                            <span className='count-chat'>1</span>
                        </div>
                    </div>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Dr. Alex Chen</h6>
                                <p className='m-0 p-0'>Data Scientist at innovate Inc.</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <p className='p-0 m-0'>7:03 AM</p>
                            <span className='count-chat'>1</span>
                        </div>
                    </div>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Dr. Alex Chen</h6>
                                <p className='m-0 p-0'>Data Scientist at innovate Inc.</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <p className='p-0 m-0'>7:03 AM</p>
                        </div>
                    </div>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Dr. Alex Chen</h6>
                                <p className='m-0 p-0'>Data Scientist at innovate Inc.</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <p className='p-0 m-0'>7:03 AM</p>
                        </div>
                    </div>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Dr. Alex Chen</h6>
                                <p className='m-0 p-0'>Data Scientist at innovate Inc.</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <p className='p-0 m-0'>7:03 AM</p>
                        </div>
                    </div>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Dr. Alex Chen</h6>
                                <p className='m-0 p-0'>Data Scientist at innovate Inc.</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <p className='p-0 m-0'>7:03 AM</p>
                        </div>
                    </div>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Dr. Alex Chen</h6>
                                <p className='m-0 p-0'>Data Scientist at innovate Inc.</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <p className='p-0 m-0'>7:03 AM</p>
                        </div>
                    </div>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Dr. Alex Chen</h6>
                                <p className='m-0 p-0'>Data Scientist at innovate Inc.</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <p className='p-0 m-0'>7:03 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat