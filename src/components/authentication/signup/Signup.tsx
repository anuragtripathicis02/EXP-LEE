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

const Signup = () => {
    return (
        <div className='d-flex auth-wrapper'>
            <div className='auth-form text-center'>
                <div className='max-card my-auto'>
                    <div className='text-start'>
                        <div className='back-block text-start mb-4'>
                            <Link href="" className='back-btn'>
                                <span className='icon'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.3749 12C21.3749 12.2984 21.2564 12.5846 21.0454 12.7955C20.8344 13.0065 20.5483 13.125 20.2499 13.125H6.46866L11.2987 17.9541C11.51 18.1654 11.6287 18.4521 11.6287 18.751C11.6287 19.0499 11.51 19.3365 11.2987 19.5478C11.0873 19.7592 10.8007 19.8779 10.5018 19.8779C10.2029 19.8779 9.91625 19.7592 9.70491 19.5478L2.95491 12.7978C2.85003 12.6933 2.76681 12.5691 2.71003 12.4324C2.65325 12.2956 2.62402 12.149 2.62402 12.001C2.62402 11.8529 2.65325 11.7063 2.71003 11.5696C2.76681 11.4328 2.85003 11.3086 2.95491 11.2041L9.70491 4.4541C9.80956 4.34945 9.93379 4.26644 10.0705 4.20981C10.2072 4.15317 10.3538 4.12402 10.5018 4.12402C10.6498 4.12402 10.7963 4.15317 10.9331 4.20981C11.0698 4.26644 11.194 4.34945 11.2987 4.4541C11.4033 4.55875 11.4863 4.68298 11.543 4.81971C11.5996 4.95644 11.6287 5.10298 11.6287 5.25097C11.6287 5.39897 11.5996 5.54551 11.543 5.68224C11.4863 5.81897 11.4033 5.9432 11.2987 6.04785L6.46866 10.875H20.2499C20.5483 10.875 20.8344 10.9936 21.0454 11.2045C21.2564 11.4155 21.3749 11.7017 21.3749 12Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                        <h1>Sign up</h1>
                        <p>your journey to a brighter future starts here. Please enter your credentials to continue to your account.</p>
                    </div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Full name"
                        className="mb-4"

                    >
                        <Form.Control type="email" placeholder="John Smith" />
                    </FloatingLabel>

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

                    <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-4">
                        <Form.Control type="password" placeholder="Enter your password" />
                        <span className='pass-container'>
                            <Image src={EyeClose} alt="" className='eye-close' />
                            {/* <Image src={EyeOpen} alt="" className='eye-open' /> */}
                        </span>
                    </FloatingLabel>

                    <button className='btn-theme btn-yellow w-100 mb-3'>Sign Up</button>

                        <div className='create-account mb-48'>
                        <p className='m-0'>By clicking, I accept EXP <Link href="javascript:void(0)"
                            className='link-underline-text'> Term & Conditions,
& Privacy Policy </Link></p>
                    </div>
                   

                    <div className='create-account'>
                        <p className='m-0'>Already has an account?  <Link href="javascript:void(0)"
                            className='link-underline-text under-line-text'> Log in </Link></p>
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

export default Signup
