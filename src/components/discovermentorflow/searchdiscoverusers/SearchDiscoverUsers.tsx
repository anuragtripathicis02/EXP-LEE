"use client";
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import UserImg1 from "../../../../public/images/discover-users-img-1.png";
import UserImg2 from "../../../../public/images/discover-users-img-2.png";
import UserImg3 from "../../../../public/images/discover-users-img-3.png";
import UserImg4 from "../../../../public/images/discover-users-img-4.png";

import IconCoin from "../../../../public/images/icon-coin.svg";




const SearchDiscoverUsers = () => {
    return (
        <>
            <div className='sec-discover-user position-relative z-1 py-4'>
                <div className='container'>
                    <h3 className='block-title'>Connect with an expert in your field</h3>
                    <div className='row gx-3'>
                        <div className='col-md-6'>
                            <div className="expert-card">
                                <div className='d-flex'>
                                    <div className='useImgbox'>
                                        <Image src={UserImg1} alt='' />
                                    </div>
                                    <div className="expert-info flex-grow-1">
                                       <div className='ex-lead'>
                                         <h3 className="name">Dr. Alex Chen</h3>
                                        <p className="role mb-0">Data Scientist at innovate Inc.</p>
                                       </div>
                                        <div className="expert-price">
                                        <Image src={IconCoin} alt='' />
                                        <div className='price-box'>
                                            <h4>130/hr</h4>
                                            <p>EXP Coin</p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <p className="desc mb-0">Helping students navigate the world of data and AI</p>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className="expert-card">
                                <div className='d-flex'>
                                    <div className='useImgbox'>
                                        <Image src={UserImg2} alt='' />
                                    </div>
                                    <div className="expert-info flex-grow-1">
                                       <div className='ex-lead'>
                                         <h3 className="name">Jessia M. Sanor</h3>
                                        <p className="role mb-0">Data Scientist at innovate Inc.</p>
                                       </div>
                                        <div className="expert-price">
                                        <Image src={IconCoin} alt='' />
                                        <div className='price-box'>
                                            <h4>80/hr</h4>
                                            <p>EXP Coin</p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <p className="desc mb-0">Helping students navigate the world of data and AI</p>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className="expert-card">
                                <div className='d-flex'>
                                    <div className='useImgbox'>
                                        <Image src={UserImg3} alt='' />
                                    </div>
                                    <div className="expert-info flex-grow-1">
                                       <div className='ex-lead'>
                                         <h3 className="name">Mark T. Jamieson</h3>
                                        <p className="role mb-0">Data Scientist at innovate Inc.</p>
                                       </div>
                                        <div className="expert-price">
                                        <Image src={IconCoin} alt='' />
                                        <div className='price-box'>
                                            <h4>70/hr</h4>
                                            <p>EXP Coin</p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <p className="desc mb-0">Helping students navigate the world of data and AI</p>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className="expert-card">
                                <div className='d-flex'>
                                    <div className='useImgbox'>
                                        <Image src={UserImg4} alt='' />
                                    </div>
                                    <div className="expert-info flex-grow-1">
                                       <div className='ex-lead'>
                                         <h3 className="name">Mark T. Jamieson</h3>
                                        <p className="role mb-0">Data Scientist at innovate Inc.</p>
                                       </div>
                                        <div className="expert-price">
                                        <Image src={IconCoin} alt='' />
                                        <div className='price-box'>
                                            <h4>70/hr</h4>
                                            <p>EXP Coin</p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <p className="desc mb-0">Helping students navigate the world of data and AI</p>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className="expert-card">
                                <div className='d-flex'>
                                    <div className='useImgbox'>
                                        <Image src={UserImg1} alt='' />
                                    </div>
                                    <div className="expert-info flex-grow-1">
                                       <div className='ex-lead'>
                                         <h3 className="name">Dr. Alex Chen</h3>
                                        <p className="role mb-0">Data Scientist at innovate Inc.</p>
                                       </div>
                                        <div className="expert-price">
                                        <Image src={IconCoin} alt='' />
                                        <div className='price-box'>
                                            <h4>130/hr</h4>
                                            <p>EXP Coin</p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <p className="desc mb-0">Helping students navigate the world of data and AI</p>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className="expert-card">
                                <div className='d-flex'>
                                    <div className='useImgbox'>
                                        <Image src={UserImg2} alt='' />
                                    </div>
                                    <div className="expert-info flex-grow-1">
                                       <div className='ex-lead'>
                                         <h3 className="name">Jessia M. Sanor</h3>
                                        <p className="role mb-0">Data Scientist at innovate Inc.</p>
                                       </div>
                                        <div className="expert-price">
                                        <Image src={IconCoin} alt='' />
                                        <div className='price-box'>
                                            <h4>80/hr</h4>
                                            <p>EXP Coin</p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <p className="desc mb-0">Helping students navigate the world of data and AI</p>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className="expert-card">
                                <div className='d-flex'>
                                    <div className='useImgbox'>
                                        <Image src={UserImg3} alt='' />
                                    </div>
                                    <div className="expert-info flex-grow-1">
                                       <div className='ex-lead'>
                                         <h3 className="name">Mark T. Jamieson</h3>
                                        <p className="role mb-0">Data Scientist at innovate Inc.</p>
                                       </div>
                                        <div className="expert-price">
                                        <Image src={IconCoin} alt='' />
                                        <div className='price-box'>
                                            <h4>70/hr</h4>
                                            <p>EXP Coin</p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <p className="desc mb-0">Helping students navigate the world of data and AI</p>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className="expert-card">
                                <div className='d-flex'>
                                    <div className='useImgbox'>
                                        <Image src={UserImg4} alt='' />
                                    </div>
                                    <div className="expert-info flex-grow-1">
                                       <div className='ex-lead'>
                                         <h3 className="name">Mark T. Jamieson</h3>
                                        <p className="role mb-0">Data Scientist at innovate Inc.</p>
                                       </div>
                                        <div className="expert-price">
                                        <Image src={IconCoin} alt='' />
                                        <div className='price-box'>
                                            <h4>70/hr</h4>
                                            <p>EXP Coin</p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <p className="desc mb-0">Helping students navigate the world of data and AI</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchDiscoverUsers
