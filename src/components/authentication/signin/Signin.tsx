'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Logo from "../../../../public/images/logo.png";
import EyeClose from "../../../../public/images/eye-slash.png";
import EyeOpen from "../../../../public/images/eye.png";

import Banner from "../../../../public/images/sing-in-banner.png";


const Signin = () => {
    return (
        <div className='d-flex auth-wrapper'>
            <div className='auth-form text-center'>
                <div className='max-card my-auto'>
                    <div className='text-start'>
                        <div className='auth-logo'>
                            <Image src={Logo} alt="" className='img-theme-white' />
                        </div>
                        <h1>Welcome back!</h1>
                        <p>your journey to a brighter future starts here. Please enter your credentials to continue to your account.</p>
                    </div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-4"

                    >
                        <Form.Control type="email" placeholder="Johnsmith1001@gmail.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Enter Password" className="mb-4">
                        <Form.Control type="password" placeholder="Enter your password" />
                        <span className='pass-container'>
                            <Image src={EyeClose} alt="" className='eye-close' />
                            {/* <Image src={EyeOpen} alt="" className='eye-open' /> */}
                        </span>
                    </FloatingLabel>
                    <div className="forgot-link text-center mb-40">
                        <Link href="" className='link-underline-text'>Forgot Password?</Link>
                    </div>

                    <button className='btn-theme btn-yellow w-100 mb-48'>Sign in</button>

                    <div className='d-flex align-items-center justify-content-center or'>
                        <div className='px-0'>----</div>
                        <div className='px-2'>Or Continue With</div>
                        <div className='px-0'>----</div>
                    </div>

                    <div className='social-auth mb-48'>
                        <ul className='d-flex align-items-center justify-content-center'>
                            <li><Link href="">
                                <span className='icon'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_253_8783)">
                                            <path d="M23.0938 9.91355L13.3044 9.91309C12.8721 9.91309 12.5217 10.2634 12.5217 10.6957V13.823C12.5217 14.2552 12.8721 14.6056 13.3044 14.6056H18.8171C18.2135 16.1722 17.0868 17.4842 15.6493 18.3178L18 22.387C21.7707 20.2062 24 16.3799 24 12.0965C24 11.4866 23.955 11.0506 23.8651 10.5597C23.7968 10.1867 23.4729 9.91355 23.0938 9.91355Z" fill="#167EE6" />
                                            <path d="M12 19.3047C9.30218 19.3047 6.94699 17.8306 5.68207 15.6494L1.61304 17.9948C3.68374 21.5836 7.56283 24.0003 12 24.0003C14.1768 24.0003 16.2307 23.4143 18 22.3929V22.3873L15.6494 18.3181C14.5742 18.9417 13.3299 19.3047 12 19.3047Z" fill="#12B347" />
                                            <path d="M18 22.3922V22.3866L15.6494 18.3174C14.5741 18.941 13.33 19.304 12 19.304V23.9996C14.1767 23.9996 16.2308 23.4135 18 22.3922Z" fill="#0F993E" />
                                            <path d="M4.69566 12.0003C4.69566 10.6705 5.05856 9.42637 5.68205 8.3512L1.61302 6.00586C0.586031 7.76962 0 9.81797 0 12.0003C0 14.1826 0.586031 16.2309 1.61302 17.9947L5.68205 15.6494C5.05856 14.5742 4.69566 13.3301 4.69566 12.0003Z" fill="#FFD500" />
                                            <path d="M12 4.69566C13.7593 4.69566 15.3753 5.32078 16.6375 6.36061C16.9488 6.61711 17.4014 6.59859 17.6867 6.31336L19.9024 4.09758C20.2261 3.77395 20.203 3.24422 19.8573 2.94431C17.7425 1.10967 14.991 0 12 0C7.56283 0 3.68374 2.41673 1.61304 6.00558L5.68207 8.35092C6.94699 6.16969 9.30218 4.69566 12 4.69566Z" fill="#FF4B26" />
                                            <path d="M16.6374 6.36061C16.9488 6.61711 17.4015 6.59859 17.6866 6.31336L19.9024 4.09758C20.226 3.77395 20.2029 3.24422 19.8573 2.94431C17.7425 1.10963 14.991 0 12 0V4.69566C13.7592 4.69566 15.3752 5.32078 16.6374 6.36061Z" fill="#D93F21" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_253_8783">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </Link></li>
                            <li><Link href="">
                                <span className='icon'>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M17.1185 0C17.1743 0 17.2302 0 17.2892 0C17.4262 1.69253 16.7802 2.95719 15.995 3.87301C15.2246 4.78251 14.1697 5.6646 12.4635 5.53076C12.3497 3.86247 12.9967 2.69161 13.7808 1.77789C14.508 0.92636 15.8412 0.168621 17.1185 0Z" fill="currentColor" />
                                        <path d="M22.2836 17.6164C22.2836 17.6332 22.2836 17.648 22.2836 17.6638C21.8041 19.1161 21.1201 20.3607 20.2855 21.5157C19.5235 22.5643 18.5898 23.9755 16.9225 23.9755C15.4819 23.9755 14.525 23.0491 13.0485 23.0238C11.4866 22.9985 10.6277 23.7984 9.1997 23.9997C9.03635 23.9997 8.873 23.9997 8.71281 23.9997C7.6642 23.848 6.81793 23.0175 6.20141 22.2693C4.38347 20.0582 2.97865 17.2022 2.71729 13.5474C2.71729 13.189 2.71729 12.8318 2.71729 12.4735C2.82794 9.85772 4.09892 7.73099 5.78829 6.7003C6.67987 6.15228 7.90553 5.68541 9.27031 5.89408C9.85521 5.98471 10.4528 6.18495 10.9765 6.38308C11.4729 6.57383 12.0937 6.91213 12.6817 6.89421C13.0801 6.88262 13.4763 6.67501 13.8779 6.52852C15.054 6.1038 16.2069 5.61691 17.7266 5.8456C19.553 6.12172 20.8493 6.93321 21.6502 8.18521C20.1052 9.16848 18.8838 10.6502 19.0925 13.1806C19.278 15.4791 20.6143 16.8239 22.2836 17.6164Z" fill="currentColor" />
                                    </svg>

                                </span>
                            </Link></li>
                        </ul>
                    </div>

                    <div className='create-account'>
                        <p className='m-0'>Don't have an account? <Link href="javascript:void(0)"
                            className='link-underline-text'> Create Account </Link></p>
                    </div>
                </div>
            </div>
            <div className='auth-info text-center'>
                <div className='bgImg' style={{
                    backgroundImage: "url('/images/sing-in-banner.png')",
                }}>
                </div>
            </div>
        </div>
    )
}

export default Signin
