import React, { useState } from 'react'
import { motion } from 'framer-motion';
import "./main.css"
import SVG from "Assets/Images/undraw_waiting__for_you_ldha.svg"

const RegisterComponent = () => {
  const [registrationData, setRegistrationData] = useState({
    firstname: "",
    othernames: "",
    msisdn: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [, setIsSubmitted] = useState(false);
  const [confirmPassword, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors(formValidation(registrationData, confirmPassword));
    setIsSubmitted(true);

    // form submission
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credential: "include",
      body: JSON.stringify({
        ...registrationData,
        country: "Ghana",
        isoCode: "GH",
      }),
    };

    // been waiting for a while 
    // register to unlock some special features
    const apiResponse = await fetch(
      "http://127.0.0.1:8000/api/v1/register",
      requestOptions
    );
    const data = await apiResponse.json();
    console.log({
      message: "making a call to the go backend..",
      body: {
        response: data,
        registrationData: registrationData,
      },
    });

    setIsLoading(false);
  }

  function formValidation(values, confirm_password) {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "First name is required.";
    }
    if (!values.othernames) {
      errors.othernames = "Other names are required.";
    }
    if (!values.msisdn) {
      errors.msisdn = "Phone number is required.";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    }
    if (values.password != confirm_password) {
      errors.passwordMatch = "Passwords must match.";
    }
    return errors;
  }
  return (
    <>
      <div className="grid lg:grid-cols-3 min-h-[75vh] bg-gray-50 rounded shadow-md register-bg">
        <div className='lg:flex xl:flex items-center justify-center flex-col hidden'>
          <img
            src={SVG}
            className="bg-cover rounded bg-center h-1/2"
          />
          <div className='text-base kreon-font my-5 text-gray-600'>Been waiting for a while...</div>
        </div>
        <div className="p-5 col-span-2 px-8 md:px-16 lg:px-16 md:mt-5 lg:mt-20">
          <div className="my-10">
            <form onSubmit={handleSubmit} method="post">
              <>
                <div className='border-b'>
                  <h1 className="text-4xl abel-font">Sign Up</h1>
                  <p className="imprima-font text-[#808080] py-1">
                    Create an account to explore more features
                  </p>
                </div>

                <div className="py-4 md:py-12 lg:py-12">
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label
                        htmlFor="firstName"
                        className="imprima-font text-[#808080]"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name=""
                        className="outline-0 text-[#808080] bg-gray-200 h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                        placeholder="Kenneth"
                        onChange={(e) => {
                          setRegistrationData({
                            ...registrationData,
                            firstname: e.target.value,
                          });
                        }}
                      />
                      <p className="text-xs text-red-600 kreon-font">
                        {formErrors.firstname}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="firstName"
                        className="imprima-font text-[#808080]"
                      >
                        Other names
                      </label>
                      <input
                        type="text"
                        name=""
                        className="outline-0 text-[#808080] bg-gray-200 h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                        placeholder="Abrahams Lartey"
                        onChange={(e) => {
                          setRegistrationData({
                            ...registrationData,
                            othernames: e.target.value,
                          });
                        }}
                      />
                      <p className="text-xs text-red-600 kreon-font">
                        {formErrors.othernames}
                      </p>
                    </div>
                  </div>
                  <div className='w-full md:w-3/4 lg:w-3/4'>
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
                        onChange={(e) => {
                          setRegistrationData({
                            ...registrationData,
                            msisdn: e.target.value,
                          });
                        }}
                      />
                      <p className="text-xs text-red-600 kreon-font">
                        {formErrors.msisdn}
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label
                        htmlFor="password"
                        className="imprima-font text-[#808080]"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name=""
                        className="outline-0 text-[#808080] bg-gray-200 h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                        placeholder="xxxxxxxx"
                        onChange={(e) => {
                          setRegistrationData({
                            ...registrationData,
                            password: e.target.value,
                          });
                        }}
                      />
                      <p className="text-xs text-red-600 kreon-font">
                        {formErrors.password}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="confirm-password"
                        className="imprima-font text-[#808080]"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name=""
                        className="outline-0 text-[#808080] bg-gray-200 h-8 pl-2 rounded my-2 placeholder:text-sm placeholder:text-[#c5c5c5]"
                        placeholder="xxxxxxxx"
                        onChange={(e) => {
                          setPasswordConfirmation(e.target.value);
                        }}
                      />
                      <p className="text-xs text-red-600 kreon-font">
                        {formErrors.passwordMatch}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <motion.button
                    disabled={isLoading ? true : false}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                      scale: 0.9,
                      borderRadius: "2%",
                    }}
                    type="submit"
                    className="h-10 w-full md:w-1/3 lg:w-1/3 mt-3 bg-[#F84605] text-white flex justify-center items-center rounded shadow-lg kreon-font cursor-pointer"
                  >
                    {isLoading ? "Loading..." : "Create Account"}
                  </motion.button>
                </div>
              </>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
