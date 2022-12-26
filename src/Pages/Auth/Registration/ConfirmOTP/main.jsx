import React from "react";
import "./main.css";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import Lottie from "react-lottie";
import * as SplashAnimation from "Assets/LottieFiles/lf30_editor_khv0pbjz.json";
import Swal from "sweetalert2";

import { ERROR_TOAST, WARNING_TOAST, SUCCESS_TOAST } from "Components";
import Endpoints from "Services/endpoints";

const defaultSplashAnimation = {
  loop: true,
  autoplay: true,
  animationData: SplashAnimation,
};

const ResetComponent = () => {
  const [code, setCode] = React.useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          msisdn: state.msisdn,
          code: code,
          countryCode: "GH",
        }),
      };

      const apiResponse = await fetch(Endpoints.CONFIRM_OTP, requestOptions);
      console.log(apiResponse);

      const data = await apiResponse.json();
      console.log({
        message: "making a call to the go backend..",
        body: {
          response: data,
        },
      });

      if (data.code !== "00") throw new Error(data.error.errMsg);

      navigate("/auth/login");
    } catch (error) {
      console.log(error.message);
      ERROR_TOAST(error.message);
    }
  };

  const handleResendOTP = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          msisdn: state.msisdn,
          countryCode: "GH",
        }),
      };

      const apiResponse = await fetch(Endpoints.RESEND_OTP, requestOptions);
      console.log(apiResponse);

      const data = await apiResponse.json();
      console.log({
        message: "making a call to the go backend.",
        body: {
          response: data,
        },
      });

      if (data.code !== "00") throw new Error(data.error.errMsg);

      SUCCESS_TOAST(`A new OTP has been generated and sent to ${state.msisdn}`);
    } catch (error) {
      console.log(error.message);
      ERROR_TOAST(error.message);
    }
  };

  const handleGoBack = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your data will be totally erased if you return to the registration screen, so you will have to start afresh.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Go back!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(-1);
      }
    });
  };

  const handleChangeOTP = (otpCode) => {
    setCode(otpCode);
  };

  console.log(code);
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ opacity: 0, y: -400 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="h-full bg-gray-50 rounded flex flex-col justify-center items-center"
    >
      <div>
        <div className="">
          <div className="flex flex-col items-center">
            <h2 className="main-font text-3xl text-center">
              Let's Verify your phone number
            </h2>
            <div>
              <p className="py-5 imprima-font text-gray-600">
                We have sent a verification code to:
              </p>
              <div className="rounded bg-gray-200 text-red-600 kreon-font flex justify-center items-center h-10">
                {state.msisdn}
              </div>
            </div>
            <div className="py-3">
              <Lottie
                options={defaultSplashAnimation}
                height={200}
                width={200}
              />
            </div>
          </div>
          <div className="py-5 flex justify-center items-center">
            <OtpInput
              value={code}
              onChange={(code) => handleChangeOTP(code)}
              numInputs={4}
              inputStyle={{
                fontSize: "1.5rem",
                fontFamily: "'Kreon', serif",
                borderRadius: 5,
                border: "1px solid gray",
                marginLeft: 20,
                width: "3rem",
                height: "3rem",
              }}
            />
            <div
              className="pl-5 cursor-pointer"
              onClick={(e) => handleSubmitOTP(e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center text-sm items-center imprima-font text-red-500">
            <div
              className="border-r pr-2 cursor-pointer"
              onClick={(e) => handleResendOTP(e)}
            >
              Send code again
            </div>
            <div className="pl-2 cursor-pointer" onClick={() => handleGoBack()}>
              Change your number
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default ResetComponent;
