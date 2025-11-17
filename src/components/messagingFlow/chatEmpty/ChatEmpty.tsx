'use client'
import React, { useRef, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import Chat01 from '../../../../public/images/chat-01.png'


const ChatEmpty = () => {
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
        <div className='empty-box text-center'>
            <div className='container'>
                <div className='empty-item'>
                    <span className='icons'>
                        <svg width="56" height="63" viewBox="0 0 56 63" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="7" width="54" height="55" rx="7" stroke="#D4D6E2" stroke-width="2"/><line x1="14.25" y1="1.25" x2="14.25" y2="6.75" stroke="#D4D6E2" stroke-width="2.5" stroke-linecap="round"/><line x1="43.25" y1="1.25" x2="43.25" y2="6.75" stroke="#D4D6E2" stroke-width="2.5" stroke-linecap="round"/><circle cx="27.5" cy="24.5" r="6.5" stroke="#D4D6E2" stroke-width="2"/><path d="M55 35V38.2266C54.9999 40.0084 53.5553 41.4531 51.7734 41.4531H4.22656C2.44471 41.4531 1.00008 40.0084 1 38.2266V35H55Z" stroke="#D4D6E2" stroke-width="2"/><path d="M13.7358 41.4531L11.4777 44.9752C10.834 45.9792 10.4229 47.1144 10.2746 48.2978L9.89551 51.321M42.5598 41.5002L44.1705 44.8007C44.7186 45.9238 45.0513 47.1396 45.1515 48.3852L45.3875 51.321" stroke="#D4D6E2" stroke-width="2" stroke-linecap="round"/></svg>
                    </span>
                    <h6>No conversations yet</h6>
                    <p>Your conversations will appear here. Find a mentor and start a chat!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatEmpty