import React from 'react'
import "./main.css"
import OtpInput from "react-otp-input"
import { OTP_INPUT } from 'Components';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from "react-lottie";
import * as SplashAnimation from "Assets/LottieFiles/lf30_editor_khv0pbjz.json";

const defaultSplashAnimation = {
  loop: true,
  autoplay: true,
  animationData: SplashAnimation,
};

const ResetComponent = () => {
  const [code, setCode] = React.useState("")
  const [isComplete, setIsComplete] = React.useState(false)
  const {state} = useLocation()
  const navigate = useNavigate()

  console.log(state)

  const handleSubmit = (otpCode) => {

    console.log(otpCode.length)
    otpCode.length == 6 ? setIsComplete(true) : setIsComplete(false)
    console.log(otpCode.length)
    console.log(isComplete)
    setCode(otpCode)
  }

  return (
    <>
      <div className="h-full bg-gray-50 rounded flex flex-col justify-center items-center">
        <div className="">
          <div className="flex flex-col items-center">
            <h2 className="main-font text-3xl">Let's Verify your phone number</h2>
            <div>
              <p className="py-5 imprima-font text-gray-600">We have sent a verification code to.</p>
              <div className='rounded bg-gray-200 text-red-600 kreon-font flex justify-center items-center h-10'>{state.msisdn}</div>
            </div>
            <div className='py-3'><Lottie options={defaultSplashAnimation} height={200} width={200} /></div>
          </div>
          {/* <div>
            <OTP_INPUT
              numInputs={6}
              style={
                {
                  width: "3rem",
                  height: "3rem",
                  fontSize: "1.5rem",
                  fontFamily: "'Kreon', serif",
                  borderRadius: 5,
                  border: "1px solid gray",
                }
              } />
          </div> */}
          <div className="py-5">
            <OtpInput
              value={code}
              onChange={(code) => handleSubmit(code)}
              numInputs={6}
              inputStyle={
                {
                  fontSize: "1.5rem",
                  fontFamily: "'Kreon', serif",
                  borderRadius: 5,
                  border: "1px solid gray",
                  marginLeft: 20,
                  width: "3rem",
                  height: "3rem"
                }
              }
            />
          </div>
          <div className='flex justify-center text-sm items-center imprima-font text-red-500'>
              <div className='border-r pr-2'>Send code again</div>
              <div className='pl-2'>Change your number</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetComponent;
