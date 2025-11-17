'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";

import Nav from 'react-bootstrap/Nav';

import RoleImg from '../../../../public/images/role-top-img.png'
import IAmStudent from '../../../../public/images/i-am-student.svg'
import IAmMentor from '../../../../public/images/i-am-mentor.svg'

const Roleselection = () => {
  return (
    <div className='role-sec bg-img position-relative'>
        <div className='container'>
            <div className='container-sm-box  min-vh-100 position-relative z-1'>
                <div className='top-img-box'>
                    <Image src={RoleImg} alt='Role Selection'></Image>
                </div>
                <div className='top-role-box d-flex flex-column h-100'>
                    <div className='bottom-text-box'>
                        <h2>Find your path, Your Way</h2>
                        <p>Select the role that best describes your purpose for using EXP — this will help us tailor your experience.</p>

                        <div className='nav-bar-tabs'>
                            <Nav variant="tabs" defaultActiveKey="IAmStudent">
                                <Nav.Item>
                                    <Nav.Link eventKey="IAmStudent">
                                        <div className='nav-box d-md-block d-flex align-items-center'>
                                            <div className='icons'>
                                                <Image src={IAmStudent} alt=''></Image>
                                            </div>
                                            <div className='text-box'>
                                                <h3>I’m a Student</h3>
                                                <p>Looking for guidance to advance your career</p>
                                            </div>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="IAmMentor">
                                        <div className='nav-box d-md-block d-flex align-items-center'>
                                            <div className='icons'>
                                                <Image src={IAmMentor} alt=''></Image>
                                            </div>
                                            <div className='text-box'>
                                                <h3>I’m a Mentor</h3>
                                                <p>Ready to share your expertise and help others</p>
                                            </div>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className='button-box mt-auto pb-40'>
                        <Link href="" className='btn-theme btn-yellow btn-padding'>Continue</Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Roleselection