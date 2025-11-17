'use client'
import React, { useRef, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';

import Chat01 from '../../../../public/images/chat-01.png'



const Blocked = () => {
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
                                <h6>Courtney E. Paulsen</h6>
                                <p className='m-0 p-0'>Student</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <div className='drop-down-box'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='bg-transparent border-0 p-2'>
                                        <svg width="4" height="21" viewBox="0 0 4 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.07779e-06 2C1.07779e-06 1.60444 0.117299 1.21776 0.337062 0.888861C0.556825 0.559963 0.869182 0.303617 1.23463 0.152242C1.60009 0.000866562 2.00222 -0.0387401 2.39018 0.0384303C2.77814 0.115601 3.13451 0.306082 3.41421 0.585787C3.69392 0.865492 3.8844 1.22186 3.96157 1.60982C4.03874 1.99778 3.99914 2.39992 3.84776 2.76537C3.69639 3.13082 3.44004 3.44318 3.11114 3.66294C2.78224 3.8827 2.39556 4 2 4C1.46957 4 0.960861 3.78929 0.585788 3.41421C0.210715 3.03914 1.07779e-06 2.53043 1.07779e-06 2ZM2 8.5C1.60444 8.5 1.21776 8.6173 0.888861 8.83706C0.559963 9.05682 0.303617 9.36918 0.152242 9.73463C0.000866562 10.1001 -0.0387401 10.5022 0.0384303 10.8902C0.115601 11.2781 0.306083 11.6345 0.585788 11.9142C0.865493 12.1939 1.22186 12.3844 1.60982 12.4616C1.99778 12.5387 2.39992 12.4991 2.76537 12.3478C3.13082 12.1964 3.44318 11.94 3.66294 11.6111C3.8827 11.2822 4 10.8956 4 10.5C4 9.96957 3.78929 9.46086 3.41421 9.08579C3.03914 8.71072 2.53043 8.5 2 8.5ZM2 17C1.60444 17 1.21776 17.1173 0.888861 17.3371C0.559963 17.5568 0.303617 17.8692 0.152242 18.2346C0.000866562 18.6001 -0.0387401 19.0022 0.0384303 19.3902C0.115601 19.7781 0.306083 20.1345 0.585788 20.4142C0.865493 20.6939 1.22186 20.8844 1.60982 20.9616C1.99778 21.0387 2.39992 20.9991 2.76537 20.8478C3.13082 20.6964 3.44318 20.44 3.66294 20.1111C3.8827 19.7822 4 19.3956 4 19C4 18.4696 3.78929 17.9609 3.41421 17.5858C3.03914 17.2107 2.53043 17 2 17Z" fill="#181A25"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Add</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Courtney E. Paulsen</h6>
                                <p className='m-0 p-0'>Student</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <div className='drop-down-box'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='bg-transparent border-0 p-2'>
                                        <svg width="4" height="21" viewBox="0 0 4 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.07779e-06 2C1.07779e-06 1.60444 0.117299 1.21776 0.337062 0.888861C0.556825 0.559963 0.869182 0.303617 1.23463 0.152242C1.60009 0.000866562 2.00222 -0.0387401 2.39018 0.0384303C2.77814 0.115601 3.13451 0.306082 3.41421 0.585787C3.69392 0.865492 3.8844 1.22186 3.96157 1.60982C4.03874 1.99778 3.99914 2.39992 3.84776 2.76537C3.69639 3.13082 3.44004 3.44318 3.11114 3.66294C2.78224 3.8827 2.39556 4 2 4C1.46957 4 0.960861 3.78929 0.585788 3.41421C0.210715 3.03914 1.07779e-06 2.53043 1.07779e-06 2ZM2 8.5C1.60444 8.5 1.21776 8.6173 0.888861 8.83706C0.559963 9.05682 0.303617 9.36918 0.152242 9.73463C0.000866562 10.1001 -0.0387401 10.5022 0.0384303 10.8902C0.115601 11.2781 0.306083 11.6345 0.585788 11.9142C0.865493 12.1939 1.22186 12.3844 1.60982 12.4616C1.99778 12.5387 2.39992 12.4991 2.76537 12.3478C3.13082 12.1964 3.44318 11.94 3.66294 11.6111C3.8827 11.2822 4 10.8956 4 10.5C4 9.96957 3.78929 9.46086 3.41421 9.08579C3.03914 8.71072 2.53043 8.5 2 8.5ZM2 17C1.60444 17 1.21776 17.1173 0.888861 17.3371C0.559963 17.5568 0.303617 17.8692 0.152242 18.2346C0.000866562 18.6001 -0.0387401 19.0022 0.0384303 19.3902C0.115601 19.7781 0.306083 20.1345 0.585788 20.4142C0.865493 20.6939 1.22186 20.8844 1.60982 20.9616C1.99778 21.0387 2.39992 20.9991 2.76537 20.8478C3.13082 20.6964 3.44318 20.44 3.66294 20.1111C3.8827 19.7822 4 19.3956 4 19C4 18.4696 3.78929 17.9609 3.41421 17.5858C3.03914 17.2107 2.53043 17 2 17Z" fill="#181A25"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Add</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Courtney E. Paulsen</h6>
                                <p className='m-0 p-0'>Student</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <div className='drop-down-box'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='bg-transparent border-0 p-2'>
                                        <svg width="4" height="21" viewBox="0 0 4 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.07779e-06 2C1.07779e-06 1.60444 0.117299 1.21776 0.337062 0.888861C0.556825 0.559963 0.869182 0.303617 1.23463 0.152242C1.60009 0.000866562 2.00222 -0.0387401 2.39018 0.0384303C2.77814 0.115601 3.13451 0.306082 3.41421 0.585787C3.69392 0.865492 3.8844 1.22186 3.96157 1.60982C4.03874 1.99778 3.99914 2.39992 3.84776 2.76537C3.69639 3.13082 3.44004 3.44318 3.11114 3.66294C2.78224 3.8827 2.39556 4 2 4C1.46957 4 0.960861 3.78929 0.585788 3.41421C0.210715 3.03914 1.07779e-06 2.53043 1.07779e-06 2ZM2 8.5C1.60444 8.5 1.21776 8.6173 0.888861 8.83706C0.559963 9.05682 0.303617 9.36918 0.152242 9.73463C0.000866562 10.1001 -0.0387401 10.5022 0.0384303 10.8902C0.115601 11.2781 0.306083 11.6345 0.585788 11.9142C0.865493 12.1939 1.22186 12.3844 1.60982 12.4616C1.99778 12.5387 2.39992 12.4991 2.76537 12.3478C3.13082 12.1964 3.44318 11.94 3.66294 11.6111C3.8827 11.2822 4 10.8956 4 10.5C4 9.96957 3.78929 9.46086 3.41421 9.08579C3.03914 8.71072 2.53043 8.5 2 8.5ZM2 17C1.60444 17 1.21776 17.1173 0.888861 17.3371C0.559963 17.5568 0.303617 17.8692 0.152242 18.2346C0.000866562 18.6001 -0.0387401 19.0022 0.0384303 19.3902C0.115601 19.7781 0.306083 20.1345 0.585788 20.4142C0.865493 20.6939 1.22186 20.8844 1.60982 20.9616C1.99778 21.0387 2.39992 20.9991 2.76537 20.8478C3.13082 20.6964 3.44318 20.44 3.66294 20.1111C3.8827 19.7822 4 19.3956 4 19C4 18.4696 3.78929 17.9609 3.41421 17.5858C3.03914 17.2107 2.53043 17 2 17Z" fill="#181A25"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Add</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Courtney E. Paulsen</h6>
                                <p className='m-0 p-0'>Student</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <div className='drop-down-box'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='bg-transparent border-0 p-2'>
                                        <svg width="4" height="21" viewBox="0 0 4 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.07779e-06 2C1.07779e-06 1.60444 0.117299 1.21776 0.337062 0.888861C0.556825 0.559963 0.869182 0.303617 1.23463 0.152242C1.60009 0.000866562 2.00222 -0.0387401 2.39018 0.0384303C2.77814 0.115601 3.13451 0.306082 3.41421 0.585787C3.69392 0.865492 3.8844 1.22186 3.96157 1.60982C4.03874 1.99778 3.99914 2.39992 3.84776 2.76537C3.69639 3.13082 3.44004 3.44318 3.11114 3.66294C2.78224 3.8827 2.39556 4 2 4C1.46957 4 0.960861 3.78929 0.585788 3.41421C0.210715 3.03914 1.07779e-06 2.53043 1.07779e-06 2ZM2 8.5C1.60444 8.5 1.21776 8.6173 0.888861 8.83706C0.559963 9.05682 0.303617 9.36918 0.152242 9.73463C0.000866562 10.1001 -0.0387401 10.5022 0.0384303 10.8902C0.115601 11.2781 0.306083 11.6345 0.585788 11.9142C0.865493 12.1939 1.22186 12.3844 1.60982 12.4616C1.99778 12.5387 2.39992 12.4991 2.76537 12.3478C3.13082 12.1964 3.44318 11.94 3.66294 11.6111C3.8827 11.2822 4 10.8956 4 10.5C4 9.96957 3.78929 9.46086 3.41421 9.08579C3.03914 8.71072 2.53043 8.5 2 8.5ZM2 17C1.60444 17 1.21776 17.1173 0.888861 17.3371C0.559963 17.5568 0.303617 17.8692 0.152242 18.2346C0.000866562 18.6001 -0.0387401 19.0022 0.0384303 19.3902C0.115601 19.7781 0.306083 20.1345 0.585788 20.4142C0.865493 20.6939 1.22186 20.8844 1.60982 20.9616C1.99778 21.0387 2.39992 20.9991 2.76537 20.8478C3.13082 20.6964 3.44318 20.44 3.66294 20.1111C3.8827 19.7822 4 19.3956 4 19C4 18.4696 3.78929 17.9609 3.41421 17.5858C3.03914 17.2107 2.53043 17 2 17Z" fill="#181A25"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Add</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='chat-list d-flex align-items-center gap-2 justify-content-between'>
                        <div className='left-list d-flex align-items-center gap-md-3 gap-2'>
                            <div className='img-chat'>
                                <Image src={Chat01} alt=''></Image>
                            </div>
                            <div className='chat-details'>
                                <h6>Courtney E. Paulsen</h6>
                                <p className='m-0 p-0'>Student</p>
                            </div>
                        </div>
                        <div className='right-chat text-center'>
                            <div className='drop-down-box'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='bg-transparent border-0 p-2'>
                                        <svg width="4" height="21" viewBox="0 0 4 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.07779e-06 2C1.07779e-06 1.60444 0.117299 1.21776 0.337062 0.888861C0.556825 0.559963 0.869182 0.303617 1.23463 0.152242C1.60009 0.000866562 2.00222 -0.0387401 2.39018 0.0384303C2.77814 0.115601 3.13451 0.306082 3.41421 0.585787C3.69392 0.865492 3.8844 1.22186 3.96157 1.60982C4.03874 1.99778 3.99914 2.39992 3.84776 2.76537C3.69639 3.13082 3.44004 3.44318 3.11114 3.66294C2.78224 3.8827 2.39556 4 2 4C1.46957 4 0.960861 3.78929 0.585788 3.41421C0.210715 3.03914 1.07779e-06 2.53043 1.07779e-06 2ZM2 8.5C1.60444 8.5 1.21776 8.6173 0.888861 8.83706C0.559963 9.05682 0.303617 9.36918 0.152242 9.73463C0.000866562 10.1001 -0.0387401 10.5022 0.0384303 10.8902C0.115601 11.2781 0.306083 11.6345 0.585788 11.9142C0.865493 12.1939 1.22186 12.3844 1.60982 12.4616C1.99778 12.5387 2.39992 12.4991 2.76537 12.3478C3.13082 12.1964 3.44318 11.94 3.66294 11.6111C3.8827 11.2822 4 10.8956 4 10.5C4 9.96957 3.78929 9.46086 3.41421 9.08579C3.03914 8.71072 2.53043 8.5 2 8.5ZM2 17C1.60444 17 1.21776 17.1173 0.888861 17.3371C0.559963 17.5568 0.303617 17.8692 0.152242 18.2346C0.000866562 18.6001 -0.0387401 19.0022 0.0384303 19.3902C0.115601 19.7781 0.306083 20.1345 0.585788 20.4142C0.865493 20.6939 1.22186 20.8844 1.60982 20.9616C1.99778 21.0387 2.39992 20.9991 2.76537 20.8478C3.13082 20.6964 3.44318 20.44 3.66294 20.1111C3.8827 19.7822 4 19.3956 4 19C4 18.4696 3.78929 17.9609 3.41421 17.5858C3.03914 17.2107 2.53043 17 2 17Z" fill="#181A25"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Add</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blocked