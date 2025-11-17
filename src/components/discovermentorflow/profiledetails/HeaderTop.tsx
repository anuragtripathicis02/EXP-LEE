'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import Dropdown from 'react-bootstrap/Dropdown';

const HeaderTop = () => {
    return (
        <div className='head-toolbar rvc-bg'>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='back-box'>
                        <Link className='back-icon' href="">
                            <span className='icon'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21.3749 12C21.3749 12.2984 21.2564 12.5846 21.0454 12.7955C20.8344 13.0065 20.5483 13.125 20.2499 13.125H6.46866L11.2987 17.9541C11.51 18.1654 11.6287 18.4521 11.6287 18.751C11.6287 19.0499 11.51 19.3365 11.2987 19.5478C11.0873 19.7592 10.8007 19.8779 10.5018 19.8779C10.2029 19.8779 9.91625 19.7592 9.70491 19.5478L2.95491 12.7978C2.85003 12.6933 2.76681 12.5691 2.71003 12.4324C2.65325 12.2956 2.62402 12.149 2.62402 12.001C2.62402 11.8529 2.65325 11.7063 2.71003 11.5696C2.76681 11.4328 2.85003 11.3086 2.95491 11.2041L9.70491 4.4541C9.80956 4.34945 9.93379 4.26644 10.0705 4.20981C10.2072 4.15317 10.3538 4.12402 10.5018 4.12402C10.6498 4.12402 10.7963 4.15317 10.9331 4.20981C11.0698 4.26644 11.194 4.34945 11.2987 4.4541C11.4033 4.55875 11.4863 4.68298 11.543 4.81971C11.5996 4.95644 11.6287 5.10298 11.6287 5.25097C11.6287 5.39897 11.5996 5.54551 11.543 5.68224C11.4863 5.81897 11.4033 5.9432 11.2987 6.04785L6.46866 10.875H20.2499C20.5483 10.875 20.8344 10.9936 21.0454 11.2045C21.2564 11.4155 21.3749 11.7017 21.3749 12Z" fill="currentColor" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                    <div className='header-drop'>
                        <div className='drop-down-box'>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='bg-transparent border-0 p-0'>
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_250_6348)"><rect x="2" y="2" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"/><path d="M24.5 19.625C24.5 19.3283 24.588 19.0383 24.7528 18.7916C24.9176 18.545 25.1519 18.3527 25.426 18.2392C25.7001 18.1256 26.0017 18.0959 26.2926 18.1538C26.5836 18.2117 26.8509 18.3546 27.0607 18.5643C27.2704 18.7741 27.4133 19.0414 27.4712 19.3324C27.5291 19.6233 27.4994 19.9249 27.3858 20.199C27.2723 20.4731 27.08 20.7074 26.8334 20.8722C26.5867 21.037 26.2967 21.125 26 21.125C25.6022 21.125 25.2206 20.967 24.9393 20.6857C24.658 20.4044 24.5 20.0228 24.5 19.625ZM26 24.5C25.7033 24.5 25.4133 24.588 25.1666 24.7528C24.92 24.9176 24.7277 25.1519 24.6142 25.426C24.5006 25.7001 24.4709 26.0017 24.5288 26.2926C24.5867 26.5836 24.7296 26.8509 24.9393 27.0607C25.1491 27.2704 25.4164 27.4133 25.7074 27.4712C25.9983 27.5291 26.2999 27.4994 26.574 27.3858C26.8481 27.2723 27.0824 27.08 27.2472 26.8334C27.412 26.5867 27.5 26.2967 27.5 26C27.5 25.6022 27.342 25.2206 27.0607 24.9393C26.7794 24.658 26.3978 24.5 26 24.5ZM26 30.875C25.7033 30.875 25.4133 30.963 25.1666 31.1278C24.92 31.2926 24.7277 31.5269 24.6142 31.801C24.5006 32.0751 24.4709 32.3767 24.5288 32.6676C24.5867 32.9586 24.7296 33.2259 24.9393 33.4357C25.1491 33.6454 25.4164 33.7883 25.7074 33.8462C25.9983 33.9041 26.2999 33.8744 26.574 33.7608C26.8481 33.6473 27.0824 33.455 27.2472 33.2084C27.412 32.9617 27.5 32.6717 27.5 32.375C27.5 31.9772 27.342 31.5956 27.0607 31.3143C26.7794 31.033 26.3978 30.875 26 30.875Z" fill="#1F1F1F"/></g><defs><filter id="filter0_d_250_6348" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_250_6348"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_250_6348" result="shape"/></filter></defs></svg>
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
    )
}

export default HeaderTop
