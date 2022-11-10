import React, { useState } from 'react'
import { motion } from 'framer-motion';
import "./main.css"
import { Routes, Route } from 'react-router-dom';

// components 
const Register = React.lazy(()=> import("./Register"))
const OTPConfirm = React.lazy(()=> import("./ConfirmOTP"))

const RegisterComponent = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 h-[100vh] bg-gray-50 rounded">
        <div className='lg:flex xl:flex items-center justify-center shadow-xl flex-col hidden'>
          <div
            className="bg-center bg-cover h-full w-full"
            style={{
              backgroundImage: `url("https://ik.imagekit.io/yz8iaxzer/Sign_up_image__1__gBmE_DwkD.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1668086394681")`,
            }}
          >
          </div>
        </div>
        <div className="px-32 register-bg ">
            <Routes>
                <Route path="/" element={<Register/>}/>
                <Route path="/otp-confirm" element={<OTPConfirm/>}/>
            </Routes>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;



