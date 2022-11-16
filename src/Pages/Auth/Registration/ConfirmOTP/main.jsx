import React from 'react'
import "./main.css"
import OtpInput from "react-otp-input"
import { OTP_INPUT } from 'Components';
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

  const handleSubmit = (otpCode) => {

    console.log(otpCode.length)
    otpCode.length == 6 ? setIsComplete(true) : setIsComplete(false)
    console.log(otpCode.length)
    console.log(isComplete)
    setCode(otpCode)
  }

  return (
    <div className="h-full bg-gray-50 rounded flex flex-col justify-center items-center">
      <div className="">
        <div className="flex flex-col items-center">
          <h2 className="main-font text-3xl">Let's Verify your phone number</h2>
          <div>
            <p className="py-5 imprima-font text-gray-600">A verification code has been sent to.</p>
            <div className='rounded bg-gray-200 text-red-600 kreon-font flex justify-center items-center h-10'>+233 26 821 1334</div>
          </div>
          <div className='py-3'><Lottie options={defaultSplashAnimation} height={200} width={200} /></div>
        </div>
        <div>
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
        </div>
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
      </div>
    </div>
  );
};

export default ResetComponent;
