'use client'
import React, { useRef, useState } from 'react'
import Image from "next/image";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StudentID from './StudentID';



const VerifyId = () => {
 

  return (
    <div className='verify-tab-sec pb-4'>
      <div className='container'>
        <div className='heading-box mb-md-5 mb-3 text-md-center'>
          <h2>Verify your identity</h2>
          <p>Select a verification option to confirm your identity and unlock your journey.</p>
        </div>

        <Tabs defaultActiveKey="StudentID" id="verify-tabs" className="mb-0">
          <Tab eventKey="StudentID" title={<><span className="tab-icon"></span> Student ID</>}>
                <StudentID />
          </Tab>

          <Tab eventKey="Passport" title={<><span className="tab-icon"></span> Passport</>}>Passport</Tab>
          <Tab eventKey="DriverLicense" title={<><span className="tab-icon"></span>Driver’s License</>}>Driver’s License</Tab>
          <Tab eventKey="GovernmentID" title={<><span className="tab-icon"></span>Government ID</>}>Government ID</Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default VerifyId
