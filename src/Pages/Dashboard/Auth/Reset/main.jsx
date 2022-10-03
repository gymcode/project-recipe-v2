import React from 'react'
import "./main.css"

const ResetComponent = () => {

  return (
    <div className="h-full bg-gray-50 rounded shadow-md login-bg flex flex-col justify-center items-center">
      <div className="">
        <div className="flex flex-col">
          <h2 className="abel-font text-4xl">Forgot Password?</h2>
          <p className="pt-5 imprima-font text-gray-600">Enter the mobile number you used when you joined and we’ll send <br /> you an OTP to reset your password</p>
          <p className="py-5 imprima-font text-gray-600">For security reasons, we do NOT store your password. So rest <br /> assured that we will never send your password via email/SMS.</p>
        </div>
        <div className="py-5">
          <div className='w-full'>
            <div className="flex flex-col">
              <label
                htmlFor="msisdn"
                className="imprima-font text-[#808080]"
              >
                Phone number
              </label>
              <input
                type="number"
                name=""
                className="outline-0 text-[#808080] bg-gray-200 h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                placeholder="+233 26 821 334"
              />
              <p className="text-xs text-red-600 kreon-font">
                {/* {formErrors.msisdn} */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetComponent;
